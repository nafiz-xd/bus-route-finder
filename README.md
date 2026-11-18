# 🚌 Dhaka Bus Route Finder — v2.0

Find your way across Dhaka by public transport: **direct buses, smart one-transfer journeys and Metro Rail (MRT-6) combos**, with estimated fares, travel times and a live route map. Built as a real, installable web app for everyday commuters.

**Live Demo:** https://nafiz-xd.github.io/bus-route-finder/

## ✨ Features

- **Smart journey planner** — direct routes plus one-transfer journeys across 46 bus services and the MRT-6 metro, ranked by legs, distance and fare, with *Fastest* / *Cheapest* badges
- **Metro combos** — bus + Metro Rail journeys via interchange stations (Pallabi, Mirpur 10, Agargaon, Farmgate, Motijheel and more)
- **Real fare & time estimates** — official-style per-km bus fares, metro fare bands, peak / off-peak travel times, and a **student half-fare** toggle
- **Interactive map** — Leaflet + OpenStreetMap route polylines with stop markers, plus "Near me" nearest-stop detection from your location
- **Bilingual EN / বাংলা** — full Bangla UI with Bangla stop names, Bangla digits, and search that understands both English and Bangla typing (মিরপুর ১০ works!)
- **Quick access** — popular routes, favorites and recent searches saved on your device
- **Bus directory** — every service with first/last bus times, frequency and a full stop-by-stop route
- **Stop Board** — pick any stop to see every bus that passes it and where they go
- **Report & Suggest** — users can flag wrong routes or missing buses/stops (saved on-device, shareable)
- **PWA** — installable on phone home screens, works offline after first load
- **Polished app UI** — splash screen, animated journey timelines, dark mode, skeleton loading and scroll-reveal animations

## 🛠️ Tech

HTML • CSS • JavaScript • Leaflet • OpenStreetMap • GitHub Pages (static, no backend — route data lives in `routes.js`)

## 📂 Data

`routes.js` holds the community-maintained dataset: 46 bus services with stop sequences, first/last times and frequencies, the 17-station MRT-6 line with interchange mapping, GPS coordinates and Bangla names for every stop. Data is approximate — please verify before travelling.

## 👤 Author

**Nafiz Bin Azad** — CSE student at Southeast University, Dhaka.
GitHub: [@nafiz-xd](https://github.com/nafiz-xd)
