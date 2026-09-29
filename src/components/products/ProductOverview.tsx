'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Check,
  ChevronRight,
  Download,
  Send
} from 'lucide-react';
import { Product } from '@/types/product';

interface ProductOverviewProps {
  product: Product;
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const scrollToContact = () => {
    const el = document.getElementById('inquiry-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-muted-slate mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-dark transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <Link href="/products" className="hover:text-slate-dark transition-colors">
          Products
        </Link>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <span className="text-muted-slate">{product.category}</span>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <span className="font-semibold text-slate-dark truncate max-w-50 sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* 2.1 Overview 3-Column Layout: Left Thumbnails, Center Active Image, Right Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT COLUMN: Vertical list of thumbnails (lg:col-span-2) */}
        <div className="order-2 lg:order-1 flex lg:flex-col gap-3 lg:max-h-130 pb-2 lg:pb-0 scrollbar-thin">
          {product.images.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative aspect-square w-10 lg:w-full shrink-0 overflow-hidden border-2 bg-slate-dark transition-all duration-200 cursor-pointer ${activeImageIndex === idx
                ? 'border-accent-blue shadow-[0_0_15px_rgba(37,99,235,0.35)] scale-[1.02]'
                : 'border-[#e2e8f0] opacity-70 hover:opacity-100 hover:border-[#94a3b8]'
                }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={imgUrl}
                alt={`${product.name} thumbnail ${idx + 1}`}
                fill
                className="object-cover p-1.5"
                sizes="40px"
              />
            </button>
          ))}
        </div>

        {/* CENTER COLUMN: Main Current Image (lg:col-span-5) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-square w-full rounded-2xl bg-slate-dark border border-[#1e293b] overflow-hidden shadow-2xl flex items-center justify-center group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-radial from-accent-blue/20 to-transparent pointer-events-none" />

            <Image
              src={product.images[activeImageIndex] || product.thumbnail}
              alt={product.name}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Product Overview Information (lg:col-span-5) */}
        <div className="lg:col-span-5 order-3 flex flex-col">
          {/* Eyebrow & Status */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-blue">
              LUXION PAYLOAD SYSTEMS
            </span>
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight leading-tight mb-2">
            {product.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-slate leading-relaxed mb-4">
            {product.tagline}
          </p>

          <div className="pb-4 mb-4 border-b border-[#e2e8f0]" />

          {/* Short Description */}
          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          {/* Highlights Checklist */}
          <div className="mb-8">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-dark mb-3">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {product.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="mt-0.5 p-0.5 rounded-full bg-white text-blue-300  shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="mailto:sales@luxion.ai?subject=Inquiry%20for%20LUXION%20Payload"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-dark text-white hover:bg-[#1a2d48] hover:-translate-y-0.5 shadow-lg shadow-black/10 transition-all duration-200"
            >
              <Send size={16} />
              Request Formal Quote
            </a>
            <a
              href="#product-tabs"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border border-[#cbd5e1] text-slate-dark hover:bg-[#f8fafc] hover:border-slate-dark transition-all duration-200"
            >
              <Download size={16} />
              Datasheet
            </a>
          </div>

          {/* Trust points */}
          {/* <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#e2e8f0] text-[11px] text-muted-slate">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-accent-blue shrink-0" />
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu size={16} className="text-accent-purple shrink-0" />
              <span>ROS2 / MAVLink</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={16} className="text-accent-amber shrink-0" />
              <span>Global Dispatch</span>
            </div>
          </div> */}

        </div>

      </div>
    </div>
  );
}
