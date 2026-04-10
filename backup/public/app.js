document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    const State = {
        nodes: [
            { id: 'node-A', name: 'Device A (Sam)', status: 'online', distance: '10m', type: 'peer', coordinates: {x: 100, y: 150} },
            { id: 'node-B', name: 'Device B (Taylor)', status: 'online', distance: '45m', type: 'peer', coordinates: {x: 300, y: 100} },
            { id: 'node-C', name: 'Device C (Alex)', status: 'offline', distance: '120m', type: 'peer', coordinates: {x: 500, y: 250} },
            { id: 'node-D', name: 'Device D (Local)', status: 'online', distance: '0m', type: 'peer', coordinates: {x: 250, y: 350} },
        ],
        gatewayMode: false,
        internetAvailable: true, 
        messagesBridged: 0,
        activityLog: [],
        messages: [],
        currentTarget: 'node-A', // Default chat
        isAnimatingNetwork: false
    };

    // Store messages generally
    // format: { id, to, from, text, priority, status (Pending, Relayed, Delivered), encrypted, timestamp, isMine }

    // --- References ---
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');
    const pageTitle = document.getElementById('page-title');
    
    // Gateway Refs
    const gatewayToggle = document.getElementById('gateway-toggle');
    const globalGatewayStatus = document.getElementById('global-gateway-status');
    const gtwInternetStatus = document.getElementById('gtw-internet-status');
    const gtwMessagesCount = document.getElementById('gtw-messages-count');
    const gatewayLogs = document.getElementById('gateway-logs');

    // Chat Refs
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    const btnBroadcast = document.getElementById('btn-broadcast');
    const prioritySelect = document.getElementById('msg-priority');

    // Network Canvas
    const canvas = document.getElementById('network-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    // --- Navigation Logic ---
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('data-target');
            screens.forEach(s => s.classList.remove('active'));
            const activeScreen = document.getElementById(targetId);
            activeScreen.classList.add('active');

            pageTitle.textContent = item.querySelector('span').textContent;
            
            if(targetId === 'network') {
                if(!State.isAnimatingNetwork) {
                    resizeCanvas();
                    initNetworkAnimation();
                }
            } else {
                State.isAnimatingNetwork = false;
            }
        });
    });

    // --- Initialization ---
    function init() {
        logActivity('System Initialized', 'Node joined MeshNet locally.');
        
        // Seed some mock messages
        State.messages.push({ id: 1, from: 'node-A', to: 'node-D', text: 'Hey, are you connected to the mesh?', priority: 'normal', status: 'Delivered', encrypted: true, timestamp: new Date(Date.now() - 60000).toLocaleTimeString(), isMine: false });
        
        updateDashboard();
        updateChatSidebar();
        renderMessages();
        bindEvents();
    }

    function logActivity(title, details) {
        State.activityLog.unshift({ title, details, time: new Date().toLocaleTimeString() });
        if(State.activityLog.length > 20) State.activityLog.pop();
        renderActivityList();
    }

    function gatewayLog(msg, type='log-entry') {
        const span = document.createElement('span');
        span.className = `log-entry ${type}`;
        span.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        gatewayLogs.appendChild(span);
        gatewayLogs.scrollTop = gatewayLogs.scrollHeight;
    }

    function renderActivityList() {
        const list = document.getElementById('recent-activity-list');
        if(!list) return;
        list.innerHTML = '';
        State.activityLog.forEach(log => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${log.title}</strong> <br> <span style="font-size: 12px; color: var(--text-muted);">${log.details} • ${log.time}</span>`;
            li.style.padding = '8px 0';
            li.style.borderBottom = '1px solid var(--panel-border)';
            list.appendChild(li);
        });
    }

    function updateDashboard() {
        document.getElementById('dash-nearby-count').textContent = State.nodes.length;
        document.getElementById('dash-active-count').textContent = State.nodes.filter(n => n.status === 'online').length;
        
        const deviceList = document.getElementById('nearby-devices-list');
        if(deviceList) {
            deviceList.innerHTML = '';
            State.nodes.forEach(node => {
                if(node.id === 'node-D') return; // Skip self
                const li = document.createElement('li');
                li.style.padding = '12px';
                li.style.display = 'flex';
                li.style.justifyContent = 'space-between';
                li.style.borderBottom = '1px solid var(--panel-border)';
                li.innerHTML = `
                    <div><i class="fa-solid fa-mobile-screen" style="margin-right: 8px;"></i>${node.name}</div>
                    <span style="color: ${node.status === 'online' ? 'var(--accent-success)' : 'var(--text-muted)'}; font-size: 12px;">
                        ${node.status} (${node.distance})
                    </span>
                `;
                deviceList.appendChild(li);
            });
        }
    }

    function updateChatSidebar() {
        const list = document.getElementById('chat-nodes-list');
        if(!list) return;
        list.innerHTML = '';
        State.nodes.forEach(node => {
            if(node.id === 'node-D') return; // Skip self
            const li = document.createElement('li');
            li.textContent = node.name;
            li.style.padding = '12px';
            li.style.cursor = 'pointer';
            li.style.borderRadius = '8px';
            li.style.marginBottom = '4px';
            li.style.transition = 'all 0.2s';
            
            if(State.currentTarget === node.id) {
                li.style.background = 'rgba(0, 229, 255, 0.1)';
                li.style.borderLeft = '3px solid var(--accent-primary)';
            } else {
                li.style.background = 'transparent';
                li.style.borderLeft = '3px solid transparent';
            }
            
            if(node.status === 'offline') li.style.opacity = '0.5';
            
            li.onclick = () => {
                State.currentTarget = node.id;
                document.getElementById('chat-current-target').textContent = `Chat with ${node.name}`;
                updateChatSidebar();
                renderMessages();
            };
            list.appendChild(li);
        });
        
        // Ensure header text is correct initially
        const targetNode = State.nodes.find(n => n.id === State.currentTarget);
        if(targetNode) {
            document.getElementById('chat-current-target').textContent = `Chat with ${targetNode.name}`;
        }
    }

    function renderMessages() {
        const container = document.getElementById('chat-messages-container');
        if(!container) return;
        container.innerHTML = '';
        
        const relevantMessages = State.messages.filter(m => 
            m.to === 'broadcast' || 
            (m.to === State.currentTarget && m.from === 'node-D') || 
            (m.from === State.currentTarget && m.to === 'node-D')
        );

        relevantMessages.forEach(msg => {
            const div = document.createElement('div');
            div.className = `msg-bubble ${msg.isMine ? 'msg-sent' : 'msg-received'} ${msg.priority === 'emergency' ? 'msg-emergency' : ''}`;
            
            let statusIcon = '';
            if(msg.isMine) {
                if(msg.status === 'Pending') statusIcon = '<i class="fa-solid fa-clock"></i>';
                else if(msg.status === 'Relayed') statusIcon = '<i class="fa-solid fa-check"></i>';
                else if(msg.status === 'Delivered') statusIcon = '<i class="fa-solid fa-check-double"></i>';
            }

            const encIcon = msg.encrypted ? '<i class="fa-solid fa-lock" style="font-size: 8px;"></i>' : '';

            div.innerHTML = `
                <div class="msg-text">${msg.to === 'broadcast' && !msg.isMine ? `<strong>From ${State.nodes.find(n=>n.id==msg.from)?.name}:</strong> ` : ''}${msg.text}</div>
                <div class="msg-meta">
                    <span>${msg.timestamp} ${encIcon}</span>
                    <span>${msg.isMine ? msg.status + ' ' + statusIcon : ''}</span>
                </div>
            `;
            container.appendChild(div);
        });
        
        container.scrollTop = container.scrollHeight;
    }

    function bindEvents() {
        // Send message
        const sendMessage = (targetId, isBroadcast=false) => {
            const text = chatInput.value.trim();
            if(!text) return;
            
            const p = prioritySelect.value;
            const targetNode = State.nodes.find(n => n.id === targetId);
            
            const msgObj = {
                id: Date.now(),
                from: 'node-D',
                to: isBroadcast ? 'broadcast' : targetId,
                text,
                priority: p,
                status: 'Pending',
                encrypted: true,
                timestamp: new Date().toLocaleTimeString(),
                isMine: true
            };
            
            State.messages.push(msgObj);
            chatInput.value = '';
            renderMessages();
            logActivity('Message Dispatched', `To: ${isBroadcast ? 'All Nodes' : targetNode.name} (${p} priority)`);

            // Simulate Network Routing / Store and Forward
            setTimeout(() => {
                if (isBroadcast) {
                    msgObj.status = 'Delivered';
                    renderMessages();
                    if(State.gatewayMode) forwardToGateway(msgObj);
                } else if (targetNode && targetNode.status === 'online') {
                    // Direct connection or simple relay
                    msgObj.status = 'Relayed';
                    renderMessages();
                    setTimeout(() => {
                        msgObj.status = 'Delivered';
                        renderMessages();
                        // If it's gateway node, auto forward (mock logic)
                        if(State.gatewayMode) {
                            forwardToGateway(msgObj);
                        }
                    }, 1500);
                } else {
                    // Store locally
                    msgObj.status = 'Pending (Stored Locally)';
                    renderMessages();
                    logActivity('Message Stored', `Recipient offline. Waiting for route.`);
                    
                    // If Gateway is enabled, upload to server immediately via internet!
                    if(State.gatewayMode && State.internetAvailable) {
                        setTimeout(() => {
                            forwardToGateway(msgObj);
                            msgObj.status = 'Forwarded via Gateway';
                            renderMessages();
                        }, 2000);
                    }
                }
            }, 800);
        };

        chatSendBtn.addEventListener('click', () => sendMessage(State.currentTarget));
        chatInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') sendMessage(State.currentTarget);
        });

        btnBroadcast.addEventListener('click', () => {
             btnBroadcast.classList.add('btn-danger');
             setTimeout(()=> btnBroadcast.classList.remove('btn-danger'), 300);
             sendMessage('broadcast', true);
        });

        // Gateway Mode Toggle
        gatewayToggle.addEventListener('change', (e) => {
            State.gatewayMode = e.target.checked;
            
            if(State.gatewayMode) {
                globalGatewayStatus.classList.add('online');
                globalGatewayStatus.innerHTML = '<i class="fa-solid fa-cloud"></i><span>Gateway Active</span>';
                
                gtwInternetStatus.textContent = State.internetAvailable ? 'Connected via WiFi' : 'No Connection';
                gtwInternetStatus.className = State.internetAvailable ? 'status-online' : 'status-offline';
                
                logActivity('Gateway Mode Enabled', 'Device is now an internet bridge.');
                gatewayLog('Gateway service started...', 'highlight');
                if(State.internetAvailable) {
                    gatewayLog('Connected to upstream uplink server.', 'success');
                    gatewayLog('Listening for pending mesh messages needing external routing.');
                    
                    // Forward any pending messages
                    State.messages.filter(m => m.status.includes('Pending')).forEach(m => {
                        forwardToGateway(m);
                        m.status = 'Forwarded via Gateway';
                    });
                    renderMessages();
                }
            } else {
                globalGatewayStatus.classList.remove('online');
                globalGatewayStatus.innerHTML = '<i class="fa-solid fa-wifi"></i><span>Offline</span>';
                gtwInternetStatus.textContent = 'Not Available';
                gtwInternetStatus.className = 'status-offline';
                
                logActivity('Gateway Mode Disabled', 'Device returned to normal node duties.');
                gatewayLog('Gateway service stopped.', 'warning');
            }
        });
    }

    function forwardToGateway(msg) {
        if(!State.gatewayMode || !State.internetAvailable) return;
        setTimeout(() => {
            gatewayLog(`Bridge Action: Routing message [ID:${msg.id}] to cloud endpoint...`, 'highlight');
            State.messagesBridged++;
            gtwMessagesCount.textContent = State.messagesBridged;
            setTimeout(() => {
                gatewayLog(`SUCCESS: Message [ID:${msg.id}] successfully synchronized externally.`, 'success');
            }, 1000);
        }, 500);
    }

    // --- Network Canvas Animation ---
    function resizeCanvas() {
        if(!canvas) return;
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    window.addEventListener('resize', () => {
        if(State.isAnimatingNetwork) resizeCanvas();
    });

    function initNetworkAnimation() {
        if(!canvas || !ctx) return;
        State.isAnimatingNetwork = true;
        
        let particles = [];
        
        function draw() {
            if(!State.isAnimatingNetwork) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Re-map nodes relative to canvas dimensions
            const nodesArr = State.nodes.map((n, i) => {
                return {
                    ...n,
                    x: canvas.width * 0.2 + (i * 150) % (canvas.width * 0.6),
                    y: canvas.height * 0.2 + (i * 120) % (canvas.height * 0.6) + (i%2*50)
                };
            });

            // Draw connections
            nodesArr.forEach(n1 => {
                nodesArr.forEach(n2 => {
                    if (n1.id !== n2.id && n1.status === 'online' && n2.status === 'online') {
                        ctx.beginPath();
                        ctx.moveTo(n1.x, n1.y);
                        ctx.lineTo(n2.x, n2.y);
                        // Active bridge line
                        ctx.strokeStyle = State.gatewayMode && (n1.id === 'node-D' || n2.id === 'node-D') 
                                        ? 'rgba(0, 229, 255, 0.4)' 
                                        : 'rgba(255, 255, 255, 0.1)';
                        ctx.lineWidth = 2;
                        ctx.stroke();
                    }
                });
            });

            // Draw Nodes
            nodesArr.forEach(n => {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
                
                if (n.id === 'node-D') {
                    ctx.fillStyle = State.gatewayMode ? 'var(--accent-primary)' : 'var(--text-main)';
                    ctx.shadowColor = State.gatewayMode ? 'var(--accent-primary)' : 'white';
                    ctx.shadowBlur = 15;
                } else if (n.status === 'online') {
                    ctx.fillStyle = 'var(--accent-secondary)';
                    ctx.shadowColor = 'var(--accent-secondary)';
                    ctx.shadowBlur = 15;
                } else {
                    ctx.fillStyle = '#333';
                    ctx.shadowBlur = 0;
                }
                ctx.fill();
                
                // Labels
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.font = '12px Inter';
                ctx.shadowBlur = 0;
                ctx.fillText(n.id === 'node-D' ? 'Local Node' : n.name, n.x + 15, n.y + 5);
            });
            
            requestAnimationFrame(draw);
        }
        draw();
    }

    init();
});
