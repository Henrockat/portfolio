# portfolio
Portofolio-website
# Portfolio: Henok Mulugeta

Dit portfolio toont mijn technische projecten en creatieve werken binnen het domein van IoT (Internet of Things), embedded systemen en scrap art. De site is ontworpen in HTML, CSS en JavaScript, en maakt gebruik van Bootstrap, Leaflet.js en enkele externe API's.

## ✅ Belangrijkste kenmerken

- 6 uitgewerkte projectpagina's met doel, stappenplan, gebruikte technologieën en leerpunten.
- Contactformulier dat werkt via Netlify Forms.
- Geïntegreerde Leaflet-kaart met marker op de contactpagina.
- Scrap Art-galerij met zelfgemaakte kunstwerken uit gerecycleerde materialen.
- Dynamisch jaartal in de footer via JavaScript.
- Inspirerende quote over technologie en wetenschap, opgehaald via API met fallback-functie.
- Afbeeldingen voorzien van `figcaption` en bronvermelding indien niet zelfgemaakt.
- Gebruik van semantische HTML5-tags zoals `<section>`, `<article>`, `<figure>` en `<nav>`.
- Relatieve paden voor volledige compatibiliteit bij lokaal testen (bv. via USB-stick).

## 🌐 Externe afhankelijkheden

- **Bootstrap 5**: Voor layout en componenten
- **Bootstrap Icons**: Voor sociale icoontjes
- **Leaflet.js**: Voor de interactieve kaart
- **Quotable API**: Voor dynamische quotes (met fallback)

> ⚠️ Bij offline gebruik kunnen de kaart en quote-blok tijdelijk niet werken. In dat geval wordt automatisch een fallback-quote weergegeven.

## 📁 Structuur

```bash
portfolio/
├── index.html
├── album.html
├── portfolio.html
├── contact.html
├── css/
│   ├── reset.css
│   ├── style.css
│   └── fonts.css
├── js/
│   ├── quote.js
│   ├── map-workshop.js
│   ├── jaartal.js
│   ├── form-success.js
│   └── search.js
├── assets/
│   ├── images/
│   │   ├── Logo-Henok.png
│   │   ├── henok-iot-artist-profile.jpg
│   │   └── ...
│   ├── images-labo/
│   │   └── ...
│   ├── image-art/
│   │   └── ...
│   └── icons/
│       └── ...
├── projects/
│   ├── project1.html
│   ├── project2.html
│   └── ...
└── README.md
