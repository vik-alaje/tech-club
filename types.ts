export type Language = 'en' | 'fr';

export interface TeamMember {
  name: string;
  role: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  duration: string;
  title: string;
  description: string;
  details?: string[];
  icon: 'rocket' | 'code' | 'users' | 'zap';
}

export interface ShowcaseRule {
  title: string;
  description: string;
  example?: string;
}

export interface EventContent {
  eventDetails: {
    title: string;
    subtitle: string;
    mission: string;
    location: string;
    date: string;
    time: string;
  };
  agenda: AgendaItem[];
  showcaseRules: ShowcaseRule[];
  ui: {
    heroTitleLine1: string;
    heroTitleLine2: string;
    pressStart: string;
    enterName: string;
    joinClub: string;
    viewGoals: string;
    ready: string;
    credits: string;
    missionObj: string;
    newQuest: string;
    dateLabel: string;
    timeLabel: string;
    locationLabel: string;
    questLog: string;
    timeframe: string;
    stages: string;
    tutorial: string;
    systemMessage: string;
    legendaryItem: string;
    aiBuilder: string;
    aiBuilderDesc: string;
    acceleration: string;
    welcomeUser: string;
    levelProgress: string;
    level: string;
    footerText1: string;
    footerText2: string;
    joinUrl: string;
    registerUrl: string;
  };
}

export type ChatRole = 'user' | 'model';

export interface ChatMessage {
  role: ChatRole;
  text: string;
}