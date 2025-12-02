export interface Combo {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  savings: string;
  items: string[];
  tag?: string;
  image: string;
}

export interface Review {
  id: string;
  user: string;
  platform: 'TikTok' | 'Shopee' | 'Facebook';
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}