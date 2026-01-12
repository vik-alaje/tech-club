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

export type ChatRole = 'user' | 'model';

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
