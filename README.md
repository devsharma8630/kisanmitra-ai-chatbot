# KisanMitra – Free AI Farming Chatbot

KisanMitra is a **free offline AI chatbot designed to help farmers** with crop guidance, diseases, irrigation, fertilizers, government schemes, and more.

It works **without any API key or internet connection** after loading the page.

Built using **HTML, CSS, and JavaScript with a custom knowledge dataset**.

---

# Features

 Works **100% offline**
 **Bilingual support** – English + Hindi
 **Farming knowledge base** for Indian agriculture
 Covers **crops, pests, irrigation, fertilizers, and government schemes**
 **Keyword-based AI search engine**
 **Smart suggestions if no answer is found**
 Clean **modern farming UI**

---

#  Topics Covered

### Crops & Planting

* Wheat Farming
* Rice / Paddy
* Sugarcane
* Tomato
* Mustard

### Diseases & Pests

* Rice Blast
* Locust Attacks
* Plant Wilting

### Soil & Fertilizers

* Soil Testing
* NPK Fertilizers
* Organic Farming

### Irrigation

* Drip Irrigation
* Flood Irrigation
* Water Management

### Government Schemes

* PM Kisan
* PM Fasal Bima Yojana
* Kisan Credit Card
* MSP Prices

### Harvest & Storage

* Grain Storage
* Post-Harvest Practices

### Weather & Seasons

* Kharif Season
* Rabi Season

---

#  How It Works

The chatbot uses a **custom farming dataset (`dataset.js`)** containing:

* Keywords
* Topic category
* English answers
* Hindi answers

When a user asks a question:

1️ The chatbot matches keywords with the dataset
2️ Calculates a score for best match
3️ Returns the most relevant farming answer
4️ Suggests related topics if available

No external AI or API is required.

---

#  Project Structure

```
KisanMitra
│
├── index.html      # Main chatbot interface
├── dataset.js      # Farming knowledge base
└── README.md
```

---

#  Technologies Used

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Custom dataset search engine

---

#  Future Improvements

Planned upgrades:

*  Live weather API
*  Crop disease detection using AI
*  Live mandi prices
*  Mobile app version
*  Voice input for farmers
*  More regional languages

---

#  Author

Dev Sharma
B.Tech CSE Student

---

#  License

This project is open-source and free to use for learning and agricultural support.
