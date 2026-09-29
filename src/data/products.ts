import { Product, ProductCategory } from '@/types/product';

export const CATEGORIES: ProductCategory[] = [
  'Gimbal Payloads',
  'EO/IR Sensors',
  'AI Vision Systems',
  'Edge Processors',
  'Accessories & Mounts',
];

export function getProductById(products: Product[], id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(products: Product[], currentId: string, limit: number = 4): Product[] {
  const current = getProductById(products, currentId);
  if (!current) return products.slice(0, limit);

  const sameCategory = products.filter(
    (p) => p.category === current.category && p.id !== currentId
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const remaining = products.filter(
    (p) => p.id !== currentId && !sameCategory.includes(p)
  );

  return [...sameCategory, ...remaining].slice(0, limit);
}
