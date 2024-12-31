export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string; // matches category id
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
  locations?: string[]; // Available showroom locations
};

// Sample data structure
export const productCategories: ProductCategory[] = [
  {
    id: 'sanitary-ware',
    title: 'Sanitary Ware',
    description: 'High-quality toilets, basins, and bidets from premium manufacturers',
    image: '/images/aesthetic-bathroom.jpg',
    slug: 'sanitary-ware'
  },
  {
    id: 'bathroom-fittings',
    title: 'Bathroom Fittings and Fixtures',
    description: 'Premium taps, mixers, and bathroom accessories',
    image: '/images/bathroom-rub.jpg',
    slug: 'bathroom-fittings'
  },
  {
    id: 'bathtubs-showers',
    title: 'Bathtubs and Shower Enclosures',
    description: 'Luxury bathtubs and elegant shower enclosures',
    image: '/images/small-bathroom-with-modern-style-ai-generated.jpg',
    slug: 'bathtubs-showers'
  }
];

// Sample products data
export const products: Product[] = [
  {
    id: 'premium-shower-set',
    name: 'Premium Shower Set',
    description: 'Luxurious shower set with rainfall head and handheld shower',
    image: '/images/bathroom-fittings/shower-set.jpg',
    category: 'bathtubs-showers',
    features: [
      'Rainfall shower head',
      'Handheld shower',
      'Temperature control',
      'Multiple spray patterns'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Finish': 'Chrome',
      'Installation': 'Wall-mounted'
    },
    locations: [
      'Main Showroom - Colombo 03',
      'Experience Center - Kandy'
    ]
  },
  {
    id: 'modern-toilet',
    name: 'Modern Wall-Hung Toilet',
    description: 'Contemporary wall-hung toilet with water-efficient flush system',
    image: '/images/bathroom-fittings/toilet.jpg',
    category: 'sanitary-ware',
    features: [
      'Wall-hung design',
      'Dual flush system',
      'Water-efficient',
      'Easy to clean',
      'Rimless technology'
    ],
    specifications: {
      'Material': 'Ceramic',
      'Color': 'White',
      'Installation': 'Wall-mounted',
      'Flush Type': 'Dual Flush',
      'Water Usage': '4.5/3L'
    },
    locations: [
      'Main Showroom - Colombo 03',
      'Experience Center - Kandy'
    ]
  },
  {
    id: 'wall-mounted-basin',
    name: 'Wall-Mounted Basin',
    description: 'Modern wall-mounted basin with minimalist design',
    image: '/images/sanitary-ware/basin.jpg',
    category: 'sanitary-ware',
    features: [
      'Space-saving design',
      'Easy to clean',
      'Overflow protection',
      'Modern aesthetics'
    ],
    specifications: {
      'Material': 'Ceramic',
      'Color': 'White',
      'Installation': 'Wall-mounted'
    },
    locations: [
      'Main Showroom - Colombo 03',
      'Experience Center - Kandy'
    ]
  },
  {
    id: 'modern-towel-rail',
    name: 'Modern Towel Rail',
    description: 'Contemporary towel rail with sleek design and durable construction',
    image: '/images/bathroom-fittings/towel-rail.jpg',
    category: 'bathroom-fittings',
    features: [
      'Modern design',
      'Durable construction',
      'Easy installation',
      'Premium finish'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Finish': 'Brushed Nickel',
      'Installation': 'Wall-mounted',
      'Length': '600mm'
    },
    locations: [
      'Main Showroom - Colombo 03',
      'Experience Center - Kandy'
    ]
  }
]; 