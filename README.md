# 🚕 RideShare

**RideShare** is a real-time mobile app built with React Native that connects riders with nearby drivers using location services. With seamless user authentication, ride requests, live location tracking, and map integration via OpenStreetMap, RideShare is designed to make urban commuting more efficient, accessible, and user-friendly.

---

## 📱 Features

- 📍 **Live Location Tracking** – See drivers and riders on the map in real-time using OpenStreetMap.
- 🧭 **Route Navigation** – Routes and ETA powered by geolocation APIs.
- 🔐 **User Authentication** – Secure login and signup using Firebase Auth.
- 🔔 **Push Notifications** – Ride status updates and alerts.
- 💬 **Ride Request System** – Request and accept rides in a few taps.
- 🧾 **Ride History** – Track previous trips and ride details.
- 🗺️ **Role-Based UI** – Separate flows for drivers and riders.

---

## ⚙️ Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Frontend      | React Native (Expo or CLI)       |
| Backend/Auth  | Firebase (Firestore, Auth, FCM)  |
| Maps & Geo    | OpenStreetMap API / Geolocation  |
| State Mgmt    | Context API / Redux (if used)    |
| Realtime Sync | Firebase Realtime Database       |
| Deployment    | Expo Go / Android & iOS builds   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x
- Expo CLI (or React Native CLI)
- Firebase Project & API keys
- OpenStreetMap API access (optional for custom layers)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jannat226/rideshare.git
   cd rideshare
