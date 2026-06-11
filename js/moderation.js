/* Moderationshinweise für alle 15 Folien
   Index = Folien-Index (0-basiert) */

const MODERATION = [
  // F1 – Titelfolie
  {
    title: 'So funktioniert diese Präsentation',
    points: [
      'Mit „Weiter" und „Zurück" durch die Folien wechseln.',
      'Über „Hinweise" findest du Moderationshilfen für jede Folie.',
      'Die Hinweise sind nur für die Lehrkraft gedacht.'
    ]
  },
  // F2 – Gesprächsrahmen
  {
    title: 'Gesprächsrahmen',
    points: [
      'Alle Punkte gemeinsam mit der Klasse laut vorlesen.',
      'Fragen: „Habt ihr Fragen zu diesen Regeln?"',
      'Ein guter Rahmen spart später viel Kraft.'
    ]
  },
  // F3 – Wer war Anne Frank?
  {
    title: 'Wer war Anne Frank?',
    points: [
      'Kurze Vorwissensrunde – max. 5 Minuten.',
      'Kein Richtig oder Falsch – Ziel ist Neugier, nicht Prüfung.',
      'Ergebnisse kurz an der Tafel sichern.'
    ]
  },
  // F4 – Zeitleiste
  {
    title: 'Zeitleiste',
    points: [
      'Zeitstrahl gemeinsam von links nach rechts durchgehen.',
      'Daten kurz erläutern – nicht alle Details.',
      'Fokus auf Flucht, Versteck und Entdeckung.'
    ]
  },
  // F5 – Das Versteck
  {
    title: 'Das Versteck und das Tagebuch',
    points: [
      'Text vorlesen oder von einem Schüler vorlesen lassen.',
      'Kurze Stille nach dem Lesen zulassen.',
      'Frage: „Was hat euch besonders berührt?"'
    ]
  },
  // F6 – Vorentlastung
  {
    title: 'Vorentlastung vor dem Video',
    points: [
      'Schlüsselwörter unten laut vorlesen und kurz erklären.',
      'Beobachtungsaufgabe gemeinsam durchlesen.',
      'Erst bei Ruhe in der Klasse das Video starten.'
    ]
  },
  // F7 – Video
  {
    title: 'Video ansehen',
    points: [
      'Beobachtungsfrage laut vorlesen.',
      'Begriffe kurz klären – Karten können umgedrückt werden.',
      'Film abspielen (Klick auf das Vorschaubild).',
      'Antwort danach gemeinsam sammeln.'
    ]
  },
  // F8 – Gespräch nach Video
  {
    title: 'Gespräch nach dem Video',
    points: [
      'Sanfte Einstiegsrunde – kein inhaltlicher Druck.',
      'Ein einzelnes Wort reicht als Antwort.',
      'Stille nach dem Video ist normal und wertvoll.'
    ]
  },
  // F9 – Arbeitsblatt 1
  {
    title: 'Arbeitsblatt 1',
    points: [
      'Arbeitsblatt austeilen.',
      'Ca. 10–15 Minuten Bearbeitungszeit.',
      'Anschließend kurz im Plenum besprechen.'
    ]
  },
  // F10 – Übergang
  {
    title: 'Übergang zu Ausgrenzung heute',
    points: [
      'Bewusst abstrakt – keine Selbstoffenbarung nötig.',
      'Antworten kurz an der Tafel sammeln.',
      'Gute Brücke zu den Begriffen auf der nächsten Folie.'
    ]
  },
  // F10 – Ausgrenzung heute
  {
    title: 'Ausgrenzung heute',
    points: [
      'Vorsicht: sehr persönliche Frage für manche Schüler.',
      'Bei emotionalen Reaktionen: kurz pausieren, ruhig bleiben.',
      'Alternative: Beispiele aus Filmen oder Social Media.'
    ]
  },
  // F11 – Wichtige Begriffe
  {
    title: 'Wichtige Begriffe',
    points: [
      'Karten anklicken, um die Definition aufzudecken.',
      'Schüler können die Karten selbst umdrehen.',
      'Definitionen anschließend gemeinsam besprechen.'
    ]
  },
  // F12 – Alltagssituationen
  {
    title: 'Alltagssituationen',
    points: [
      'Kurze Reaktionsrunde: Handzeichen oder Nicken reicht.',
      'Auch „Ja, aber…" zulassen – nicht übersimplifizieren.',
      'Eigene Beispiele der Schüler ausdrücklich einbeziehen.'
    ]
  },
  // F13 – Klassendiskussion
  {
    title: 'Klassendiskussion',
    points: [
      'Konkrete Vorschläge einfordern und an der Tafel sichern.',
      'Keine richtigen oder falschen Antworten.',
      'Lösungsorientiert bleiben – was können wir tun?'
    ]
  },
  // F14 – Arbeitsblatt
  {
    title: 'Arbeitsblatt',
    points: [
      'Gruppen einteilen: Opfer – Täter – Beobachter.',
      'Klare Zeitansage: ca. 10–15 Minuten.',
      'Ergebnisse danach kurz im Plenum vorstellen.'
    ]
  },
  // F15 – Abschluss
  {
    title: 'Abschlussgespräch',
    points: [
      'Situation gemeinsam lesen.',
      '3–5 Schüler antworten lassen.',
      'Danach mit dem Zitat abschließen.'
    ]
  }
];

const MODERATION_DEFAULT = {
  title: 'Hinweise',
  points: [
    'Folie gemeinsam betrachten.',
    'Bei Bedarf kurz erklären.',
    'Dann weiter zur nächsten Folie.'
  ]
};
