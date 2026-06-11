/*
  ╔══════════════════════════════════════════╗
  ║  BILDPROMPTS                             ║
  ║  Key = Bildname im <span> der img-ph     ║
  ║  Wert = Prompt mit Format & Stil-Infos   ║
  ╚══════════════════════════════════════════╝
*/

const PROMPTS = {

  /* ── Bestehende Bilder ────────────────────── */

  'anne-schreibtisch': `[Format: 16:9 Querformat | Stil: Dokumentarisch, Schwarzweiß-Foto-Ästhetik | Empfohlen: DALL-E 3 / Midjourney]

A young Jewish girl, approximately 13 years old, sitting at a wooden desk writing in a diary. Short dark hair, large expressive eyes, modest 1940s dress. The room is small, dimly lit by a warm lamp. Quiet and intimate atmosphere. Black and white photographic style, historically accurate WWII era. Soft shadows, documentary aesthetic. No anachronisms.`,

  'anne-portraet-laechelnd': `[Format: Hochformat 2:3 | Stil: Aquarell-Illustration, warm | Empfohlen: DALL-E 3 / Midjourney]

Portrait illustration of a young Jewish girl, around 13, short dark hair, bright warm eyes, smiling gently. Simple 1940s blouse. Light neutral background. Warm, approachable expression. Soft watercolor or pencil illustration, slightly stylized but realistic. Welcoming and relatable to teenagers.`,

  'anne-illustration-rot': `[Format: Hochformat 2:3 | Stil: Buch-Illustration, farbenfroh | Empfohlen: DALL-E 3 / Midjourney]

Full-body or half-body illustration of a young girl, approx. 13, short dark hair, wearing a simple red blouse or sweater. Relaxed, natural pose. Friendly, slightly cartoon-like but age-appropriate and respectful. Warm colors, clean lines. Educational book character illustration feel. Background: soft neutral cream.`,

  'anne-portraet-kamera': `[Format: Hochformat 2:3 | Stil: Bleistift/Tinte mit Farbwäsche | Empfohlen: DALL-E 3 / Midjourney]

Portrait illustration of a young Jewish girl, approx. 13, looking directly at the viewer with a serious but empathetic gaze. Short dark hair, 1940s clothing. Calm, thoughtful, direct expression – as if asking a question. Soft pencil or ink style, subtle color washes. Background slightly blurred. Conveys trust and directness.`,

  'anne-portraet-seitlich': `[Format: Hochformat 2:3 | Stil: Stilles Aquarell, melancholisch | Empfohlen: DALL-E 3 / Midjourney]

Side profile or three-quarter view of a young girl, approx. 13, thoughtful and slightly melancholic. Looking away, lost in thought. Short dark hair, simple 1940s clothing. Muted palette – grays, blues, warm browns. Quiet and reflective mood. Pencil sketch or soft watercolor. Contemplative, not sad.`,

  'soldaten-amsterdam': `[Format: 16:9 Querformat | Stil: Dunkel, cineastisch, Graphic Novel | Empfohlen: Midjourney / DALL-E 3]

Historical illustration: narrow Amsterdam street, early 1940s. Two or three uniformed soldiers patrol in the background (Nazi occupation suggested, no specific insignia). In the foreground a young girl peers around a brick corner with fear. Dark, cinematic graphic-novel aesthetic. Muted palette: gray-blue streets, dark uniforms, small warm light on the girl.`,

  'schueler-arbeitsblatt': `[Format: 16:9 Querformat | Stil: Clean Illustration, zeitgenössisch | Empfohlen: DALL-E 3 / Midjourney]

Illustration of a teenager, 15–17, sitting at a school desk working on a paper worksheet. Focused, leaning forward with pen in hand. Modern classroom. Friendly, contemporary style. Clean line art or simple digital illustration. Warm neutral colors. Gender-neutral.`,

  'kinder-divers-froelich': `[Format: 16:9 Querformat | Stil: Flaches Design, farbenfroh, inklusiv | Empfohlen: DALL-E 3 / Midjourney]

Colorful illustration of a diverse group of children and teenagers, 10–16, from different ethnic backgrounds. Various skin tones, hair types, clothing styles. Smiling, laughing, standing together. Diversity, friendship, equality. Bright warm colors. Flat design or playful illustration. No stereotypes.`,

  'hinterhaus-aquarell': `[Format: Hochformat 3:4 | Stil: Aquarell, atmosphärisch, melancholisch | Empfohlen: DALL-E 3 / Midjourney]

Watercolor illustration: narrow tall brick building in Amsterdam, seen from a small courtyard. Typical Dutch canal-house: steep gabled roof, small windows with drawn curtains, ivy-covered brick. Slightly gloomy but not horrifying – quiet, secretive. Soft warm tones: amber, brick red, gray-blue sky. Evokes hiddenness and isolation without drama.`,

  'herzen-illustration': `[Format: Quadrat 1:1 | Stil: Minimalistisch, Vektor-Ästhetik | Empfohlen: DALL-E 3 / Midjourney]

Illustration of multiple concentric hearts growing outward from a center. Color palette: warm deep red/terracotta at center → softer pinks and creams at outer rings. Clean, modern, slightly geometric. Flat or minimalist design. No people, just hearts. Dark navy background.`,

  'haende-zusammen': `[Format: 16:9 Querformat | Stil: Warm, symbolisch, leicht stilisiert | Empfohlen: DALL-E 3 / Midjourney]

Illustration of many hands with different skin tones stacked on top of each other – like a team huddle. Hands come from above the frame. Diversity and unity. Skin tones from very light to very dark. Warm lighting. Empowering, hopeful mood. Clean, slightly stylized illustration.`,

  /* ── Wichtig-Kacheln ──────────────────────── */

  'wichtig-krieg': `[Format: Hochformat 9:16 | Stil: Dunkel, cineastisch, WWII-Atmosphäre | Empfohlen: Midjourney / DALL-E 3]

Dark atmospheric illustration of Amsterdam under WWII occupation at dusk. Narrow canal street, cobblestones, historic buildings, a single lamppost casting pale light. No people – the emptiness conveys dread. Deep blacks, cold blue shadows, faint reflections on wet cobblestones. Heavy, oppressive mood. Cinematic wide-angle.`,

  'wichtig-kind': `[Format: 4:3 Querformat | Stil: Emotionales Portrait, warm aber desaturiert | Empfohlen: DALL-E 3 / Midjourney]

Close portrait of a young child, approx. 10–13, looking directly at the viewer with large expressive eyes. 1940s European clothing. Serious, thoughtful, slightly vulnerable expression. Soft directional lighting – warm on one side, shadow on the other. Slightly desaturated palette. Universal child, no identifiable features. Painterly illustration.`,

  'wichtig-ausgrenzung': `[Format: 4:3 Querformat | Stil: Symbolisch, stark kontrastierend | Empfohlen: Midjourney / DALL-E 3]

A lone silhouetted figure standing at the edge of a group that faces away. A visible gap separates them. The lone figure is in cold isolated light; the group is in warm light. High contrast, dramatic composition. Conveys exclusion and loneliness. Dark background. Minimal flat silhouettes.`,

  'wichtig-sicherheit': `[Format: 4:3 Querformat | Stil: Warm, abstrakt, schützend | Empfohlen: DALL-E 3 / Midjourney]

Abstract illustration: two large gentle hands (open palms facing up, different skin tones) holding a small glowing sphere of warm light. Deep dark background – blues and blacks. Warm amber glow. Conveys safety, protection, and care. Soft painterly style.`,

  'wichtig-respekt': `[Format: 4:3 Querformat | Stil: Sauber, symbolisch, ausgewogen | Empfohlen: DALL-E 3 / Midjourney]

Two simplified human figures facing each other in equal standing, shown as clean silhouettes or minimal outlines. Between them: abstract speech bubbles or hands meeting in the middle. Balanced, symmetrical composition. Warm but restrained palette. Conveys mutual respect. Flat vector illustration.`,

  /* ── Annes Situation ──────────────────────── */

  'anne-schule-verboten': `[Format: Quadrat 1:1 | Stil: Dramatisch, expressionistisch | Empfohlen: Midjourney / DALL-E 3]

A young Jewish girl, approx. 13, standing alone outside tall iron school gates. She presses her face against the bars, looking inside where other children play. Longing and sadness. 1940s clothing. Heavy shadows – bars cast dramatic shadows across the girl. Dark expressionistic style. Cold shadow on the girl, warm light inside the school.`,

  'anne-muss-verstecken': `[Format: Quadrat 1:1 | Stil: Atmosphärisch, Chiaroscuro, cineastisch | Empfohlen: Midjourney / DALL-E 3]

Interior of a cramped hiding room in an Amsterdam attic, 1942. Steep slanted ceiling, one tiny curtained window. Narrow bed, small desk. Dust motes in a thin beam of light. Claustrophobic, hushed atmosphere. Warm amber lamp against deep shadow. No people – the empty room tells the story. Cinematic chiaroscuro.`,

  'anne-hat-angst': `[Format: Quadrat 1:1 | Stil: Intensiv, Graphic Novel, High Contrast | Empfohlen: Midjourney / DALL-E 3]

Extreme close-up: a young girl's face partially hidden behind a heavy curtain. Only one eye and part of her face visible, peeking through a narrow gap. Wide, fearful eye. Dark room behind her; blurred street below through the gap. Deep shadow around the eye, small highlight on the iris. Graphic novel style. Monochromatic with hints of deep blue. Intense and dramatic.`,

  'anne-schreibt-tagebuch': `[Format: Quadrat 1:1 | Stil: Intim, warm, Kerzenlicht | Empfohlen: DALL-E 3 / Midjourney]

Top-down view of an open diary with handwritten text (German script, unreadable). A quill or ink pen lies beside it. A single candle burns, casting warm amber glow across the pages. A pressed flower nearby. Deep shadow background. The illuminated diary pages are the focal point. Intimate, slightly melancholic. Painterly warm illustration.`,

  /* ── Zeitleiste ───────────────────────────── */

  'anne-frankfurt-1929': `[Format: 4:3 Querformat | Stil: Vintage-Postkarte, Sepia-warm | Empfohlen: DALL-E 3 / Midjourney]

Vintage illustration of Frankfurt am Main, Germany, circa 1929. Sunny summer afternoon on a tree-lined bourgeois street. A young couple walking with a baby carriage past elegant early-20th-century buildings. Period clothing. Warm sepia and amber tones. Pre-war innocence and prosperity. Painterly style reminiscent of vintage travel posters.`,

  'anne-amsterdam-1933': `[Format: 4:3 Querformat | Stil: Melancholisches Aquarell | Empfohlen: DALL-E 3 / Midjourney]

A Jewish family of four – father, mother, two young daughters – arriving in Amsterdam. Standing on a canal bridge with suitcases, looking at the city. Uncertain, tired but hopeful expressions. Amsterdam canal houses in background. Overcast sky, soft diffused light. Muted watercolor – grays, blues, warm ochres. The weight of displacement is palpable.`,

  'anne-hinterhaus-1942': `[Format: 4:3 Querformat | Stil: Aquarell, atmosphärisch, melancholisch | Empfohlen: DALL-E 3 / Midjourney]

The secret annex period in Amsterdam around 1942. A quiet view of a narrow brick rear building from a small enclosed courtyard. Windows with drawn curtains, aged brick, muted amber and gray-blue tones. Quiet hiddenness and isolation without drama. No people. Hauptmotiv mittig, genügend Rand, kein Anschnitt.`,

  'anne-entdeckt-1944': `[Format: 4:3 Querformat | Stil: Dramatisch dunkel, Graphic Novel | Empfohlen: Midjourney / DALL-E 3]

Dark dramatic illustration: a heavy bookcase door at the end of a narrow corridor being forced open. Harsh blinding light floods in, silhouetting dark figures in the doorway. The room beyond is dark and suddenly violated. No graphic violence – only the moment of discovery and terror. Deep blacks, cold harsh light. Stark high-contrast graphic novel style.`,

  'anne-erinnerung-1945': `[Format: 4:3 Querformat | Stil: Würdevoll, Memorial-Ästhetik | Empfohlen: DALL-E 3 / Midjourney]

Solemn memorial illustration: an open diary lying on a rough wooden surface, pages worn and slightly curled. A single white tulip placed on the open page. Soft diffused cool light – like an overcast spring day. Background blurred and dark. Quiet, respectful, mournful mood. No graphic imagery. Painterly style. Soft blues, whites, muted browns.`,

  /* ── Wie können wir helfen ────────────────── */

  'respekt-illustration': `[Format: Quadrat 1:1 | Stil: Warm, einladend, zeitgenössisch | Empfohlen: DALL-E 3 / Midjourney]

Two teenagers of different ethnic backgrounds sitting across from each other at a table, both leaning forward in genuine conversation. Body language shows mutual interest and openness. Simple classroom setting. Warm optimistic color palette – golden yellows, warm creams. Friendly illustration style. No stereotypes.`,

  'courage-illustration': `[Format: Quadrat 1:1 | Stil: Empowerment, dynamisch | Empfohlen: DALL-E 3 / Midjourney]

A teenager standing up and speaking confidently while others listen. The speaker slightly elevated – standing while others are seated. A warm spotlight of confidence illuminates the speaker. Bold dynamic composition. Warm empowering colors. Diverse group of listeners. Clean illustration style.`,

  'freundlichkeit-illustration': `[Format: Quadrat 1:1 | Stil: Warm, symbolisch, hoffnungsvoll | Empfohlen: DALL-E 3 / Midjourney]

Two hands reaching toward each other – one lighter-skinned, one darker-skinned – nearly touching, a small gap between fingertips. Warm golden light between the hands. Contemporary and secular. Soft painterly style. Warm amber and cream tones. Dark background, making hands and light the focal point. Symbol of connection.`,

  /* ── Glossar-Karten (F11) ─────────────────── */

  'glossar-ausgrenzung': `[Format: Quadrat 1:1 | Stil: Symbolisch, kontrastierend | Empfohlen: Midjourney / DALL-E 3]

A lone child sitting on the edge of a playground, watching a group of other children play in the distance. The lone child is in cold isolated shadow; the group is in warm sunlight. Emotional but not graphic. Painterly illustration, soft and clear.`,

  'glossar-diskriminierung': `[Format: Quadrat 1:1 | Stil: Sauber, symbolisch | Empfohlen: DALL-E 3 / Midjourney]

A simple balance scale (justice scale) with one side pushed unfairly down. Two diverse human silhouettes on opposite sides – one elevated, one lowered. Clean graphic metaphor. Warm muted palette. Flat vector illustration.`,

  'glossar-vorurteil': `[Format: Quadrat 1:1 | Stil: Expressiv, symbolisch | Empfohlen: DALL-E 3 / Midjourney]

A person's face half-covered by a patterned blindfold or veil – unable to see clearly. The visible half shows uncertainty. Simple illustration. Muted tones, warm light breaking through on one side. Conveys incomplete perception.`,

  'glossar-rassismus': `[Format: Quadrat 1:1 | Stil: Symbolisch, stark | Empfohlen: Midjourney / DALL-E 3]

A red blocking hand pushing away diverse silhouettes of people. The silhouettes resist and stand together in solidarity. Stark high-contrast composition. Deep red and dark background. The group of people shown in warm gold tones. Powerful, clear symbolism.`,

  'anne-tagebuch': `[Format: Hochformat 3:4 | Stil: Aquarell, warm, historisch | Empfohlen: DALL-E 3 / Midjourney]

A fictional young Jewish girl aged 13–15 in 1940s clothing sits at a small wooden desk and writes in a diary. She is focused, pensive and calm, leaning slightly forward with pen in hand. Simple room with a small window and warm desk light. Quiet historical graphic novel style, watercolor texture, muted warm tones, face fully visible, diary and hands visible. No readable diary text.`

};
