ResilienceNet

A Decentralized Communication System for Internet Blackouts

1. The Core Problem

During wars, disasters, or government shutdowns, internet infrastructure often stops working.

This happens because:

Cell towers are destroyed
Governments shut down ISPs
Power grids fail
Censorship blocks communication platforms

Examples include:

Ukraine war
Iran internet shutdowns
Myanmar protests
earthquake disaster zones

When this happens:

Phones → Cell tower → ISP → Internet

If the cell tower or ISP disappears, communication stops completely.

People cannot:

call for help
coordinate evacuations
report events
contact family
share evidence with the outside world
2. The Core Idea

Instead of relying on telecom infrastructure, devices create their own network.

Each device becomes both:

a user
a router

This forms a mesh network.

3. What Is a Mesh Network?

In a normal network:

Phone → Cell Tower → Internet

In a mesh network:

Phone A → Phone B → Phone C → Phone D

Messages hop across devices.

Each device forwards the message until it reaches its destination.

This is called multi-hop communication.

4. The Key Concept: Opportunistic Networking

Connections are temporary and unpredictable.

A device may:

gain internet for a moment
encounter another device briefly
move across locations

So the system uses store-and-forward messaging.

Example
User sends message
↓
Message stored locally
↓
Device later meets another device
↓
Message forwarded
↓
Eventually reaches gateway

This technique is used in delay-tolerant networks (DTN).

5. System Architecture

The system contains three main components.

1. Client Device (User Phone)

Each phone runs the app.

Functions:

send messages
receive messages
relay messages
encrypt/decrypt data
2. Mesh Network Layer

This layer connects devices.

Possible technologies:

Bluetooth
WiFi Direct
WebRTC
libp2p

Devices automatically discover nearby peers.

3. Gateway Node

If any device has internet access:

Mesh → Gateway → Internet

The gateway uploads messages to:

servers
journalists
humanitarian organizations
global social networks
6. Example Scenario

Imagine a city during a war.

Internet is down.

Five people have the app.

A --- B --- C --- D --- E

Person A sends message:

“We need medical help at this location.”

The message travels:

A → B → C → D → E

If E has internet, the message reaches the world.

7. Message Structure

Each message contains metadata.

Example structure:

message_id
sender_id
recipient_id
timestamp
hop_count
encrypted_payload
signature

Important fields:

message_id

Prevents duplicate messages.

hop_count

Limits infinite forwarding.

signature

Verifies sender authenticity.

8. Peer Discovery

Devices must discover each other.

Possible methods:

Bluetooth scanning

Devices broadcast their presence.

WiFi Direct

Devices connect directly.

P2P protocols

Libraries like libp2p manage discovery automatically.

9. Message Routing

The system uses flood routing (simplest method).

Algorithm:

device receives message
checks if message already seen
if not → forward to neighbors

Example:

A sends message
↓
B and C receive it
↓
B forwards to D
C forwards to E

Eventually the message spreads across the network.

More advanced routing methods include:

epidemic routing
probabilistic routing
priority routing

But for a hackathon flood routing is enough.

10. Security Layer

Security is extremely important.

In hostile environments:

governments monitor traffic
attackers intercept messages
metadata leaks identities

So the system uses end-to-end encryption.

Encryption Process

Sender encrypts message:

ciphertext = encrypt(message, receiver_public_key)

Only receiver can decrypt.

message = decrypt(ciphertext, private_key)

Libraries used:

libsodium
NaCl
AES
Signal protocol
11. Identity System

Each user gets a cryptographic identity.

Generated when app installs.

public_key
private_key

Public key acts as user ID.

Example:

User ID = hash(public_key)

Advantages:

no central account server
anonymous
tamper-proof
12. Message Persistence

Devices must store messages temporarily.

Because the network is unstable.

Storage contains:

message cache
routing table
peer list

Messages are deleted after:

delivery confirmation
expiration time
13. Gateway Function

When a device gets internet:

mesh messages → gateway → global server

Server could:

email journalists
publish alerts
forward to NGOs
log events
14. What the Hackathon Prototype Builds

You don’t build the full system.

You build proof of concept.

Prototype demo:

Step 1

Three devices open app.

Step 2

Internet disabled.

Step 3

Device A sends message.

Step 4

Device B relays message.

Step 5

Device C receives message.

Step 6

Device C gets internet → forwards message to server.

This shows the core idea working.

15. Technology Stack
Frontend

Chat interface.

Possible tools:

React
React Native
Next.js
Networking

Peer-to-peer communication.

Possible tools:

WebRTC
libp2p
WebSockets
Encryption

Message security.

Libraries:

libsodium
tweetnacl
Backend Gateway

Internet bridge.

Tools:

Node.js
Express
WebSocket server
16. Future Improvements

If developed further, the system could include:

LoRa radio integration

Long-range mesh communication.

Satellite gateways

Use Starlink nodes.

AI message prioritization

Detect emergency messages.

location-based routing

Deliver messages faster.

17. Why This Idea Is Strong

It combines several important areas:

distributed systems
networking
cybersecurity
disaster response
privacy

Judges tend to like projects that have:

real problem
+
clear technical solution
+
working demo

This project checks all three.

18. The Key Insight

The entire project relies on one powerful idea:

Communication networks don’t need infrastructure if devices cooperate.

Phones themselves become the network.