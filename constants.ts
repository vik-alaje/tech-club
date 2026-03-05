import { EventContent } from './types';

export const CONTENT: Record<'en' | 'fr', EventContent> = {
  en: {
    eventDetails: {
      title: "Aivancity Tech Club",
      subtitle: "Building a Builder's Community",
      mission: "Creating a community where everyone is really interested in building.",
      location: "CORTEX",
      date: "March 5",
      time: "2:15 PM - 4:00 PM"
    },
    agenda: [
      {
        id: '1',
        time: '2:15 PM - 3:00 PM',
        duration: '45 Min',
        title: 'Building an agent with Google ADK',
        description: 'Start learning about agents by building an agent that plays a text-based game.',
        icon: 'code',
        details: [
          "Speaker: Chris Tahan",
          "Tech: Google ADK",
          "Project: Text-based Game Agent"
        ]
      },
      {
        id: '2',
        time: '3:00 PM - 3:15 PM',
        duration: '15 Min',
        title: 'Google Developer Groups & Club Communication',
        description: 'Updates on GDG and club communication channels.',
        icon: 'users',
        details: [
          "Topic: Community Updates",
          "Focus: Communication Channels",
          "Network: Google Developer Groups"
        ]
      },
      {
        id: '3',
        time: '3:15 PM - 3:30 PM',
        duration: '15 Min',
        title: 'Open Source Contributions',
        description: 'Learn how to position yourself as a competitive candidate using GSOC and other programs.',
        icon: 'globe',
        details: [
          "Topic: GSOC & Open Source",
          "Goal: Internship Preparation",
          "Strategy: Competitive Positioning"
        ]
      },
      {
        id: '4',
        time: '3:30 PM - 3:45 PM',
        duration: '15 Min',
        title: 'Conclusion & Leadership',
        description: 'We’re seeking students to take up leadership positions. If you’re ready to build and grow Aivancity’s first tech club, welcome.',
        icon: 'star',
        details: [
          "Call to Action: Leadership",
          "Vision: Everyone is a Leader",
          "Goal: Grow the Tech Club"
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
      ready: "READY FOR MARCH 5?",
      credits: "BUILT WITH REACT & TAILWIND",
      missionObj: ">> MISSION OBJECTIVE: Connect with each other while building projects you care about.",
      newQuest: "NEW QUEST AVAILABLE",
      dateLabel: "DATE",
      timeLabel: "TIME",
      locationLabel: "LOCATION",
      questLog: "EVENT AGENDA",
      timeframe: "TIMEFRAME: 1.75 HOURS",
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
      location: "CORTEX",
      date: "5 Mars",
      time: "14h15 - 16h00"
    },
    agenda: [
      {
        id: '1',
        time: '14h15 - 15h00',
        duration: '45 Min',
        title: 'Créer un agent avec Google ADK',
        description: "Apprenez à créer un agent qui joue à un jeu textuel.",
        icon: 'code',
        details: [
          "Speaker : Chris Tahan",
          "Tech : Google ADK",
          "Projet : Agent de jeu textuel"
        ]
      },
      {
        id: '2',
        time: '15h00 - 15h15',
        duration: '15 Min',
        title: 'Google Developer Groups & Communication',
        description: "Mises à jour sur le GDG et les canaux de communication du club.",
        icon: 'users',
        details: [
          "Sujet : Actualités de la communauté",
          "Focus : Canaux de communication",
          "Réseau : Google Developer Groups"
        ]
      },
      {
        id: '3',
        time: '15h15 - 15h30',
        duration: '15 Min',
        title: 'Contributions Open Source',
        description: "Positionnez-vous comme candidat compétitif pour les stages via le GSOC.",
        icon: 'globe',
        details: [
          "Sujet : GSOC & Open Source",
          "Objectif : Préparation aux stages",
          "Stratégie : Positionnement compétitif"
        ]
      },
      {
        id: '4',
        time: '15h30 - 15h45',
        duration: '15 Min',
        title: 'Conclusion & Leadership',
        description: "Nous cherchons des étudiants pour des postes de leadership. Tout le monde est un leader.",
        icon: 'star',
        details: [
          "Appel à l'action : Leadership",
          "Vision : Tout le monde est un leader",
          "Objectif : Faire grandir le Tech Club"
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
      ready: "PRÊT POUR LE 5 MARS ?",
      credits: "FAIT AVEC REACT & TAILWIND",
      missionObj: ">> OBJECTIF : Connectez-vous en créant des projets qui vous tiennent à cœur.",
      newQuest: "NOUVELLE QUÊTE",
      dateLabel: "DATE",
      timeLabel: "HEURE",
      locationLabel: "LIEU",
      questLog: "AGENDA DE L'ÉVÉNEMENT",
      timeframe: "DURÉE : 1H45",
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