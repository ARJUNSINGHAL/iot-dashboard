# 🌐 IoT Dashboard - ESP32 + DHT11 + AWS IoT

A modern, responsive IoT dashboard web application that shows real-time temperature and humidity data sent from an ESP32 with DHT11 sensor via AWS IoT Core using MQTT over WebSocket.

---

## 🚀 Features

- 📈 Real-time sensor data chart and table
- 🔒 Secure login using AWS Cognito
- 🌙 Light/Dark mode toggle
- 📱 Mobile responsive layout
- 🧠 MQTT over WebSocket integration with AWS IoT

---

## 🛠️ How to Use

1. Clone or download the repository.
2. Configure AWS IoT Core, Cognito Identity Pool, and IAM roles.
3. Update your JS files with MQTT endpoint and credentials.
4. Run the Flask backend (if used) or open `index.html` directly in your browser.
5. Connect ESP32 to AWS IoT and start sending DHT11 data.

---

## 📁 File Structure

/iot-dashboard/
│
├── index.html # Login page
├── dashboard.html # Real-time dashboard
├── style.css # Styling and dark mode
├── app.js # MQTT & dashboard logic
├── README.md # Project documentation
└── assets/ # (Optional) Images/icons/fonts




---

## 📸 Preview

![IoT Dashboard](https://via.placeholder.com/800x400.png?text=IoT+Dashboard+Preview)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
