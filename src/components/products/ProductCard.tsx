'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  productNameSize?: 'sm' | 'md' | 'lg';
  isBorderVisible?: boolean;
  isTaglineVisible?: boolean;
  isFooterVisible?: boolean;
}

export default function ProductCard({ product, productNameSize = 'lg', isBorderVisible = true, isTaglineVisible = true, isFooterVisible = true }: ProductCardProps) {
  return (
    <div className={`group relative flex flex-col bg-white border ${isBorderVisible ? 'border-[#e2e8f0]' : 'border-transparent'} overflow-hidden transition-all duration-300 hover:border-accent-blue/40 hover:shadow-[0_12px_30px_rgba(7,17,31,0.08)]`}>
      {/* Top Image & Badges */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={productNameSize === 'sm' ? product.introThumbnail : product.thumbnail}
          alt={product.name}
          fill
          className={`p-3 ${productNameSize === 'sm' ? 'object-contain' : 'object-cover'}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col px-5 py-2">
        <h3 className={`text-${productNameSize} font-bold text-slate-dark line-clamp-1 mb-1`}>
          <Link href={`/products/${product.id}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>

        {isTaglineVisible &&
          <p className="text-xs text-muted-slate line-clamp-2 mb-4">
            {product.tagline}
          </p>
        }

        {/* Footer: Price & CTA Link */}
        {isFooterVisible &&
          <div className="mt-auto pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">
              {product.category}
            </span>

            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold"
            >
              Details
              <ArrowRight size={14} />
            </Link>
          </div>
        }
      </div>
    </div>
  );
}
