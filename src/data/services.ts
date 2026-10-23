export type Locale = 'ar' | 'en';
export type ServiceCategory = 'all' | 'apparel' | 'prints' | 'gifts' | 'accessories';

export type Service = {
  id: string;
  category: Exclude<ServiceCategory, 'all'>;
  name: Record<Locale, string>;
  short: Record<Locale, string>;
  image: string;
  icon: string;
  details: Record<Locale, string>;
};

export const categories: { id: ServiceCategory; label: Record<Locale, string> }[] = [
  { id: 'all', label: { ar: 'كل المنتجات', en: 'All products' } },
  { id: 'apparel', label: { ar: 'ملابس', en: 'Apparel' } },
  { id: 'prints', label: { ar: 'طباعة وملصقات', en: 'Prints & labels' } },
  { id: 'gifts', label: { ar: 'أكواب وهدايا', en: 'Mugs & gifts' } },
  { id: 'accessories', label: { ar: 'إكسسوارات', en: 'Accessories' } },
];

export const services: Service[] = [
  { id: 'tee', category: 'apparel', name: { ar: 'تيشيرتات مطبوعة', en: 'Printed T-shirts' }, short: { ar: 'قطعة أساسية بطابعك الخاص.', en: 'An everyday essential, your way.' }, image: '/manus-storage/yuzersef-tee_b65ea25f.png', icon: 'shirt', details: { ar: 'اختر اللون والمقاس ومكان الطباعة، وارسل تصميمك أو اطلب المساعدة.', en: 'Choose a color, size, and print position. Bring your design or ask us to help.' } },
  { id: 'hoodie', category: 'apparel', name: { ar: 'هوديز وسويت شيرت', en: 'Hoodies & sweatshirts' }, short: { ar: 'دفء وراحة مع تصميمك.', en: 'Comfort, warmth, and your design.' }, image: '/manus-storage/yuzersef-hoodie_eb65d481.png', icon: 'shirt', details: { ar: 'تخصيص الألوان والمقاسات وموضع الطباعة حسب فكرتك.', en: 'Customize colors, sizing, and placement to fit your idea.' } },
  { id: 'cap', category: 'apparel', name: { ar: 'كابات', en: 'Caps' }, short: { ar: 'تفصيلة صغيرة تفرق.', en: 'A small detail that stands out.' }, image: '/manus-storage/yuzersef-caps_935aa42c.png', icon: 'cap', details: { ar: 'أضف شعارك أو رسمة بسيطة بطباعة مناسبة للخامة.', en: 'Add a logo or a small graphic with a finish suited to the fabric.' } },
  { id: 'stickers', category: 'prints', name: { ar: 'ستيكرز وليبلز', en: 'Stickers & labels' }, short: { ar: 'للتغليف والمشاريع واللمسات الشخصية.', en: 'For packaging, small businesses, and personal touches.' }, image: '/manus-storage/yuzersef-stickers_dd21b883.png', icon: 'sparkles', details: { ar: 'حدّد المقاس والكمية والشكل، وأرفق التصميم الذي تريده.', en: 'Choose the size, quantity, and shape, then attach your artwork.' } },
  { id: 'mug', category: 'gifts', name: { ar: 'أكواب مخصصة', en: 'Custom mugs' }, short: { ar: 'هدية يومية تحمل لمستك.', en: 'A daily favorite with a personal touch.' }, image: '/manus-storage/yuzersef-gifts_72ab1458.png', icon: 'cup', details: { ar: 'أرسل صورة أو عبارة أو شعارًا ليظهر على كوبك.', en: 'Send a photo, message, or logo to make your mug yours.' } },
  { id: 'gift', category: 'gifts', name: { ar: 'هدايا دعائية', en: 'Promotional gifts' }, short: { ar: 'أفكار مخصصة للمناسبات والفرق.', en: 'Custom ideas for events and teams.' }, image: '/manus-storage/yuzersef-gifts_72ab1458.png', icon: 'gift', details: { ar: 'اطلب هدايا تحمل هوية مشروعك أو مناسبتك.', en: 'Create gifts that carry your brand or event identity.' } },
  { id: 'case', category: 'accessories', name: { ar: 'أغطية هواتف', en: 'Phone cases' }, short: { ar: 'تصميم يرافقك كل يوم.', en: 'A design that goes everywhere with you.' }, image: '/manus-storage/yuzersef-case_4bc9b82c.png', icon: 'phone', details: { ar: 'اختر شكل التصميم وأرسل نوع هاتفك قبل بدء الطلب.', en: 'Choose a look and include your phone model with the request.' } },
  { id: 'leather', category: 'accessories', name: { ar: 'إكسسوارات جلدية', en: 'Leather accessories' }, short: { ar: 'هدايا صغيرة بطابع أنيق.', en: 'Small gifts with a refined finish.' }, image: '/manus-storage/yuzersef-gifts_72ab1458.png', icon: 'tag', details: { ar: 'تخصيص أنيق على الإكسسوارات الجلدية حسب المتاح.', en: 'Add a subtle personal detail to selected leather accessories.' } },
];

export const galleryItems = [
  { id: 'g1', title: { ar: 'هوية يوزرسيف على المنتجات', en: 'Yuzersef branding on products' }, category: 'apparel' as const, image: '/assets/yuzersef-facebook-cover.jpg', label: { ar: 'يوزرسيف', en: 'Yuzersef' } },
  { id: 'g2', title: { ar: 'ألوان وملمس القماش', en: 'Color & fabric' }, category: 'apparel' as const, image: '/manus-storage/yuzersef-tee_b65ea25f.png', label: { ar: 'ملابس', en: 'Apparel' } },
  { id: 'g3', title: { ar: 'هدايا يومية بلمسة شخصية', en: 'Everyday gifts, made personal' }, category: 'gifts' as const, image: '/manus-storage/yuzersef-gifts_72ab1458.png', label: { ar: 'هدايا', en: 'Gifts' } },
  { id: 'g4', title: { ar: 'طباعة تناسب فكرتك', en: 'Prints made for your idea' }, category: 'prints' as const, image: '/manus-storage/yuzersef-stickers_dd21b883.png', label: { ar: 'طباعة', en: 'Prints' } },
  { id: 'g5', title: { ar: 'تفاصيل تُصنع لك', en: 'Details made for you' }, category: 'accessories' as const, image: '/manus-storage/yuzersef-case_4bc9b82c.png', label: { ar: 'إكسسوارات', en: 'Accessories' } },
  { id: 'g6', title: { ar: 'خامات بسيطة، فكرة مختلفة', en: 'Simple materials, a fresh idea' }, category: 'gifts' as const, image: '/manus-storage/yuzersef-caps_935aa42c.png', label: { ar: 'هدايا', en: 'Gifts' } },
];
