export type ProductCategory =
  | 'Gimbal Payloads'
  | 'EO/IR Sensors'
  | 'AI Vision Systems'
  | 'Edge Processors'
  | 'Accessories & Mounts';

export type ProductStatus = 'In Stock' | 'Pre-order' | 'Made to Order' | 'Coming Soon';

export interface InfoBlockParagraph {
  type: 'paragraph';
  title?: string;
  content: string;
}

export interface InfoBlockImage {
  type: 'image';
  url: string;
  caption?: string;
  alt?: string;
}

export interface InfoBlockList {
  type: 'list';
  title?: string;
  items: string[];
}

export interface InfoBlockQuote {
  type: 'quote';
  quote: string;
  author?: string;
  role?: string;
}

export type ProductInfoBlock =
  | InfoBlockParagraph
  | InfoBlockImage
  | InfoBlockList
  | InfoBlockQuote;

export interface QuickSpecs {
  processor: string;
  powerSupply: string;
  dimensions: string;
  weight: string;
  operatingTemp: string;
  stabilization: string;
  sensorType: string;
  interface: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  items: SpecItem[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  price: number;
  priceDisplay: string;
  rating: number;
  reviewCount: number;
  isTopSeller: boolean;
  isRecommended: boolean;
  status: ProductStatus;
  introThumbnail: string;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  highlights: string[];
  quickSpecs: QuickSpecs;
  informationBlocks: ProductInfoBlock[];
  overallSpecifications: SpecCategory[];
}

export type SortOption = 'recommend' | 'top-seller' | 'price-asc' | 'price-desc';
