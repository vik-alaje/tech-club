import { EventContent } from './types';

export const CONTENT: Record<'en' | 'fr', EventContent> = {
  en: {
    eventDetails: {
      title: "Aivancity Tech Club",
      subtitle: "Building a Builder's Community",
      mission: "Creating a community where everyone is really interested in building.",
      location: "NEXUS",
      date: "Tuesday, 20th",
      time: "5:30 PM - 7:00 PM"
    },
    agenda: [
      {
        id: '1',
        time: '5:30 PM - 5:50 PM',
        duration: '20 Min',
        title: 'Welcome & Learning',
        description: 'Joy of learning as a community.',
        icon: 'rocket',
        details: [
          "Speaker: Chris Tahan",
          "The Welcome Address",
          "Theme: Joy of Learning"
        ]
      },
      {
        id: '2',
        time: '5:50 PM - 6:35 PM',
        duration: '45 Min',
        title: 'AI Python Teacher',
        description: 'Building an AI teacher based on data scraped off the web.',
        icon: 'code',
        details: [
          "Speaker: Louis Leclere",
          "Tech: Web Scraping & AI",
          "Project: Automated Teaching"
        ]
      },
      {
        id: '3',
        time: '6:35 PM - 7:00 PM',
        duration: '25 Min',
        title: 'Local AI Memory',
        description: 'A local AI assistant with retentive memory using SQLite.',
        icon: 'zap',
        details: [
          "Speaker: Hugo KINGKEOMANIVONG",
          "Tech: SQLite Integration",
          "Focus: Local & Retentive"
        ]
      }
    ],
    showcaseRules: [
      {
        title: "Demo First",
        description: "Start talking about what you're building immediately. Don't wait.",
        example: "Even if it's not finished, show us the code or the concept right away."
      },
      {
        title: "The Stack",
        description: "Briefly explain the tools used to build it.",
        example: "e.g., 'I used React, Tailwind, and Gemini API'"
      },
      {
        title: "The Pivot",
        description: "State one struggle or one collaboration need.",
        example: "Looking for a backend engineer? Stuck on CSS?"
      }
    ],
    ui: {
      heroTitleLine1: "TECH CLUB",
      heroTitleLine2: "GATHERING",
      pressStart: "PRESS START",
      enterName: "ENTER YOUR NAME",
      joinClub: "JOIN CLUB",
      viewGoals: "REGISTER",
      ready: "READY FOR THE 20TH?",
      credits: "BUILT WITH REACT & TAILWIND",
      missionObj: ">> MISSION OBJECTIVE: Connect with each other while building projects you care about.",
      newQuest: "NEW QUEST AVAILABLE",
      dateLabel: "DATE",
      timeLabel: "TIME",
      locationLabel: "LOCATION",
      questLog: "EVENT AGENDA",
      timeframe: "TIMEFRAME: 1.5 HOURS",
      stages: "STAGES",
      tutorial: "HOW WILL PRESENTATIONS GO?",
      systemMessage: "[SYSTEM MESSAGE]: Time slots vary by project depth. Respect the timer.",
      legendaryItem: "BONUS LOOT",
      aiBuilder: "AI POINTS BOOSTER",
      aiBuilderDesc: "Students who present their projects will receive additional AI Points for contributing to the community peer learning.",
      acceleration: "REWARD: AI POINTS++",
      welcomeUser: "WELCOME",
      levelProgress: "LEVEL PROGRESS",
      level: "LEVEL",
      footerText1: "We're excited to have you join us.",
      footerText2: "Click here to fill the form",
      joinUrl: "https://forms.office.com/e/HCjqi3C7uy",
      registerUrl: "https://forms.office.com/e/HQTXSNfuLp?origin=lprLink"
    }
  },
  fr: {
    eventDetails: {
      title: "Club Tech Aivancity",
      subtitle: "Construire une communauté de créateurs",
      mission: "Créer une communauté où tout le monde s'intéresse vraiment à la création.",
      location: "NEXUS",
      date: "Mardi 20",
      time: "17h30 - 19h00"
    },
    agenda: [
      {
        id: '1',
        time: '17h30 - 17h50',
        duration: '20 Min',
        title: 'Bienvenue & Apprentissage',
        description: "La joie d'apprendre en communauté.",
        icon: 'rocket',
        details: [
          "Speaker : Chris Tahan",
          "Le mot de bienvenue",
          "Thème : La joie d'apprendre"
        ]
      },
      {
        id: '2',
        time: '17h50 - 18h35',
        duration: '45 Min',
        title: 'Professeur Python IA',
        description: "Création d'un prof IA basé sur des données web scrappées.",
        icon: 'code',
        details: [
          "Speaker : Louis Leclere",
          "Tech : Web Scraping & IA",
          "Projet : Enseignement Automatisé"
        ]
      },
      {
        id: '3',
        time: '18h35 - 19h00',
        duration: '25 Min',
        title: 'Mémoire IA Locale',
        description: "Assistant IA local avec mémoire rétentive via SQLite.",
        icon: 'zap',
        details: [
          "Speaker : Hugo KINGKEOMANIVONG",
          "Tech : Intégration SQLite",
          "Focus : Local & Rétentif"
        ]
      }
    ],
    showcaseRules: [
      {
        title: "Démo d'abord",
        description: "Commencez à parler de votre projet immédiatement. N'attendez pas.",
        example: "Même si ce n'est pas fini, montrez-nous le code ou le concept tout de suite."
      },
      {
        title: "La Stack",
        description: "Expliquez brièvement les outils utilisés.",
        example: "ex: 'J'ai utilisé React, Tailwind et l'API Gemini'"
      },
      {
        title: "Le Pivot",
        description: "Mentionnez une difficulté ou un besoin de collaboration.",
        example: "Besoin d'un dev backend ? Bloqué sur le CSS ?"
      }
    ],
    ui: {
      heroTitleLine1: "CLUB TECH",
      heroTitleLine2: "RENCONTRE",
      pressStart: "COMMENCER",
      enterName: "VOTRE NOM",
      joinClub: "REJOINDRE",
      viewGoals: "S'INSCRIRE",
      ready: "PRÊT POUR LE 20 ?",
      credits: "FAIT AVEC REACT & TAILWIND",
      missionObj: ">> OBJECTIF : Connectez-vous en créant des projets qui vous tiennent à cœur.",
      newQuest: "NOUVELLE QUÊTE",
      dateLabel: "DATE",
      timeLabel: "HEURE",
      locationLabel: "LIEU",
      questLog: "AGENDA DE L'ÉVÉNEMENT",
      timeframe: "DURÉE : 1H30",
      stages: "ÉTAPES",
      tutorial: "DÉROULEMENT DES PRÉSENTATIONS ?",
      systemMessage: "[MESSAGE SYSTÈME] : Les créneaux varient selon le projet. Respectez le minuteur.",
      legendaryItem: "BUTIN BONUS",
      aiBuilder: "BOOSTER POINTS IA",
      aiBuilderDesc: "Les étudiants qui présentent leurs projets recevront des Points IA supplémentaires pour leur contribution à l'apprentissage collectif.",
      acceleration: "RÉCOMPENSE : POINTS IA++",
      welcomeUser: "BIENVENUE",
      levelProgress: "PROGRESSION",
      level: "NIVEAU",
      footerText1: "Nous sommes ravis de vous accueillir.",
      footerText2: "Cliquez ici pour remplir le formulaire",
      joinUrl: "https://forms.office.com/e/QhTusbmEuB?origin=lprLink",
      registerUrl: "https://forms.office.com/r/QjZYKi5ANu?origin=lprLink"
    }
  }
};