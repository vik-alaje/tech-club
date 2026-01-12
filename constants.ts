import { EventContent } from './types';

export const CONTENT: Record<'en' | 'fr', EventContent> = {
  en: {
    eventDetails: {
      title: "Aivancity Tech Club",
      subtitle: "Building a Builder's Community",
      mission: "Creating a community where everyone is really interested in building.",
      location: "Pending Confirmation",
      date: "Thursday, 15th"
    },
    agenda: [
      {
        id: '1',
        time: '00:00 - 00:10',
        duration: '10 Min',
        title: 'The Kickoff',
        description: 'Introduction to the mission and the team.',
        icon: 'rocket',
        details: [
          "Mission: Learning by Doing",
          "Problem: Theory vs. Practice",
          "Team Intros: Chris, Victoria"
        ]
      },
      {
        id: '2',
        time: '00:10 - 00:50',
        duration: '40 Min',
        title: 'Project Showcase',
        description: '5 Lightning Talks from builders on campus.',
        icon: 'code',
        details: [
          "5 Presenters x 8 Minutes",
          "Live Demos (No Slides)",
          "Tech Stack Reveal",
          "The 'Pivot' Challenge"
        ]
      },
      {
        id: '3',
        time: '00:50 - 01:00',
        duration: '10 Min',
        title: 'The Wrap-up',
        description: 'Future plans and networking.',
        icon: 'users',
        details: [
          "Upcoming Meeting Details",
          "Networking Mixer"
        ]
      }
    ],
    showcaseRules: [
      {
        title: "Demo First",
        description: "No long intros. Show the project running in the first 60 seconds.",
        example: "Don't tell us what it does, show us."
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
      heroTitleLine2: "LAUNCH EVENT",
      pressStart: "PRESS START",
      enterName: "ENTER YOUR NAME",
      joinClub: "JOIN CLUB",
      viewGoals: "VIEW GOALS",
      ready: "READY?",
      credits: "BUILT WITH REACT & TAILWIND",
      missionObj: ">> MISSION OBJECTIVE: Build Portfolios. Avoid Theory.",
      newQuest: "NEW QUEST AVAILABLE",
      dateLabel: "DATE",
      locationLabel: "LOCATION",
      questLog: "QUEST LOG",
      timeframe: "TIMEFRAME: 1 HOUR",
      stages: "STAGES",
      tutorial: "TUTORIAL",
      legendaryItem: "LEGENDARY ITEM",
      aiBuilder: "AI APP BUILDER",
      aiBuilderDesc: "Unlocks Rapid Prototyping ability. Build applications quickly using natural language. No boilerplate required.",
      acceleration: "ACCELERATION: 1000%",
      welcomeUser: "WELCOME",
      levelProgress: "LEVEL PROGRESS",
      level: "LEVEL"
    }
  },
  fr: {
    eventDetails: {
      title: "Club Tech Aivancity",
      subtitle: "Construire une communauté de créateurs",
      mission: "Créer une communauté où tout le monde s'intéresse vraiment à la création.",
      location: "En attente de confirmation",
      date: "Jeudi 15"
    },
    agenda: [
      {
        id: '1',
        time: '00:00 - 00:10',
        duration: '10 Min',
        title: 'Le Lancement',
        description: "Introduction à la mission et à l'équipe.",
        icon: 'rocket',
        details: [
          "Mission : Apprendre par la pratique",
          "Problème : Théorie vs Pratique",
          "Équipe : Chris, Victoria"
        ]
      },
      {
        id: '2',
        time: '00:10 - 00:50',
        duration: '40 Min',
        title: 'Démos de Projets',
        description: '5 présentations rapides par des étudiants.',
        icon: 'code',
        details: [
          "5 Présentateurs x 8 Minutes",
          "Démos en direct (Pas de slides)",
          "Stack Technique",
          "Le défi 'Pivot'"
        ]
      },
      {
        id: '3',
        time: '00:50 - 01:00',
        duration: '10 Min',
        title: 'Conclusion',
        description: 'Projets futurs et networking.',
        icon: 'users',
        details: [
          "Détails de la prochaine réunion",
          "Temps d'échange"
        ]
      }
    ],
    showcaseRules: [
      {
        title: "Démo d'abord",
        description: "Pas de longues intros. Montrez le projet en action dès la première minute.",
        example: "Ne nous dites pas ce que ça fait, montrez-le."
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
      heroTitleLine2: "LANCEMENT",
      pressStart: "COMMENCER",
      enterName: "VOTRE NOM",
      joinClub: "REJOINDRE",
      viewGoals: "VOIR OBJECTIFS",
      ready: "PRÊT ?",
      credits: "FAIT AVEC REACT & TAILWIND",
      missionObj: ">> OBJECTIF : Créer des Portfolios. Éviter la Théorie.",
      newQuest: "NOUVELLE QUÊTE",
      dateLabel: "DATE",
      locationLabel: "LIEU",
      questLog: "JOURNAL DE QUÊTE",
      timeframe: "DURÉE : 1 HEURE",
      stages: "ÉTAPES",
      tutorial: "TUTORIEL",
      legendaryItem: "OBJET LÉGENDAIRE",
      aiBuilder: "GÉNÉRATEUR D'APP IA",
      aiBuilderDesc: "Débloque la capacité Prototypage Rapide. Créez des applis rapidement avec le langage naturel.",
      acceleration: "ACCÉLÉRATION: 1000%",
      welcomeUser: "BIENVENUE",
      levelProgress: "PROGRESSION",
      level: "NIVEAU"
    }
  }
};