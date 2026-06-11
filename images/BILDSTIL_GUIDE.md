# Bildstil-Guide – Anne Frank Unterricht

> Zentrales Referenzdokument für alle Bilder in der Unterrichtspräsentation.  
> Generierte Bilder gehören in diesen Ordner: `images/`  
> Code-seitige Prompts: `js/prompts.js`  
> Platzhalter-Bild: `images/Platzhalter.png`  
> Referenzbild für Stil: `images/Referenz_Style.png`

---

## Allgemeiner Bildstil

Die Bilder sollen wie eine **ruhige historische Grafiknovelle** wirken.

| Kriterium | Vorgabe |
|-----------|---------|
| Grundstil | Realistisch, leicht illustrativ, nicht fotografisch |
| Farbwelt | Gedämpft, warm, historisch — kein Neon, kein Grell |
| Licht | Weich, filmisch, leicht melancholisch |
| Stimmung | Ernst, respektvoll, würdevoll |
| Zielgruppe | Schülerinnen und Schüler, BVJ / Berufsschule |

**Verboten:**
- Keine Comic-Überzeichnung
- Keine modernen Elemente (kein Smartphone, kein modernes Design)
- Keine Gewaltbilder
- Keine Schockbilder
- Keine NS-Symbolik (außer wenn historisch zwingend notwendig und dann sehr zurückhaltend)

---

## Referenzstil

Orientierung am Referenzbild `Referenz_Style.png`:

> Anne schreibt an einem Tisch — schwarz-weiß oder stark desaturiert, ruhige Innenraumszene, historisch, weiches Licht einer Tischlampe, realistisch, dokumentarisch, nicht plakativ.

**Dieser Stil gilt besonders für:**
- Alle Anne-Frank-Szenen
- Alle Bilder mit Kindern oder Jugendlichen
- Alle emotionalen Szenen

**Merkmale des Referenzstils:**
- Historisch korrekte Kleidung (1940er Jahre)
- Ruhige Körperhaltung, keine dramatische Geste
- Gesicht vollständig sichtbar, emotionale Nähe
- Weiches, seitliches Licht — keine harte Frontalbeleuchtung
- Keine dramatische Übertreibung

---

## Bildformat-Regeln

| Verwendung | Seitenverhältnis | Empfohlene Größe | Erläuterung |
|-----------|-----------------|------------------|-------------|
| Titelfolie (Vollbild) | 16:9 | 1920×1080 px | Hintergrundbereich rechts |
| Portrait-Bilder (Sprechblasen-Folien) | 2:3 | 800×1200 px | Rechte Spalte, hochformat |
| Kachel-Bilder (2×2-Grid F2) | 4:3 | 1200×900 px | Oberer Bereich der Kachel, landscape |
| Zeitleisten-Bilder (F4) | 4:3 | 1200×900 px | Thumbnail-Format |
| Situations-Bilder (F5) | 1:1 | 1200×1200 px | Quadratische Gitterkacheln |
| Glossar-Karten (F11) | 1:1 | 800×800 px | Kleine Bilder auf Flip-Karten |
| Abschluss-Bild (F15) | 3:4 | 900×1200 px | Linke Spalte, hochformat |
| Arbeitsblatt-Bild (F14) | 16:9 | 1600×900 px | Hintergrund oder Illustration |

---

## Hinweise zum Bildausschnitt

Gilt für **alle** Bilder:

- Wichtigstes Motiv **mittig** platzieren
- Genügend Rand an allen Seiten lassen (mind. 10 % Abstand)
- Kein wichtiges Motiv am Bildrand
- **Gesicht niemals anschneiden**
- Bei Kachelbildern: Hauptmotiv im **oberen oder mittleren Bereich** (unterer Bereich wird vom Text überlagert)
- Bei Hochformat-Portraits: Gesicht im oberen Drittel

---

## Alle Image-Slots

### Bereits generiert ✓

```json
{
  "id": "anne-schreibtisch",
  "src": "images/anne-schreibtisch.png",
  "alt": "Anne Frank schreibt an einem Tisch in einem ruhigen historischen Zimmer",
  "aspectRatio": "16:9",
  "recommendedSize": "1920x1080",
  "focalPoint": "center",
  "folie": "F1 – Titelfolie (rechte Spalte)",
  "status": "generiert ✓"
}

{
  "id": "anne-portraet-laechelnd",
  "src": "images/anne-portraet-laechelnd.png",
  "alt": "Freundliches Porträt eines Mädchens im Aquarellstil, lächelnd",
  "aspectRatio": "2:3",
  "recommendedSize": "800x1200",
  "focalPoint": "face-center",
  "folie": "F3, F8, F9, F10, F12, F13 – alle Sprechblasen-Folien",
  "status": "generiert ✓"
}

{
  "id": "wichtig-kind",
  "src": "images/wichtig-kind.png",
  "alt": "Ernstes Kinderporträt im Stil der 1940er Jahre, ausdrucksstarke Augen",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "face-center",
  "folie": "F2 – Gesprächsrahmen, dunkel-Kachel oben links",
  "status": "generiert ✓ (neu 4:3)"
}

{
  "id": "wichtig-ausgrenzung",
  "src": "images/wichtig-ausgrenzung.png",
  "alt": "Eine einzelne Figur steht abseits einer Gruppe, Symbolbild Ausgrenzung",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F2 – Gesprächsrahmen, dunkel-Kachel oben rechts",
  "status": "generiert ✓ (neu 4:3)"
}

{
  "id": "wichtig-sicherheit",
  "src": "images/wichtig-sicherheit.png",
  "alt": "Schützende Hände halten ein warmes Licht, Symbolbild Sicherheit",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F2 – Gesprächsrahmen, warm-Kachel unten links",
  "status": "generiert ✓ (neu 4:3)"
}

{
  "id": "wichtig-respekt",
  "src": "images/wichtig-respekt.png",
  "alt": "Zwei Menschen begegnen sich respektvoll im Gespräch",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F2 – Gesprächsrahmen, warm-Kachel unten rechts",
  "status": "generiert ✓ (neu 4:3)"
}
```

---

### Neu generiert / aktualisiert

```json
{
  "id": "anne-frankfurt-1929",
  "src": "images/anne-frankfurt-1929.png",
  "alt": "Vintage-Illustration Frankfurt am Main 1929, sonnige Straßenszene",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F4 – Zeitleiste, Ereignis 1929",
  "status": "generiert ✓",
  "prompt": "[Format: 4:3 Querformat | Stil: Vintage-Postkarte, Sepia-warm | Empfohlen: DALL-E 3 / Midjourney] Vintage illustration of Frankfurt am Main, Germany, circa 1929. Sunny summer afternoon on a tree-lined bourgeois street. A young couple walking with a baby carriage past elegant early-20th-century buildings. Period clothing. Warm sepia and amber tones. Pre-war innocence and prosperity. Painterly style reminiscent of vintage travel posters. Hauptmotiv mittig, genügend Rand, kein Anschnitt."
}

{
  "id": "anne-amsterdam-1933",
  "src": "images/anne-amsterdam-1933.png",
  "alt": "Jüdische Familie kommt in Amsterdam an, Brücke mit Koffern, unsichere Mienen",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F4 – Zeitleiste, Ereignis 1933",
  "status": "generiert ✓",
  "prompt": "[Format: 4:3 Querformat | Stil: Melancholisches Aquarell | Empfohlen: DALL-E 3 / Midjourney] A Jewish family of four — father, mother, two young daughters — arriving in Amsterdam. Standing on a canal bridge with suitcases, looking at the city. Uncertain, tired but hopeful expressions. Amsterdam canal houses in background. Overcast sky, soft diffused light. Muted watercolor — grays, blues, warm ochres. The weight of displacement is palpable. Hauptmotiv mittig, Gesichter vollständig sichtbar, genügend Rand."
}

{
  "id": "anne-hinterhaus-1942",
  "src": "images/anne-hinterhaus-1942.png",
  "alt": "Das Hinterhaus in Amsterdam als stilles Versteck um 1942",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F4 – Zeitleiste, Ereignis 1942",
  "status": "generiert ✓",
  "prompt": "[Format: 4:3 Querformat | Stil: Aquarell, atmosphärisch, melancholisch] Quiet view of a narrow brick rear building from a small enclosed Amsterdam courtyard, drawn curtains, muted amber and gray-blue tones, hiddenness and isolation without drama. Hauptmotiv mittig, genügend Rand, kein Anschnitt."
}

{
  "id": "anne-entdeckt-1944",
  "src": "images/anne-entdeckt-1944.png",
  "alt": "Dramatisch dunkle Szene: ein Bücherregal-Geheimgang wird aufgebrochen, grelles Licht",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F4 – Zeitleiste, Ereignis 1944",
  "status": "generiert ✓",
  "prompt": "[Format: 4:3 Querformat | Stil: Dramatisch dunkel, Graphic Novel | Empfohlen: Midjourney / DALL-E 3] Dark dramatic illustration: a heavy bookcase door at the end of a narrow corridor being forced open. Harsh blinding light floods in, silhouetting dark figures in the doorway. The room beyond is dark and suddenly violated. No graphic violence — only the moment of discovery and terror. Deep blacks, cold harsh light. Stark high-contrast graphic novel style. Hauptmotiv mittig, genügend Rand."
}

{
  "id": "anne-erinnerung-1945",
  "src": "images/anne-erinnerung-1945.png",
  "alt": "Würdevolle Gedenk-Illustration: offenes Tagebuch mit weißer Tulpe auf altem Holz",
  "aspectRatio": "4:3",
  "recommendedSize": "1200x900",
  "focalPoint": "center",
  "folie": "F4 – Zeitleiste, Ereignis 1945",
  "status": "generiert ✓",
  "prompt": "[Format: 4:3 Querformat | Stil: Würdevoll, Memorial-Ästhetik | Empfohlen: DALL-E 3 / Midjourney] Solemn memorial illustration: an open diary lying on a rough wooden surface, pages worn and slightly curled. A single white tulip placed on the open page. Soft diffused cool light — like an overcast spring day. Background blurred and dark. Quiet, respectful, mournful mood. No graphic imagery. Painterly style. Soft blues, whites, muted browns. Motiv mittig, genügend Rand."
}

{
  "id": "hinterhaus-aquarell",
  "src": "images/hinterhaus-aquarell.png",
  "alt": "Aquarell-Illustration des Hinterhauses in Amsterdam, schmal, giebelständig, verhangen",
  "aspectRatio": "3:4",
  "recommendedSize": "900x1200",
  "focalPoint": "center",
  "folie": "F5 – Das Versteck, Bildbereich",
  "status": "generiert ✓",
  "prompt": "[Format: 3:4 Hochformat | Stil: Aquarell, atmosphärisch, melancholisch | Empfohlen: DALL-E 3 / Midjourney] Watercolor illustration: narrow tall brick building in Amsterdam, seen from a small courtyard. Typical Dutch canal-house: steep gabled roof, small windows with drawn curtains, ivy-covered brick. Slightly gloomy but not horrifying — quiet, secretive. Soft warm tones: amber, brick red, gray-blue sky. Evokes hiddenness and isolation without drama. Hauptmotiv mittig, kein Anschnitt."
}

{
  "id": "anne-tagebuch",
  "src": "images/anne-tagebuch.png",
  "alt": "Anne Frank beim Schreiben in ihr Tagebuch",
  "aspectRatio": "3:4",
  "recommendedSize": "900x1200",
  "focalPoint": "face-center",
  "folie": "F15 – Abschluss, linke Bildspalte",
  "status": "generiert ✓",
  "prompt": "[Format: 3:4 Hochformat | Stil: Aquarell, warm, historisch] Fictional young Jewish girl aged 13–15 in 1940s clothing writes in a diary at a small wooden desk. Ruhig, würdevoll, Gesicht und Tagebuch sichtbar, keine lesbare Schrift."
}

{
  "id": "schueler-arbeitsblatt",
  "src": "images/schueler-arbeitsblatt.png",
  "alt": "Jugendlicher sitzt an einem Schultisch und arbeitet konzentriert an einem Arbeitsblatt",
  "aspectRatio": "16:9",
  "recommendedSize": "1920x1080",
  "focalPoint": "center",
  "folie": "F14 – Arbeitsblatt-Folie",
  "status": "generiert ✓",
  "prompt": "[Format: 16:9 Querformat | Stil: Clean Illustration, zeitgenössisch | Empfohlen: DALL-E 3 / Midjourney] Illustration of a teenager, 15–17, sitting at a school desk working on a paper worksheet. Focused, leaning forward with pen in hand. Modern classroom. Friendly, contemporary style. Clean line art or simple digital illustration. Warm neutral colors. Gender-neutral. Hauptmotiv mittig, Gesicht vollständig sichtbar, genügend Rand."
}

{
  "id": "glossar-ausgrenzung",
  "src": "images/glossar-ausgrenzung.png",
  "alt": "Ein Kind sitzt allein am Rand eines Spielplatzes, andere Kinder spielen in der Ferne",
  "aspectRatio": "1:1",
  "recommendedSize": "800x800",
  "focalPoint": "center",
  "folie": "F11 – Glossar, Flip-Karte Ausgrenzung",
  "status": "generiert ✓",
  "prompt": "[Format: Quadrat 1:1 | Stil: Symbolisch, kontrastierend | Empfohlen: Midjourney / DALL-E 3] A lone child sitting on the edge of a playground, watching a group of other children play in the distance. The lone child is in cold isolated shadow; the group is in warm sunlight. Emotional but not graphic. Painterly illustration, soft and clear. Hauptmotiv mittig, genügend Rand."
}

{
  "id": "glossar-diskriminierung",
  "src": "images/glossar-diskriminierung.png",
  "alt": "Symbolische Waage mit ungleich verteilten Figuren, eine Seite gedrückt",
  "aspectRatio": "1:1",
  "recommendedSize": "800x800",
  "focalPoint": "center",
  "folie": "F11 – Glossar, Flip-Karte Diskriminierung",
  "status": "generiert ✓",
  "prompt": "[Format: Quadrat 1:1 | Stil: Sauber, symbolisch | Empfohlen: DALL-E 3 / Midjourney] A simple balance scale (justice scale) with one side pushed unfairly down. Two diverse human silhouettes on opposite sides — one elevated, one lowered. Clean graphic metaphor. Warm muted palette. Flat vector illustration. Hauptmotiv mittig, genügend Rand."
}

{
  "id": "glossar-vorurteil",
  "src": "images/glossar-vorurteil.png",
  "alt": "Person mit Augenbinde oder Schleier, sieht nur halb, Symbol für blinde Meinung",
  "aspectRatio": "1:1",
  "recommendedSize": "800x800",
  "focalPoint": "face-center",
  "folie": "F11 – Glossar, Flip-Karte Vorurteil",
  "status": "generiert ✓",
  "prompt": "[Format: Quadrat 1:1 | Stil: Expressiv, symbolisch | Empfohlen: DALL-E 3 / Midjourney] A person's face half-covered by a patterned blindfold or veil — unable to see clearly. The visible half shows uncertainty. Simple illustration. Muted tones, warm light breaking through on one side. Conveys incomplete perception. Gesicht mittig, genügend Rand."
}

{
  "id": "glossar-rassismus",
  "src": "images/glossar-rassismus.png",
  "alt": "Abweisende Hand gegen Gruppe von Silhouetten, die standhaft zusammenstehen",
  "aspectRatio": "1:1",
  "recommendedSize": "800x800",
  "focalPoint": "center",
  "folie": "F11 – Glossar, Flip-Karte Rassismus",
  "status": "generiert ✓",
  "prompt": "[Format: Quadrat 1:1 | Stil: Symbolisch, stark | Empfohlen: Midjourney / DALL-E 3] A red blocking hand pushing away diverse silhouettes of people. The silhouettes resist and stand together in solidarity. Stark high-contrast composition. Deep red and dark background. The group of people shown in warm gold tones. Powerful, clear symbolism. Hauptmotiv mittig, genügend Rand."
}
```

---

## Code-Referenz

| Datei | Inhalt |
|-------|--------|
| `js/prompts.js` | Vollständige Prompt-Texte, Keys = Bildnamen (ohne .png) |
| `images/Platzhalter.png` | Wird via CSS auf alle ungefüllten Slots angewendet |
| `images/Referenz_Style.png` | Visuelles Referenzbild für KI-Generierung |
| `images/BILDSTIL_GUIDE.md` | Diese Datei |

**Wie der Code die Bilder einbindet:**

```html
<!-- Ungefüllter Slot (zeigt Platzhalter.png via CSS) -->
<div class="img-ph">
  <svg>...</svg>
  <span>bildname</span>
  <button class="img-copy-btn" onclick="copyPrompt(this)">Prompt kopieren</button>
</div>

<!-- Gefüllter Slot (echtes Bild) -->
<div class="img-ph filled">
  <img src="images/bildname.png" alt="...">
  <svg>...</svg>
  <span>bildname</span>
  <button class="img-copy-btn" onclick="copyPrompt(this)">Prompt kopieren</button>
</div>
```

**Slot befüllen:**
1. Bild generieren (Prompt aus `js/prompts.js` per "Prompt kopieren"-Button)
2. Datei als `images/[name].png` ablegen
3. Im HTML `class="img-ph"` → `class="img-ph filled"` ändern
4. `<img src="images/[name].png" alt="...">` als erstes Kind einfügen

---

## Status-Übersicht

| Bildname | Folie | Format | Status |
|----------|-------|--------|--------|
| anne-schreibtisch | F1 Titel | 16:9 | ✓ generiert |
| anne-portraet-laechelnd | F3/F8–F13 | 2:3 | ✓ generiert |
| wichtig-kind | F2 | 4:3 | ✓ neu generiert |
| wichtig-ausgrenzung | F2 | 4:3 | ✓ neu generiert |
| wichtig-sicherheit | F2 | 4:3 | ✓ neu generiert |
| wichtig-respekt | F2 | 4:3 | ✓ neu generiert |
| anne-frankfurt-1929 | F4 | 4:3 | ✓ generiert |
| anne-amsterdam-1933 | F4 | 4:3 | ✓ generiert |
| anne-hinterhaus-1942 | F4 | 4:3 | ✓ generiert |
| anne-entdeckt-1944 | F4 | 4:3 | ✓ generiert |
| anne-erinnerung-1945 | F4 | 4:3 | ✓ generiert |
| hinterhaus-aquarell | F5 | 3:4 | ✓ generiert |
| schueler-arbeitsblatt | F14 | 16:9 | ✓ generiert |
| glossar-ausgrenzung | F11 | 1:1 | ✓ generiert |
| glossar-diskriminierung | F11 | 1:1 | ✓ generiert |
| glossar-vorurteil | F11 | 1:1 | ✓ generiert |
| glossar-rassismus | F11 | 1:1 | ✓ generiert |
| anne-tagebuch | F15 | 3:4 | ✓ generiert |

**Summe:** 18 generiert · 0 ausstehend

---

## Hinweis zu den wichtig-* Bildern

Die vier F2-Kachel-Bilder (`wichtig-kind`, `wichtig-ausgrenzung`, `wichtig-sicherheit`, `wichtig-respekt`) wurden neu als **4:3 Querformat** generiert und unter denselben Dateinamen eingebunden. Die Prompts in `js/prompts.js` sind entsprechend auf `4:3 Querformat` aktualisiert.
