# Material-Aktualisierung

Wenn eine HTML-Basisdatei geändert wird, müssen folgende Folgedateien neu erstellt werden.

---

## Arbeitsblatt 1 – Anne Frank: Wer war sie? (Schüler)

**Basis:** `Html_AB1_AnneFrank_S.html`

| Folgedatei | Warum |
|---|---|
| `Pdf_AB1_AnneFrank_S.pdf` | PDF aus HTML neu rendern |
| `previews/Png_AB1_AnneFrank_S.png` | PNG aus neuem PDF neu rendern |
| `Pdf_Alle_Blaetter.pdf` | Sammel-PDF neu zusammenführen |
| `Pdf_Nur_Schuelerblaetter.pdf` | Sammel-PDF neu zusammenführen |

---

## Arbeitsblatt 1 – Anne Frank: Wer war sie? (Lösung)

**Basis:** `Html_AB1_AnneFrank_L.html`

| Folgedatei | Warum |
|---|---|
| `Pdf_AB1_AnneFrank_L.pdf` | PDF aus HTML neu rendern |
| `previews/Png_AB1_AnneFrank_L.png` | PNG aus neuem PDF neu rendern |
| `Pdf_Alle_Blaetter.pdf` | Sammel-PDF neu zusammenführen |
| `Pdf_Nur_Loesungsblaetter.pdf` | Sammel-PDF neu zusammenführen |

---

## Arbeitsblatt 2 – Diskriminierung heute (Schüler)

**Basis:** `Html_AB2_Diskriminierung_S.html`

| Folgedatei | Warum |
|---|---|
| `Pdf_AB2_Diskriminierung_S.pdf` | PDF aus HTML neu rendern |
| `previews/Png_AB2_Diskriminierung_S.png` | PNG aus neuem PDF neu rendern |
| `Pdf_Alle_Blaetter.pdf` | Sammel-PDF neu zusammenführen |
| `Pdf_Nur_Schuelerblaetter.pdf` | Sammel-PDF neu zusammenführen |

---

## Arbeitsblatt 2 – Diskriminierung heute (Lösung)

**Basis:** `Html_AB2_Diskriminierung_L.html`

| Folgedatei | Warum |
|---|---|
| `Pdf_AB2_Diskriminierung_L.pdf` | PDF aus HTML neu rendern |
| `previews/Png_AB2_Diskriminierung_L.png` | PNG aus neuem PDF neu rendern |
| `Pdf_Alle_Blaetter.pdf` | Sammel-PDF neu zusammenführen |
| `Pdf_Nur_Loesungsblaetter.pdf` | Sammel-PDF neu zusammenführen |

---

## Reihenfolge bei Aktualisierung

1. HTML-Datei ändern
2. PDF neu aus HTML rendern (Chrome Headless)
3. PNG-Vorschau neu aus PDF rendern (PyMuPDF)
4. Betroffene Sammel-PDFs neu zusammenführen (PyMuPDF)

---

## Sammel-PDFs – Inhalt

| Sammel-PDF | Enthält |
|---|---|
| `Pdf_Alle_Blaetter.pdf` | AB1 Schüler · AB1 Lösung · AB2 Schüler · AB2 Lösung |
| `Pdf_Nur_Schuelerblaetter.pdf` | AB1 Schüler · AB2 Schüler |
| `Pdf_Nur_Loesungsblaetter.pdf` | AB1 Lösung · AB2 Lösung |
