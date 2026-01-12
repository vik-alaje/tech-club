import { AgendaItem, ShowcaseRule, TeamMember } from './types';

export const EVENT_DETAILS = {
  title: "Tech Club Launch",
  subtitle: "Building a Builder's Community",
  mission: "Classes teach theory. We build portfolios.",
  location: "University Main Hall / Discord",
  date: "Upcoming Friday"
};

export const TEAM: TeamMember[] = [
  { name: "Chris", role: "Co-Founder / Presenter" },
  { name: "Victoria", role: "Co-Founder" },
  { name: "Founding Members", role: "Core Team" }
];

export const AGENDA: AgendaItem[] = [
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
    description: 'Get involved and start building.',
    icon: 'users',
    details: [
      "Join Discord / WhatsApp",
      "Upcoming Coding Sprints",
      "Networking Mixer"
    ]
  }
];

export const SHOWCASE_RULES: ShowcaseRule[] = [
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
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for the University Tech Club Launch Event.
Your goal is to explain the event details to interested students.

Event Plan:
1. Kickoff (10m): Intro to "Learning by Doing".
2. Project Showcase (40m): 5 presenters, 8 mins each.
3. Wrap-up (10m): Networking and Discord invites.

Key details:
- Founders: Chris, Victoria.
- Featured Project: Chris will demo an Adaptive IDE that suggests shortcuts.
- Presentation Format: Demo First -> Tech Stack -> The Pivot (Struggle/Help needed).
- Vibe: Informal, practical, portfolio-focused.

Keep answers short, enthusiastic, and encourage them to attend or present.
`;
