
export enum AppView {
  WORK = 'work',
  BOOK = 'book',
  CHAT = 'chat',
  PROFILE = 'profile'
}

export enum PortfolioTab {
  PORTFOLIO = 'portfolio',
  SERVICES = 'services',
  TESTIMONIALS = 'testimonials'
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
  category: string;
}
