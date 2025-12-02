import { Combo, Review, FAQItem } from './types';
import { Flame, Clock, Truck, ShieldCheck } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "Cứu Đói Đêm Khuya - Miến Chua Cay Akuan Chuẩn Vị Tứ Xuyên",
  subHeadline: "Sợi miến dai sần sật, vị chua cay tê tái, không chiên qua dầu. Chỉ 5 phút là có ăn ngay!",
  cta: "Săn Deal Hời Ngay 🔥"
};

export const PAIN_POINTS_CONTENT = {
  problem: {
    title: "12h đêm đói bụng?",
    desc: "Mì tôm thì nóng, chờ ship thì lâu? Bụng réo ầm ĩ mà không biết ăn gì cho đã miệng?"
  },
  solution: {
    title: "Akuan cân tất!",
    desc: "Nhanh - Gọn - Ngon hơn đi quán."
  },
  features: [
    { title: "Không Chiên", desc: "Sợi miến khoai lang healthy", icon: "🍠" },
    { title: "5 Phút", desc: "Chế nước sôi ăn liền", icon: "⚡" },
    { title: "Vị Tứ Xuyên", desc: "Cay tê chuẩn bản gốc", icon: "🌶️" }
  ]
};

export const STAR_PRODUCTS = [
  {
    name: "Miến Chua Cay Trùng Khánh",
    desc: "Best Seller! Sợi miến làm từ tinh bột khoai lang hồng dai sần sật. Nước súp chua cay đậm đà kích thích vị giác cực mạnh.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    tag: "🔥 Bán chạy số 1"
  },
  {
    name: "Mỳ Ly Gà Cay Khoai Tây",
    desc: "Tiện lợi đỉnh cao. Sốt gà hầm đậm vị kết hợp cùng khoai tây nghiền bùi béo. Đảm bảo ăn là dính!",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800",
    tag: "⭐ Mới ra mắt"
  }
];

export const COMBOS: Combo[] = [
  {
    id: 'combo-1',
    name: 'Combo Ăn Thử',
    description: 'Dành cho người mới bắt đầu (Newbie Choice).',
    items: ['2x Mỳ Ly Gà Cay Khoai Tây'],
    originalPrice: 108000,
    salePrice: 59000,
    savings: '45%',
    tag: 'Newbie Choice',
    image: 'https://images.unsplash.com/photo-1594042217036-68c34f40bb71?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'combo-2',
    name: 'Combo Trùm Cuối',
    description: 'Best Seller! Tích trữ ăn dần siêu hời.',
    items: ['5x Gói Miến Chua Cay', '1x Mỳ Ly Gà Cay'],
    originalPrice: 285000,
    salePrice: 132000,
    savings: '53%',
    tag: 'Most Popular 🔥',
    image: 'https://images.unsplash.com/photo-1626804475297-411dbe631260?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'combo-3',
    name: 'Combo Đổi Vị',
    description: 'Team thích ăn khô trộn đậm đà.',
    items: ['4x Phở Trộn Tê Cay', '1x Mỳ Ly Gà Cay'],
    originalPrice: 250000,
    salePrice: 118000,
    savings: '50%',
    tag: 'Must Try',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'Thảo Nhi',
    platform: 'TikTok',
    content: 'Vị cay tê lưỡi, sợi miến dai không bị nát. 10 điểm! Ăn đêm siêu dính luôn á.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    rating: 5
  },
  {
    id: 'r2',
    user: 'Minh Tuấn',
    platform: 'Facebook',
    content: 'Cứu cánh cho mấy đêm chạy deadline. Nước súp đỉnh cao, chua chua cay cay tỉnh cả ngủ.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    rating: 5
  },
  {
    id: 'r3',
    user: 'Lan Anh',
    platform: 'Shopee',
    content: 'Giao hàng siêu nhanh, đóng gói kỹ. Mua combo hời hơn hẳn mua lẻ nha mn.',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Cay quá không shop ơi?",
    answer: "Yên tâm nha! Có gói gia vị ớt riêng, bạn tự điều chỉnh độ cay tùy thích. Không ăn cay được thì cho ít thui nè."
  },
  {
    question: "Hạn sử dụng thế nào?",
    answer: "Hàng mới sản xuất liên tục, date xa 10-12 tháng. Thoải mái mua tích trữ nha."
  },
  {
    question: "Ship hàng có nhanh không?",
    answer: "Shop đóng gói và giao cho đơn vị vận chuyển trong ngày. Nội thành 1-2 ngày, ngoại tỉnh 2-3 ngày là có ăn."
  }
];