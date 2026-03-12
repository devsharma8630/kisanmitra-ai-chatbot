// ═══════════════════════════════════════════════════════════════
//  KisanMitra Dataset — Your Own Farming Knowledge Base
//  Language: English + Hindi (Bilingual)
//  Topics: Crops, Diseases, Soil, Irrigation, Govt, Harvest, Weather
//  HOW TO ADD MORE: Copy any entry block and fill your own data!
// ═══════════════════════════════════════════════════════════════

const KISAN_DATASET = [

  // ════════════════════════════════
  //  🌱 CROPS & PLANTING
  // ════════════════════════════════
  {
    id: "crop_wheat",
    keywords: ["wheat", "gehu", "गेहूं", "gehun", "rabi crop", "winter crop"],
    topic: "Crops & Planting",
    icon: "🌾",
    question: "How to grow wheat? / गेहूं कैसे उगाएं?",
    answer: {
      en: `<b>🌾 Wheat Farming Guide</b><br><br>
<b>Best Season:</b> Rabi (October–November sowing)<br>
<b>Soil:</b> Loamy or clay-loam, pH 6–7.5<br>
<b>Temperature:</b> 10–25°C during growth<br><br>
<b>🔧 Steps:</b>
<ul>
<li>Prepare field with 2–3 deep ploughings</li>
<li>Apply 10–12 tonnes FYM (Farm Yard Manure) per acre</li>
<li>Sow seeds at 100–125 kg/acre depth of 5–6 cm</li>
<li>First irrigation at 20–25 days (Crown Root Initiation)</li>
<li>Total 4–6 irrigations needed</li>
<li>Apply Urea in 3 splits: at sowing, tillering, jointing</li>
</ul>
<b>🏆 Top Varieties:</b> HD-2967, PBW-343, GW-496, DBW-17<br>
<b>⏱ Harvest:</b> March–April (120–150 days)<br>
<b>💰 Yield:</b> 15–20 quintals/acre`,

      hi: `<b>🌾 गेहूं की खेती की जानकारी</b><br><br>
<b>सबसे अच्छा समय:</b> रबी (अक्टूबर–नवंबर में बुवाई)<br>
<b>मिट्टी:</b> दोमट या चिकनी-दोमट, pH 6–7.5<br>
<b>तापमान:</b> 10–25°C<br><br>
<b>🔧 तरीका:</b>
<ul>
<li>खेत में 2–3 गहरी जुताई करें</li>
<li>10–12 टन गोबर की खाद प्रति एकड़ डालें</li>
<li>100–125 kg/एकड़ बीज 5–6 cm गहराई पर बोएं</li>
<li>पहली सिंचाई 20–25 दिन बाद (CRI अवस्था)</li>
<li>कुल 4–6 सिंचाई जरूरी हैं</li>
<li>यूरिया 3 बार दें: बुवाई, कल्ले निकलते समय, गांठ बनते समय</li>
</ul>
<b>🏆 अच्छी किस्में:</b> HD-2967, PBW-343, GW-496<br>
<b>⏱ कटाई:</b> मार्च–अप्रैल (120–150 दिन में)<br>
<b>💰 पैदावार:</b> 15–20 क्विंटल/एकड़`
    }
  },

  {
    id: "crop_rice",
    keywords: ["rice", "paddy", "dhan", "धान", "chawal", "चावल", "kharif"],
    topic: "Crops & Planting",
    icon: "🌾",
    question: "How to grow rice/paddy? / धान कैसे उगाएं?",
    answer: {
      en: `<b>🌾 Paddy (Rice) Farming Guide</b><br><br>
<b>Season:</b> Kharif (June–July transplanting)<br>
<b>Soil:</b> Clay or clay-loam with good water retention<br><br>
<b>🔧 Steps:</b>
<ul>
<li>Prepare nursery beds 30 days before transplanting</li>
<li>Soak seeds 24 hrs, incubate 48 hrs before nursery</li>
<li>Transplant 25–30 day old seedlings, 2–3 per hill</li>
<li>Maintain 5 cm standing water for 30 days</li>
<li>Apply NPK: 120:60:40 kg/hectare</li>
<li>Weed at 20 and 40 days after transplanting</li>
</ul>
<b>🏆 Top Varieties:</b> Pusa Basmati-1, IR-36, MTU-1010, Swarna<br>
<b>💰 Yield:</b> 20–30 quintals/acre`,

      hi: `<b>🌾 धान की खेती</b><br><br>
<b>मौसम:</b> खरीफ (जून–जुलाई में रोपाई)<br>
<b>मिट्टी:</b> चिकनी मिट्टी जो पानी रोक सके<br><br>
<b>🔧 तरीका:</b>
<ul>
<li>रोपाई से 30 दिन पहले नर्सरी तैयार करें</li>
<li>बीज को 24 घंटे पानी में भिगोएं</li>
<li>25–30 दिन पुराने पौधे 2–3 प्रति हिल रोपें</li>
<li>30 दिन तक 5 cm पानी खेत में रखें</li>
<li>NPK: 120:60:40 kg/हेक्टेयर डालें</li>
<li>20 और 40 दिन पर निराई-गुड़ाई करें</li>
</ul>
<b>🏆 अच्छी किस्में:</b> पूसा बासमती-1, IR-36, स्वर्णा<br>
<b>💰 पैदावार:</b> 20–30 क्विंटल/एकड़`
    }
  },

  {
    id: "crop_sugarcane",
    keywords: ["sugarcane", "ganna", "गन्ना", "sugar", "chini"],
    topic: "Crops & Planting",
    icon: "🎋",
    question: "Sugarcane farming / गन्ने की खेती",
    answer: {
      en: `<b>🎋 Sugarcane Farming Guide</b><br><br>
<b>Season:</b> February–March (spring) or Oct–Nov (autumn)<br>
<b>Soil:</b> Deep loamy, pH 6.5–7.5<br><br>
<b>🔧 Key Steps:</b>
<ul>
<li>Use 3-budded setts, treat with Carbendazim solution</li>
<li>Plant in furrows 90 cm apart, 5 cm deep</li>
<li>Apply 300 kg Urea + 150 kg DAP + 60 kg MOP/acre</li>
<li>Earth up at 60 and 120 days</li>
<li>Irrigation every 10–15 days in summer</li>
<li>Harvest at 10–12 months</li>
</ul>
<b>💰 Yield:</b> 300–400 quintals/acre<br>
<b>MSP 2024:</b> ₹315/quintal`,

      hi: `<b>🎋 गन्ने की खेती</b><br><br>
<b>समय:</b> फरवरी–मार्च या अक्टूबर–नवंबर<br>
<b>मिट्टी:</b> गहरी दोमट, pH 6.5–7.5<br><br>
<b>🔧 मुख्य तरीका:</b>
<ul>
<li>3 आंख वाले टुकड़े काटें, Carbendazim से उपचार करें</li>
<li>90 cm दूरी पर नालियों में 5 cm गहरा लगाएं</li>
<li>300 kg यूरिया + 150 kg DAP + 60 kg MOP/एकड़</li>
<li>60 और 120 दिन पर मिट्टी चढ़ाएं</li>
<li>गर्मियों में 10–15 दिन पर सिंचाई</li>
<li>10–12 महीने में कटाई</li>
</ul>
<b>💰 पैदावार:</b> 300–400 क्विंटल/एकड़<br>
<b>MSP 2024:</b> ₹315/क्विंटल`
    }
  },

  {
    id: "crop_tomato",
    keywords: ["tomato", "tamatar", "टमाटर", "vegetable", "sabzi"],
    topic: "Crops & Planting",
    icon: "🍅",
    question: "Tomato farming / टमाटर की खेती",
    answer: {
      en: `<b>🍅 Tomato Cultivation Guide</b><br><br>
<b>Season:</b> All year in India (best: June–July & Oct–Nov)<br>
<b>Soil:</b> Well-drained sandy loam, pH 6–7<br><br>
<b>🔧 Steps:</b>
<ul>
<li>Prepare nursery, transplant 25–30 day seedlings</li>
<li>Spacing: 60×45 cm</li>
<li>Apply 20 tonnes FYM + NPK 120:80:80/hectare</li>
<li>Stake plants at 30 cm height</li>
<li>Pinch apical bud for bushy growth</li>
<li>Spray Calcium Nitrate to prevent blossom end rot</li>
</ul>
<b>🏆 Varieties:</b> Pusa Ruby, Arka Vikas, Hybrid varieties<br>
<b>💰 Yield:</b> 200–250 quintals/acre`,

      hi: `<b>🍅 टमाटर की खेती</b><br><br>
<b>मौसम:</b> पूरे साल (जून–जुलाई और अक्टूबर–नवंबर सबसे अच्छा)<br>
<b>मिट्टी:</b> अच्छी जल निकासी वाली दोमट, pH 6–7<br><br>
<b>🔧 तरीका:</b>
<ul>
<li>नर्सरी तैयार करें, 25–30 दिन में रोपाई</li>
<li>दूरी: 60×45 cm</li>
<li>20 टन गोबर खाद + NPK 120:80:80/हेक्टेयर</li>
<li>30 cm ऊंचाई पर सहारा दें</li>
<li>शाखा काटते रहें</li>
<li>Calcium Nitrate का छिड़काव करें</li>
</ul>
<b>🏆 किस्में:</b> पूसा रूबी, अर्का विकास, हाइब्रिड<br>
<b>💰 पैदावार:</b> 200–250 क्विंटल/एकड़`
    }
  },

  {
    id: "crop_mustard",
    keywords: ["mustard", "sarso", "सरसों", "sarson", "oil seed", "tel"],
    topic: "Crops & Planting",
    icon: "🌼",
    question: "Mustard farming / सरसों की खेती",
    answer: {
      en: `<b>🌼 Mustard Farming Guide</b><br><br>
<b>Season:</b> Rabi — sow Oct–Nov, harvest Feb–Mar<br>
<b>Soil:</b> Sandy loam to loam, pH 6–7.5<br><br>
<b>🔧 Steps:</b>
<ul>
<li>Sow 1.5–2 kg seed/acre in rows 30–45 cm apart</li>
<li>Thin plants to 15 cm within rows at 15 days</li>
<li>Apply NPK 80:40:40 kg/hectare</li>
<li>1–2 irrigations: at flowering and pod formation</li>
<li>Spray Sulphur 80WP for aphid control</li>
</ul>
<b>🏆 Varieties:</b> Pusa Bold, RH-749, Varuna<br>
<b>💰 Yield:</b> 6–8 quintals/acre<br>
<b>MSP 2024:</b> ₹5,650/quintal`,

      hi: `<b>🌼 सरसों की खेती</b><br><br>
<b>समय:</b> रबी — अक्टूबर–नवंबर में बोएं, फरवरी–मार्च में काटें<br>
<b>मिट्टी:</b> बलुई दोमट, pH 6–7.5<br><br>
<b>🔧 तरीका:</b>
<ul>
<li>1.5–2 kg बीज/एकड़, 30–45 cm कतार दूरी पर बोएं</li>
<li>15 दिन बाद पौधों को 15 cm दूरी पर विरल करें</li>
<li>NPK 80:40:40 kg/हेक्टेयर</li>
<li>1–2 सिंचाई: फूल आते समय और फली बनते समय</li>
<li>माहू के लिए Sulphur 80WP का छिड़काव करें</li>
</ul>
<b>🏆 किस्में:</b> पूसा बोल्ड, RH-749, वरुणा<br>
<b>💰 पैदावार:</b> 6–8 क्विंटल/एकड़<br>
<b>MSP 2024:</b> ₹5,650/क्विंटल`
    }
  },

  // ════════════════════════════════
  //  🦠 DISEASES & PESTS
  // ════════════════════════════════
  {
    id: "disease_blast",
    keywords: ["blast", "rice blast", "paddy disease", "brown spot", "leaf spot", "dhaan rog"],
    topic: "Diseases & Pests",
    icon: "🦠",
    question: "Rice blast disease / धान का ब्लास्ट रोग",
    answer: {
      en: `<b>🦠 Rice Blast Disease</b><br><br>
<b>Symptoms:</b> Diamond-shaped grey spots with brown borders on leaves. In severe cases, neck of panicle turns black (neck blast).<br><br>
<b>🔍 Cause:</b> Fungus — Magnaporthe oryzae<br><br>
<b>💊 Treatment:</b>
<ul>
<li>Spray <b>Tricyclazole 75WP @ 6g per 15L water</b></li>
<li>Or <b>Isoprothiolane 40EC @ 1.5ml/L</b></li>
<li>2nd spray after 15 days if needed</li>
<li>Avoid excess Nitrogen fertilizer</li>
</ul>
<b>🛡 Prevention:</b>
<ul>
<li>Use resistant varieties: Pusa Basmati-1509</li>
<li>Treat seeds with Carbendazim before sowing</li>
<li>Drain field periodically</li>
</ul>`,

      hi: `<b>🦠 धान का ब्लास्ट रोग</b><br><br>
<b>पहचान:</b> पत्तियों पर हीरे के आकार के भूरे-सफेद धब्बे। गंभीर होने पर बालियों की गर्दन काली पड़ जाती है।<br><br>
<b>🔍 कारण:</b> फफूंद — Magnaporthe oryzae<br><br>
<b>💊 उपचार:</b>
<ul>
<li><b>Tricyclazole 75WP @ 6g प्रति 15L पानी</b> का छिड़काव करें</li>
<li>या <b>Isoprothiolane 40EC @ 1.5ml/L</b></li>
<li>जरूरत हो तो 15 दिन बाद दोबारा छिड़काव करें</li>
<li>नाइट्रोजन खाद ज्यादा न डालें</li>
</ul>
<b>🛡 बचाव:</b>
<ul>
<li>रोगरोधी किस्में लगाएं: पूसा बासमती-1509</li>
<li>बुवाई से पहले Carbendazim से बीज उपचार</li>
<li>खेत में पानी बदलते रहें</li>
</ul>`
    }
  },

  {
    id: "pest_locust",
    keywords: ["locust", "tiddi", "टिड्डी", "tiddi dal", "grasshopper", "pest attack"],
    topic: "Diseases & Pests",
    icon: "🦗",
    question: "Locust attack / टिड्डी दल का हमला",
    answer: {
      en: `<b>🦗 Locust Attack Management</b><br><br>
<b>Signs:</b> Sudden large swarms eating all green matter within hours.<br><br>
<b>🚨 Immediate Action:</b>
<ul>
<li>Alert your district agriculture officer immediately</li>
<li>Make noise (drums, vessels) to scare swarms away</li>
<li>Spray <b>Chlorpyriphos 20EC @ 2.5L/hectare</b> with power sprayer</li>
<li>Or <b>Malathion 50EC @ 2L/hectare</b></li>
<li>Spray during early morning or evening when locusts rest</li>
</ul>
<b>📞 Helpline:</b> Call State Agriculture Dept immediately<br>
<b>Government provides free pesticide spray in many states.</b>`,

      hi: `<b>🦗 टिड्डी दल प्रबंधन</b><br><br>
<b>पहचान:</b> अचानक बड़े झुंड में आकर घंटों में सारी हरियाली खा जाते हैं।<br><br>
<b>🚨 तुरंत करें:</b>
<ul>
<li>तुरंत जिला कृषि अधिकारी को सूचित करें</li>
<li>ढोल, बर्तन बजाकर टिड्डियों को भगाएं</li>
<li><b>Chlorpyriphos 20EC @ 2.5L/हेक्टेयर</b> पावर स्प्रेयर से छिड़कें</li>
<li>या <b>Malathion 50EC @ 2L/हेक्टेयर</b></li>
<li>सुबह या शाम छिड़काव करें जब टिड्डियां बैठी हों</li>
</ul>
<b>📞 हेल्पलाइन:</b> राज्य कृषि विभाग को तुरंत सूचित करें<br>
<b>कई राज्यों में सरकार मुफ्त छिड़काव करती है।</b>`
    }
  },

  {
    id: "disease_wilt",
    keywords: ["wilt", "murjhana", "मुरझाना", "yellow leaves", "pila", "dying plant", "root rot"],
    topic: "Diseases & Pests",
    icon: "🍂",
    question: "Plant wilting / पौधा मुरझाना",
    answer: {
      en: `<b>🍂 Plant Wilting — Causes & Cure</b><br><br>
<b>Common Causes:</b><br>
<b>1. Fusarium Wilt (Fungal):</b> Brown vascular tissue inside stem<br>
→ Drench soil with <b>Carbendazim 50WP @ 2g/L</b><br><br>
<b>2. Root Rot:</b> Waterlogged soil, black roots<br>
→ Improve drainage, apply <b>Trichoderma viride @ 5kg/acre</b><br><br>
<b>3. Water Stress:</b> Dry, cracked soil<br>
→ Irrigate immediately, mulch soil<br><br>
<b>4. Nematodes:</b> Knots on roots<br>
→ Apply <b>Carbofuran 3G @ 7–10 kg/acre</b> in soil<br><br>
<b>🛡 Prevention:</b> Crop rotation, avoid waterlogging, use healthy seeds`,

      hi: `<b>🍂 पौधा मुरझाना — कारण और उपाय</b><br><br>
<b>मुख्य कारण:</b><br>
<b>1. Fusarium उकठा (फफूंद):</b> तने के अंदर भूरे धागे दिखें<br>
→ <b>Carbendazim 50WP @ 2g/L</b> से जड़ों में डालें<br><br>
<b>2. जड़ सड़न:</b> खेत में पानी भरा हो, जड़ें काली हों<br>
→ पानी निकालें, <b>Trichoderma viride @ 5kg/एकड़</b> डालें<br><br>
<b>3. पानी की कमी:</b> सूखी, फटी मिट्टी<br>
→ तुरंत सिंचाई करें, मल्चिंग करें<br><br>
<b>4. सूत्रकृमि (Nematode):</b> जड़ों पर गांठें हों<br>
→ <b>Carbofuran 3G @ 7–10 kg/एकड़</b> मिट्टी में मिलाएं<br><br>
<b>🛡 बचाव:</b> फसल चक्र, जलजमाव न होने दें, स्वस्थ बीज लगाएं`
    }
  },

  // ════════════════════════════════
  //  🌍 SOIL & FERTILIZERS
  // ════════════════════════════════
  {
    id: "soil_testing",
    keywords: ["soil test", "mitti janch", "मिट्टी जाँच", "ph", "soil health", "soil card", "nutrient"],
    topic: "Soil & Fertilizers",
    icon: "🌍",
    question: "Soil testing / मिट्टी की जाँच",
    answer: {
      en: `<b>🌍 Soil Testing Guide</b><br><br>
<b>Why Test?</b> To know exact nutrients your soil needs — saves money on unnecessary fertilizers!<br><br>
<b>🔧 How to collect soil sample:</b>
<ul>
<li>Take samples from 8–10 spots in your field</li>
<li>Collect from 0–15 cm depth (plough layer)</li>
<li>Mix all samples, take 500g for testing</li>
<li>Dry in shade, remove stones/roots</li>
</ul>
<b>📍 Where to test:</b>
<ul>
<li>Government Soil Testing Lab (free/₹5–10)</li>
<li>KVK (Krishi Vigyan Kendra) near you</li>
<li>Private labs (₹200–500)</li>
</ul>
<b>📋 Soil Health Card:</b> Government provides FREE soil health cards — apply at your local agriculture office or online at <b>soilhealth.dac.gov.in</b><br><br>
<b>Ideal pH:</b> 6.5–7.5 for most crops`,

      hi: `<b>🌍 मिट्टी परीक्षण गाइड</b><br><br>
<b>क्यों करें?</b> जानें कि आपकी मिट्टी को क्या चाहिए — बेकार खाद पर पैसा बर्बाद न हो!<br><br>
<b>🔧 मिट्टी का नमूना कैसे लें:</b>
<ul>
<li>खेत के 8–10 जगहों से नमूना लें</li>
<li>0–15 cm गहराई से लें (जुताई की परत)</li>
<li>सभी नमूने मिलाएं, 500g टेस्ट के लिए रखें</li>
<li>छाया में सुखाएं, पत्थर/जड़ें हटाएं</li>
</ul>
<b>📍 कहाँ करवाएं:</b>
<ul>
<li>सरकारी मिट्टी परीक्षण प्रयोगशाला (मुफ्त/₹5–10)</li>
<li>नजदीकी KVK (कृषि विज्ञान केंद्र)</li>
<li>प्राइवेट लैब (₹200–500)</li>
</ul>
<b>📋 मृदा स्वास्थ्य कार्ड:</b> सरकार मुफ्त में देती है — कृषि कार्यालय जाएं या <b>soilhealth.dac.gov.in</b> पर आवेदन करें<br><br>
<b>अच्छा pH:</b> 6.5–7.5 अधिकतर फसलों के लिए`
    }
  },

  {
    id: "fertilizer_npk",
    keywords: ["fertilizer", "khad", "खाद", "urea", "dap", "npk", "nitrogen", "phosphorus", "potassium", "compost"],
    topic: "Soil & Fertilizers",
    icon: "🧪",
    question: "Which fertilizer to use? / कौन सी खाद डालें?",
    answer: {
      en: `<b>🧪 Fertilizer Guide for Farmers</b><br><br>
<b>Main Fertilizers:</b><br>
<table style="width:100%;font-size:0.82rem;border-collapse:collapse">
<tr style="background:rgba(76,175,80,0.1)"><td style="padding:6px"><b>Urea (46% N)</b></td><td style="padding:6px">For leafy growth. Split in 3 doses</td></tr>
<tr><td style="padding:6px"><b>DAP (18N:46P)</b></td><td style="padding:6px">At sowing for root development</td></tr>
<tr style="background:rgba(76,175,80,0.1)"><td style="padding:6px"><b>MOP / Potash</b></td><td style="padding:6px">For grain filling, disease resistance</td></tr>
<tr><td style="padding:6px"><b>SSP (16% P)</b></td><td style="padding:6px">Cheaper P source + Sulphur</td></tr>
<tr style="background:rgba(76,175,80,0.1)"><td style="padding:6px"><b>Zinc Sulphate</b></td><td style="padding:6px">25kg/acre for zinc deficiency</td></tr>
</table><br>
<b>🌿 Organic Options:</b>
<ul>
<li>FYM (Farm Yard Manure): 8–10 tonnes/acre</li>
<li>Vermicompost: 2 tonnes/acre</li>
<li>Green manure: Dhaincha, Sunhemp</li>
<li>Biofertilizers: Rhizobium, PSB, Azotobacter</li>
</ul>
<b>💡 Tip:</b> Always apply fertilizer based on soil test results for best results!`,

      hi: `<b>🧪 खाद गाइड</b><br><br>
<b>मुख्य खाद:</b><br>
<table style="width:100%;font-size:0.82rem;border-collapse:collapse">
<tr style="background:rgba(76,175,80,0.1)"><td style="padding:6px"><b>यूरिया (46% N)</b></td><td style="padding:6px">पत्तियों की बढ़त के लिए, 3 बार दें</td></tr>
<tr><td style="padding:6px"><b>DAP (18N:46P)</b></td><td style="padding:6px">बुवाई पर जड़ विकास के लिए</td></tr>
<tr style="background:rgba(76,175,80,0.1)"><td style="padding:6px"><b>MOP / पोटाश</b></td><td style="padding:6px">दाना भरने और रोग प्रतिरोध के लिए</td></tr>
<tr><td style="padding:6px"><b>SSP (16% P)</b></td><td style="padding:6px">सस्ता फॉस्फोरस + सल्फर</td></tr>
<tr style="background:rgba(76,175,80,0.1)"><td style="padding:6px"><b>जिंक सल्फेट</b></td><td style="padding:6px">25kg/एकड़ जिंक की कमी के लिए</td></tr>
</table><br>
<b>🌿 जैविक खाद:</b>
<ul>
<li>गोबर की खाद: 8–10 टन/एकड़</li>
<li>वर्मीकम्पोस्ट: 2 टन/एकड़</li>
<li>हरी खाद: ढैंचा, सनई</li>
<li>जैव उर्वरक: राइज़ोबियम, PSB, एजोटोबैक्टर</li>
</ul>
<b>💡 सुझाव:</b> हमेशा मिट्टी परीक्षण के आधार पर खाद डालें!`
    }
  },

  // ════════════════════════════════
  //  💧 IRRIGATION & WATER
  // ════════════════════════════════
  {
    id: "irrigation_drip",
    keywords: ["drip", "drip irrigation", "trickle", "micro irrigation", "boond sinchai", "बूंद सिंचाई"],
    topic: "Irrigation & Water",
    icon: "💧",
    question: "Drip irrigation / ड्रिप सिंचाई",
    answer: {
      en: `<b>💧 Drip Irrigation — Complete Guide</b><br><br>
<b>What is it?</b> Water delivered drop-by-drop directly to plant roots through pipes.<br><br>
<b>✅ Benefits:</b>
<ul>
<li>Saves 40–60% water vs flood irrigation</li>
<li>Increases yield by 20–50%</li>
<li>Reduces weed growth</li>
<li>Fertigation possible (apply fertilizer through drip)</li>
</ul>
<b>💰 Cost:</b> ₹40,000–80,000/acre (before subsidy)<br><br>
<b>🏛 Government Subsidy (PMKSY):</b>
<ul>
<li>Small/Marginal farmers: <b>55% subsidy</b></li>
<li>Other farmers: <b>45% subsidy</b></li>
<li>Apply at: <b>pmksy.gov.in</b> or local agriculture office</li>
</ul>
<b>Best for:</b> Vegetables, fruits, sugarcane, cotton`,

      hi: `<b>💧 ड्रिप सिंचाई — पूरी जानकारी</b><br><br>
<b>क्या है?</b> पाइप के जरिए सीधे पौधे की जड़ों में बूंद-बूंद पानी पहुँचाना।<br><br>
<b>✅ फायदे:</b>
<ul>
<li>बाढ़ सिंचाई से 40–60% पानी बचता है</li>
<li>पैदावार 20–50% तक बढ़ती है</li>
<li>खरपतवार कम उगती है</li>
<li>Fertigation संभव — ड्रिप से खाद दे सकते हैं</li>
</ul>
<b>💰 लागत:</b> ₹40,000–80,000/एकड़ (सब्सिडी से पहले)<br><br>
<b>🏛 सरकारी सब्सिडी (PMKSY):</b>
<ul>
<li>छोटे/सीमांत किसान: <b>55% सब्सिडी</b></li>
<li>अन्य किसान: <b>45% सब्सिडी</b></li>
<li>आवेदन: <b>pmksy.gov.in</b> या कृषि कार्यालय</li>
</ul>
<b>किसके लिए:</b> सब्जियां, फल, गन्ना, कपास`
    }
  },

  {
    id: "irrigation_flood",
    keywords: ["flood irrigation", "furrow", "basin", "canal", "nahar", "नहर", "sinchai", "सिंचाई", "water management"],
    topic: "Irrigation & Water",
    icon: "🌊",
    question: "Irrigation methods / सिंचाई के तरीके",
    answer: {
      en: `<b>🌊 Irrigation Methods Comparison</b><br><br>
<b>1. Flood/Basin Irrigation</b><br>
→ Cheapest, for rice & sugarcane. Wastes 60% water.<br><br>
<b>2. Furrow Irrigation</b><br>
→ Water flows in furrows between rows. Good for maize, cotton.<br><br>
<b>3. Sprinkler Irrigation</b><br>
→ Like rain. Good for wheat, groundnut, vegetables. Saves 25–40% water.<br>
→ Govt subsidy: 45–55% under PMKSY<br><br>
<b>4. Drip Irrigation</b><br>
→ Best for horticulture. Saves 50–60% water. Max subsidy available.<br><br>
<b>💡 Critical Stages needing water:</b>
<ul>
<li>Wheat: CRI, tillering, jointing, grain filling</li>
<li>Rice: transplanting, tillering, flowering</li>
<li>Mustard: flowering, pod formation</li>
</ul>`,

      hi: `<b>🌊 सिंचाई के तरीके</b><br><br>
<b>1. बाढ़/क्यारी सिंचाई</b><br>
→ सबसे सस्ती, धान और गन्ने के लिए। 60% पानी बर्बाद।<br><br>
<b>2. कूँड़ सिंचाई</b><br>
→ कतारों के बीच नालियों में पानी। मक्का, कपास के लिए।<br><br>
<b>3. फव्वारा सिंचाई</b><br>
→ बारिश जैसी। गेहूं, मूंगफली, सब्जियों के लिए। 25–40% पानी बचत।<br>
→ PMKSY में 45–55% सब्सिडी<br><br>
<b>4. ड्रिप सिंचाई</b><br>
→ बागवानी के लिए सबसे अच्छी। 50–60% पानी बचत। सबसे ज्यादा सब्सिडी।<br><br>
<b>💡 फसल की जरूरी अवस्थाएं:</b>
<ul>
<li>गेहूं: CRI, कल्ले, गांठ, दाना भरना</li>
<li>धान: रोपाई, कल्ले, फूल</li>
<li>सरसों: फूल, फली</li>
</ul>`
    }
  },

  // ════════════════════════════════
  //  🏛 GOVT SCHEMES & PRICES
  // ════════════════════════════════
  {
    id: "scheme_pmkisan",
    keywords: ["pm kisan", "pmkisan", "6000", "kisan samman", "सम्मान निधि", "government money", "sarkar paisa"],
    topic: "Govt Schemes & Prices",
    icon: "🏛",
    question: "PM Kisan Samman Nidhi / पीएम किसान सम्मान निधि",
    answer: {
      en: `<b>🏛 PM Kisan Samman Nidhi Yojana</b><br><br>
<b>What:</b> ₹6,000/year direct benefit to farmers' bank accounts (₹2,000 every 4 months)<br><br>
<b>✅ Who can apply:</b>
<ul>
<li>All small & marginal farmers with cultivable land</li>
<li>Must have Aadhaar & bank account linked</li>
</ul>
<b>❌ Not eligible:</b> Government employees, income tax payers, institutional landholders<br><br>
<b>📝 How to apply:</b>
<ul>
<li>Online: <b>pmkisan.gov.in</b></li>
<li>Visit CSC (Common Service Centre)</li>
<li>Visit local Patwari/Agriculture office</li>
</ul>
<b>Documents:</b> Aadhaar, Bank passbook, Land records (Khatoni)<br>
<b>📞 Helpline:</b> 155261 / 011-24300606`,

      hi: `<b>🏛 पीएम किसान सम्मान निधि योजना</b><br><br>
<b>क्या है:</b> किसानों के बैंक खाते में ₹6,000/साल (हर 4 महीने में ₹2,000)<br><br>
<b>✅ कौन आवेदन कर सकता है:</b>
<ul>
<li>सभी छोटे-सीमांत किसान जिनके पास खेती की जमीन है</li>
<li>आधार और बैंक खाता लिंक होना जरूरी</li>
</ul>
<b>❌ पात्र नहीं:</b> सरकारी कर्मचारी, आयकर देने वाले<br><br>
<b>📝 आवेदन कैसे करें:</b>
<ul>
<li>ऑनलाइन: <b>pmkisan.gov.in</b></li>
<li>CSC (जन सेवा केंद्र) पर जाएं</li>
<li>पटवारी/कृषि कार्यालय जाएं</li>
</ul>
<b>दस्तावेज:</b> आधार, बैंक पासबुक, खतौनी<br>
<b>📞 हेल्पलाइन:</b> 155261 / 011-24300606`
    }
  },

  {
    id: "scheme_pmfby",
    keywords: ["crop insurance", "bima", "बीमा", "pmfby", "fasal bima", "फसल बीमा", "insurance", "disaster"],
    topic: "Govt Schemes & Prices",
    icon: "🛡",
    question: "Pradhan Mantri Fasal Bima Yojana / फसल बीमा",
    answer: {
      en: `<b>🛡 Pradhan Mantri Fasal Bima Yojana (PMFBY)</b><br><br>
<b>What:</b> Crop insurance scheme — protects farmers from losses due to floods, drought, pests, diseases<br><br>
<b>💰 Premium (very low):</b>
<ul>
<li>Kharif crops: Only <b>2% of sum insured</b></li>
<li>Rabi crops: Only <b>1.5%</b></li>
<li>Horticulture: Only <b>5%</b></li>
</ul>
<b>✅ Covers:</b> Natural disasters, floods, drought, pest attack, post-harvest losses<br><br>
<b>📝 How to apply:</b>
<ul>
<li>Online: <b>pmfby.gov.in</b></li>
<li>Nearest bank branch</li>
<li>CSC Center</li>
<li>Deadline: 2 weeks before crop sowing</li>
</ul>
<b>📞 Helpline:</b> 1800-200-7710 (Toll Free)`,

      hi: `<b>🛡 प्रधानमंत्री फसल बीमा योजना (PMFBY)</b><br><br>
<b>क्या है:</b> फसल बीमा — बाढ़, सूखा, कीट, रोग से नुकसान होने पर मुआवजा<br><br>
<b>💰 प्रीमियम (बहुत कम):</b>
<ul>
<li>खरीफ फसल: केवल <b>2%</b></li>
<li>रबी फसल: केवल <b>1.5%</b></li>
<li>बागवानी: केवल <b>5%</b></li>
</ul>
<b>✅ क्या-क्या कवर होता है:</b> प्राकृतिक आपदा, बाढ़, सूखा, कीट हमला, कटाई के बाद नुकसान<br><br>
<b>📝 आवेदन कैसे करें:</b>
<ul>
<li>ऑनलाइन: <b>pmfby.gov.in</b></li>
<li>नजदीकी बैंक शाखा</li>
<li>CSC सेंटर</li>
<li>आखिरी तारीख: बुवाई से 2 हफ्ते पहले</li>
</ul>
<b>📞 हेल्पलाइन:</b> 1800-200-7710 (टोल फ्री)`
    }
  },

  {
    id: "scheme_kcc",
    keywords: ["kcc", "kisan credit card", "loan", "karj", "कर्ज", "credit", "bank loan", "किसान क्रेडिट"],
    topic: "Govt Schemes & Prices",
    icon: "💳",
    question: "Kisan Credit Card / किसान क्रेडिट कार्ड",
    answer: {
      en: `<b>💳 Kisan Credit Card (KCC)</b><br><br>
<b>What:</b> Low-interest credit for farmers to buy seeds, fertilizers, pesticides & equipment<br><br>
<b>💰 Benefits:</b>
<ul>
<li>Interest rate: Only <b>4% per year</b> (after 3% govt subvention)</li>
<li>Credit limit: Up to ₹3 lakh without collateral</li>
<li>Flexible repayment — aligned with crop harvest</li>
<li>Includes personal accident insurance ₹50,000</li>
</ul>
<b>📝 How to get KCC:</b>
<ul>
<li>Visit any nationalized bank (SBI, PNB, Bank of Baroda etc.)</li>
<li>Documents: Aadhaar, Land records, Passport photo</li>
<li>Apply online: <b>pmkisan.gov.in/kcc</b></li>
</ul>
<b>📞 Helpline:</b> Visit your nearest bank branch`,

      hi: `<b>💳 किसान क्रेडिट कार्ड (KCC)</b><br><br>
<b>क्या है:</b> बीज, खाद, दवाई और उपकरण खरीदने के लिए कम ब्याज पर कर्ज<br><br>
<b>💰 फायदे:</b>
<ul>
<li>ब्याज दर: केवल <b>4% प्रति वर्ष</b> (3% सरकारी छूट के बाद)</li>
<li>₹3 लाख तक बिना गारंटी के</li>
<li>फसल के हिसाब से चुकाने की सुविधा</li>
<li>₹50,000 का दुर्घटना बीमा भी शामिल</li>
</ul>
<b>📝 KCC कैसे पाएं:</b>
<ul>
<li>किसी भी राष्ट्रीयकृत बैंक में जाएं (SBI, PNB, BOB आदि)</li>
<li>दस्तावेज: आधार, खतौनी, फोटो</li>
<li>ऑनलाइन: <b>pmkisan.gov.in/kcc</b></li>
</ul>
<b>📞 हेल्पलाइन:</b> नजदीकी बैंक शाखा जाएं`
    }
  },

  {
    id: "msp_prices",
    keywords: ["msp", "minimum support price", "market price", "mandi", "मंडी", "rate", "bhav", "भाव", "selling price"],
    topic: "Govt Schemes & Prices",
    icon: "📈",
    question: "MSP / Mandi prices / मंडी भाव",
    answer: {
      en: `<b>📈 MSP (Minimum Support Price) 2024-25</b><br><br>
<table style="width:100%;font-size:0.82rem;border-collapse:collapse">
<tr style="background:rgba(76,175,80,0.15)"><td style="padding:6px"><b>Crop</b></td><td style="padding:6px"><b>MSP (₹/quintal)</b></td></tr>
<tr><td style="padding:6px">Wheat (Gehu)</td><td style="padding:6px">₹2,275</td></tr>
<tr style="background:rgba(76,175,80,0.05)"><td style="padding:6px">Paddy (Common)</td><td style="padding:6px">₹2,183</td></tr>
<tr><td style="padding:6px">Mustard (Sarson)</td><td style="padding:6px">₹5,650</td></tr>
<tr style="background:rgba(76,175,80,0.05)"><td style="padding:6px">Sugarcane (FRP)</td><td style="padding:6px">₹315</td></tr>
<tr><td style="padding:6px">Maize (Makka)</td><td style="padding:6px">₹2,090</td></tr>
<tr style="background:rgba(76,175,80,0.05)"><td style="padding:6px">Soybean</td><td style="padding:6px">₹4,892</td></tr>
<tr><td style="padding:6px">Gram (Chana)</td><td style="padding:6px">₹5,440</td></tr>
</table><br>
<b>📱 Check live mandi prices:</b><br>
→ App: <b>eNAM</b> (National Agriculture Market)<br>
→ Website: <b>agmarknet.gov.in</b><br>
→ SMS: Type MANDI to 51969`,

      hi: `<b>📈 MSP (न्यूनतम समर्थन मूल्य) 2024-25</b><br><br>
<table style="width:100%;font-size:0.82rem;border-collapse:collapse">
<tr style="background:rgba(76,175,80,0.15)"><td style="padding:6px"><b>फसल</b></td><td style="padding:6px"><b>MSP (₹/क्विंटल)</b></td></tr>
<tr><td style="padding:6px">गेहूं</td><td style="padding:6px">₹2,275</td></tr>
<tr style="background:rgba(76,175,80,0.05)"><td style="padding:6px">धान (सामान्य)</td><td style="padding:6px">₹2,183</td></tr>
<tr><td style="padding:6px">सरसों</td><td style="padding:6px">₹5,650</td></tr>
<tr style="background:rgba(76,175,80,0.05)"><td style="padding:6px">गन्ना (FRP)</td><td style="padding:6px">₹315</td></tr>
<tr><td style="padding:6px">मक्का</td><td style="padding:6px">₹2,090</td></tr>
<tr style="background:rgba(76,175,80,0.05)"><td style="padding:6px">सोयाबीन</td><td style="padding:6px">₹4,892</td></tr>
<tr><td style="padding:6px">चना</td><td style="padding:6px">₹5,440</td></tr>
</table><br>
<b>📱 लाइव मंडी भाव देखें:</b><br>
→ App: <b>eNAM</b> (राष्ट्रीय कृषि बाजार)<br>
→ वेबसाइट: <b>agmarknet.gov.in</b><br>
→ SMS: 51969 पर MANDI लिखकर भेजें`
    }
  },

  // ════════════════════════════════
  //  🏚 HARVEST & STORAGE
  // ════════════════════════════════
  {
    id: "harvest_wheat",
    keywords: ["harvest", "katai", "कटाई", "threshing", "storage", "storage grain", "godown", "silo", "grain storage"],
    topic: "Harvest & Storage",
    icon: "🏚",
    question: "Grain storage / अनाज का भंडारण",
    answer: {
      en: `<b>🏚 Post-Harvest Storage Guide</b><br><br>
<b>🌾 Right time to harvest:</b>
<ul>
<li>Wheat: When 90% grains turn golden-yellow</li>
<li>Rice: When 80% panicles turn straw-colored</li>
<li>Moisture content: Harvest at 20%, store at <b>12–14% moisture</b></li>
</ul>
<b>📦 Storage Tips:</b>
<ul>
<li>Dry grain in sun for 3–4 days before storage</li>
<li>Use <b>Pusa Bin or metal bins</b> (airtight)</li>
<li>Treat storage area with <b>Malathion 50EC</b> before filling</li>
<li>Use <b>Aluminium Phosphide tablets</b> for fumigation</li>
<li>Jute bags: Stack on wooden pallets, not on floor</li>
<li>Keep storage cool, dry, and dark</li>
</ul>
<b>⚠ Common Storage Pests:</b> Weevils, Khapra beetle, Grain moth<br>
→ Treat with Pyrethrin spray or Aluminium Phosphide fumigation`,

      hi: `<b>🏚 कटाई के बाद भंडारण गाइड</b><br><br>
<b>🌾 कटाई का सही समय:</b>
<ul>
<li>गेहूं: जब 90% दाने सुनहरे-पीले हो जाएं</li>
<li>धान: जब 80% बालियाँ पीली-भूरी हो जाएं</li>
<li>नमी: 20% पर काटें, <b>12–14% नमी</b> पर भंडारण करें</li>
</ul>
<b>📦 भंडारण के उपाय:</b>
<ul>
<li>3–4 दिन धूप में सुखाएं</li>
<li><b>पूसा बिन या लोहे की कोठी</b> (हवाबंद) में रखें</li>
<li>भरने से पहले <b>Malathion 50EC</b> से उपचार करें</li>
<li>धुआं करने के लिए <b>Aluminium Phosphide गोलियां</b> इस्तेमाल करें</li>
<li>बोरों को जमीन पर नहीं, लकड़ी के पटरे पर रखें</li>
<li>ठंडी, सूखी और अंधेरी जगह रखें</li>
</ul>
<b>⚠ आम कीट:</b> घुन, खपरा बीटल, अनाज का पतंगा<br>
→ Pyrethrin या Aluminium Phosphide से उपचार करें`
    }
  },

  // ════════════════════════════════
  //  🌦 WEATHER & SEASONS
  // ════════════════════════════════
  {
    id: "weather_kharif",
    keywords: ["kharif", "खरीफ", "monsoon", "barish", "बारिश", "summer crop", "june july august"],
    topic: "Weather & Seasons",
    icon: "☀️",
    question: "Kharif season farming / खरीफ की खेती",
    answer: {
      en: `<b>☀️ Kharif Season (June – October)</b><br><br>
<b>Sowing:</b> June–July | <b>Harvest:</b> September–October<br>
<b>Rainfall:</b> Depends on monsoon (600–1500mm)<br><br>
<b>🌱 Main Kharif Crops:</b>
<ul>
<li>🌾 Paddy (Rice) — Punjab, UP, Bihar, WB</li>
<li>🌽 Maize — Hilly areas, MP, Karnataka</li>
<li>🫘 Soybean — MP, Maharashtra</li>
<li>🥜 Groundnut — Gujarat, AP, Rajasthan</li>
<li>🌱 Cotton — Punjab, Haryana, Gujarat</li>
<li>🌿 Arhar/Tur dal — MP, Maharashtra</li>
</ul>
<b>🌧 Monsoon Tips:</b>
<ul>
<li>Make field bunds to retain rainwater</li>
<li>Ensure drainage to prevent waterlogging</li>
<li>Check weather forecast before spraying</li>
<li>Use fungicides during humid weather to prevent diseases</li>
</ul>`,

      hi: `<b>☀️ खरीफ मौसम (जून – अक्टूबर)</b><br><br>
<b>बुवाई:</b> जून–जुलाई | <b>कटाई:</b> सितंबर–अक्टूबर<br>
<b>वर्षा:</b> मानसून पर निर्भर (600–1500mm)<br><br>
<b>🌱 मुख्य खरीफ फसलें:</b>
<ul>
<li>🌾 धान — पंजाब, UP, बिहार, WB</li>
<li>🌽 मक्का — पहाड़ी क्षेत्र, MP, कर्नाटक</li>
<li>🫘 सोयाबीन — MP, महाराष्ट्र</li>
<li>🥜 मूंगफली — गुजरात, AP, राजस्थान</li>
<li>🌱 कपास — पंजाब, हरियाणा, गुजरात</li>
<li>🌿 अरहर/तुअर — MP, महाराष्ट्र</li>
</ul>
<b>🌧 मानसून में क्या करें:</b>
<ul>
<li>खेत में मेड़ बनाएं ताकि पानी रुके</li>
<li>जलजमाव से बचने के लिए नालियां बनाएं</li>
<li>छिड़काव से पहले मौसम देखें</li>
<li>नम मौसम में फफूंदनाशी का छिड़काव करें</li>
</ul>`
    }
  },

  {
    id: "weather_rabi",
    keywords: ["rabi", "रबी", "winter crop", "sardi", "सर्दी", "november december january"],
    topic: "Weather & Seasons",
    icon: "❄️",
    question: "Rabi season farming / रबी की खेती",
    answer: {
      en: `<b>❄️ Rabi Season (October – March)</b><br><br>
<b>Sowing:</b> October–November | <b>Harvest:</b> March–April<br>
<b>Climate:</b> Cool, dry winters<br><br>
<b>🌱 Main Rabi Crops:</b>
<ul>
<li>🌾 Wheat — North India (major crop)</li>
<li>🌼 Mustard — UP, Rajasthan, Haryana</li>
<li>🫘 Gram/Chana — MP, Rajasthan, UP</li>
<li>🟡 Lentil/Masoor — UP, MP, Bihar</li>
<li>🌿 Barley — Rajasthan, UP</li>
</ul>
<b>❄️ Winter Management Tips:</b>
<ul>
<li>Protect young seedlings from frost (irrigate before frost forecast)</li>
<li>Irrigate in morning to protect from cold</li>
<li>Fog can cause disease — spray Mancozeb preventively</li>
<li>Sow wheat in first 2 weeks of November for best yield</li>
</ul>`,

      hi: `<b>❄️ रबी मौसम (अक्टूबर – मार्च)</b><br><br>
<b>बुवाई:</b> अक्टूबर–नवंबर | <b>कटाई:</b> मार्च–अप्रैल<br>
<b>जलवायु:</b> ठंडी, सूखी सर्दी<br><br>
<b>🌱 मुख्य रबी फसलें:</b>
<ul>
<li>🌾 गेहूं — उत्तर भारत (मुख्य फसल)</li>
<li>🌼 सरसों — UP, राजस्थान, हरियाणा</li>
<li>🫘 चना — MP, राजस्थान, UP</li>
<li>🟡 मसूर — UP, MP, बिहार</li>
<li>🌿 जौ — राजस्थान, UP</li>
</ul>
<b>❄️ सर्दी में क्या करें:</b>
<ul>
<li>पाले से बचाने के लिए पूर्वानुमान पर सिंचाई करें</li>
<li>सुबह सिंचाई करें</li>
<li>कोहरे से रोग हो सकता है — Mancozeb छिड़कें</li>
<li>गेहूं नवंबर के पहले 2 हफ्तों में बोएं</li>
</ul>`
    }
  },

  // ════════════════════════════════
  //  GENERAL / GREETINGS
  // ════════════════════════════════
  {
    id: "greeting",
    keywords: ["hello", "hi", "namaste", "नमस्ते", "helo", "hey", "good morning", "good evening", "namaskar"],
    topic: "General",
    icon: "👋",
    question: "Greeting",
    answer: {
      en: `<b>👋 Namaste! Welcome to KisanMitra!</b><br><br>
I'm your personal AI farming assistant. I can help you with:<br><br>
🌱 <b>Crops</b> — wheat, rice, sugarcane, vegetables & more<br>
🦠 <b>Diseases & Pests</b> — identification and treatment<br>
🌍 <b>Soil & Fertilizers</b> — testing, nutrients, organic farming<br>
💧 <b>Irrigation</b> — drip, sprinkler, water management<br>
🏛 <b>Govt Schemes</b> — PM Kisan, PMFBY, KCC, MSP prices<br>
🏚 <b>Harvest & Storage</b> — post-harvest best practices<br>
🌦 <b>Weather & Seasons</b> — Kharif, Rabi, Zaid guidance<br><br>
Just ask me anything — I'm here to help your farm thrive! 🙏`,

      hi: `<b>👋 नमस्ते! KisanMitra में आपका स्वागत है!</b><br><br>
मैं आपका व्यक्तिगत AI कृषि सहायक हूँ। मैं इन विषयों में मदद कर सकता हूँ:<br><br>
🌱 <b>फसलें</b> — गेहूं, धान, गन्ना, सब्जियां और बहुत कुछ<br>
🦠 <b>रोग और कीट</b> — पहचान और उपचार<br>
🌍 <b>मिट्टी और खाद</b> — जाँच, पोषक तत्व, जैविक खेती<br>
💧 <b>सिंचाई</b> — ड्रिप, फव्वारा, जल प्रबंधन<br>
🏛 <b>सरकारी योजनाएं</b> — PM किसान, PMFBY, KCC, MSP<br>
🏚 <b>कटाई और भंडारण</b> — कटाई के बाद की देखभाल<br>
🌦 <b>मौसम और ऋतु</b> — खरीफ, रबी, जायद मार्गदर्शन<br><br>
कुछ भी पूछें — आपकी खेती फले-फूले, यही मेरी कोशिश है! 🙏`
    }
  },

  {
    id: "organic_farming",
    keywords: ["organic", "jaivik", "जैविक", "natural farming", "chemical free", "pesticide free", "bio"],
    topic: "Crops & Planting",
    icon: "♻️",
    question: "Organic farming / जैविक खेती",
    answer: {
      en: `<b>♻️ Organic Farming Guide</b><br><br>
<b>Why go organic?</b> Better health, premium prices (20–30% more), soil long-term health<br><br>
<b>🌿 Key Practices:</b>
<ul>
<li><b>Compost making:</b> Collect cow dung, crop waste, kitchen waste → make compost pit → ready in 2–3 months</li>
<li><b>Vermicompost:</b> Use earthworms to convert waste → high quality manure</li>
<li><b>Jeevamrit:</b> Mix 10kg cowdung + 10L cow urine + 1kg jaggery + 1kg flour + 200L water → ferment 7 days → spray/drench</li>
<li><b>Neem-based pesticide:</b> Boil 5kg neem leaves in 20L water → cool → spray for pests</li>
<li><b>Crop rotation</b> to break pest cycles</li>
</ul>
<b>🏛 Govt Support:</b> Paramparagat Krishi Vikas Yojana (PKVY) — ₹50,000/hectare subsidy for organic farming certification`,

      hi: `<b>♻️ जैविक खेती गाइड</b><br><br>
<b>क्यों करें?</b> अच्छी सेहत, ज्यादा दाम (20–30% अधिक), मिट्टी की लंबे समय तक अच्छी सेहत<br><br>
<b>🌿 मुख्य तरीके:</b>
<ul>
<li><b>कम्पोस्ट बनाना:</b> गोबर, फसल अवशेष, किचन कचरा → कम्पोस्ट गड्ढा → 2–3 महीने में तैयार</li>
<li><b>वर्मीकम्पोस्ट:</b> केंचुए से अपशिष्ट को उच्च गुणवत्ता खाद में बदलें</li>
<li><b>जीवामृत:</b> 10kg गोबर + 10L गोमूत्र + 1kg गुड़ + 1kg आटा + 200L पानी → 7 दिन रखें → छिड़काव/सिंचाई</li>
<li><b>नीम कीटनाशक:</b> 5kg नीम पत्तियां 20L पानी में उबालें → ठंडा करें → कीटों पर छिड़काव</li>
<li><b>फसल चक्र</b> अपनाएं</li>
</ul>
<b>🏛 सरकारी सहायता:</b> परंपरागत कृषि विकास योजना (PKVY) — ₹50,000/हेक्टेयर जैविक प्रमाणीकरण सब्सिडी`
    }
  }

  // ═══════════════════════════════════════════════
  //  💡 ADD YOUR OWN DATA BELOW!
  //  Copy the block above and fill in:
  //  - id: unique name
  //  - keywords: words user might type
  //  - topic: category name
  //  - answer.en: English answer
  //  - answer.hi: Hindi answer
  // ═══════════════════════════════════════════════
];