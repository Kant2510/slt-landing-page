'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Cpu,
  Zap,
  Ruler,
  Weight,
  Thermometer,
  Compass,
  Eye,
  Cable,
  CheckCircle2,
  Quote,
  FileText,
  Table
} from 'lucide-react';
import { Product, ProductInfoBlock } from '@/types/product';

interface ProductTabsProps {
  product: Product;
}

const QuickSpecCard = ({ icon: Icon, label, value }: { icon: React.ComponentType<any>; label: string; value: string }) => (
  <div className="p-4 rounded-xl bg-white border border-[#e2e8f0]/80 shadow-xs">
    <div className={`flex items-center gap-2 mb-2`}>
      <Icon size={18} />
      <span className="text-xs font-bold uppercase tracking-wider text-muted-slate">{label}</span>
    </div>
    <p className="text-sm font-bold text-slate-dark leading-snug">{value}</p>
  </div>
);

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'specs'>('info');

  return (
    <div className="w-full mt-16 pt-10 border-t border-[#e2e8f0]" id="product-tabs">

      {/* 2.2 Tab Header: ONLY Bottom-Border Style */}
      <div className="flex items-center gap-8 border-b border-[#e2e8f0] mb-10 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('info')}
          className={`pb-4 text-base sm:text-lg transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${activeTab === 'info'
            ? 'border-b-2 border-accent-blue text-accent-blue font-extrabold'
            : 'border-b-2 border-transparent text-muted-slate hover:text-slate-dark font-semibold'
            }`}
        >
          <FileText size={18} />
          Product Information
        </button>

        <button
          onClick={() => setActiveTab('specs')}
          className={`pb-4 text-base sm:text-lg transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${activeTab === 'specs'
            ? 'border-b-2 border-accent-blue text-accent-blue font-extrabold'
            : 'border-b-2 border-transparent text-muted-slate hover:text-slate-dark font-semibold'
            }`}
        >
          <Table size={18} />
          Product Specification
        </button>
      </div>

      {/* TAB 1: Product Information (Dynamic JSON Blocks Renderer) */}
      {activeTab === 'info' && (
        <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn">
          {product.informationBlocks && product.informationBlocks.length > 0 ? (
            product.informationBlocks.map((block: ProductInfoBlock, index: number) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <div key={index} className="space-y-3">
                      {block.title && (
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-dark tracking-tight">
                          {block.title}
                        </h3>
                      )}
                      <p className="text-base text-[#475569] leading-relaxed">
                        {block.content}
                      </p>
                    </div>
                  );

                case 'image':
                  return (
                    <div key={index} className="space-y-2">
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-dark border border-[#e2e8f0] shadow-md">
                        <Image
                          src={block.url}
                          alt={block.alt || product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 800px"
                        />
                      </div>
                      {block.caption && (
                        <p className="text-xs text-center text-muted-slate italic">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );

                case 'list':
                  return (
                    <div key={index} className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-4">
                      {block.title && (
                        <h4 className="text-base sm:text-lg font-bold text-slate-dark">
                          {block.title}
                        </h4>
                      )}
                      <ul className="space-y-2.5">
                        {block.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#334155]">
                            <CheckCircle2 size={16} className="text-accent-blue shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );

                case 'quote':
                  return (
                    <div key={index} className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-slate-dark to-[#152a44] text-white overflow-hidden shadow-xl">
                      <Quote size={48} className="absolute -right-2 -bottom-2 text-white/10 pointer-events-none" />
                      <p className="text-base sm:text-lg italic leading-relaxed text-[#e2e8f0] mb-4">
                        &ldquo;{block.quote}&rdquo;
                      </p>
                      {block.author && (
                        <div className="text-xs text-[#94a3b8]">
                          <strong className="text-white font-semibold block">{block.author}</strong>
                          {block.role && <span>{block.role}</span>}
                        </div>
                      )}
                    </div>
                  );

                default:
                  return null;
              }
            })
          ) : (
            <p className="text-sm text-muted-slate">No additional information available for this product.</p>
          )}
        </div>
      )}

      {/* TAB 2: Product Specification */}
      {activeTab === 'specs' && (
        <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn">

          {/* Quick Preliminary Specs Card */}
          <div className="p-6 sm:p-8 bg-linear-to-br from-[#f8fafc] to-[#f1f5f9]">
            <div className="mb-6 pb-4 border-b border-[#e2e8f0]">
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent-blue">Quick Reference</span>
              <h3 className="text-xl font-bold text-slate-dark">Preliminary Key Specifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Chip / Processor */}
              <QuickSpecCard icon={Cpu} label="Processor SoC" value={product.quickSpecs.processor} />
              {/* Power Supply */}
              <QuickSpecCard icon={Zap} label="Power Input" value={product.quickSpecs.powerSupply} />
              {/* Dimensions */}
              <QuickSpecCard icon={Ruler} label="Dimensions" value={product.quickSpecs.dimensions} />
              {/* Weight */}
              <QuickSpecCard icon={Weight} label="Payload Weight" value={product.quickSpecs.weight} />

              {/* Operating Temp */}
              <QuickSpecCard icon={Thermometer} label="Operating Temp" value={product.quickSpecs.operatingTemp} />
              {/* Stabilization */}
              <QuickSpecCard icon={Compass} label="Stabilization" value={product.quickSpecs.stabilization} />
              {/* Sensor Type */}
              <QuickSpecCard icon={Eye} label="Sensor Type" value={product.quickSpecs.sensorType} />
              {/* Interface */}
              <QuickSpecCard icon={Cable} label="Connectivity" value={product.quickSpecs.interface} />
            </div>
          </div>

          {/* Overall Specification Categorized Tables */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-dark tracking-tight">
              Overall Technical Specifications
            </h3>

            {product.overallSpecifications.map((category, catIdx) => (
              <div key={catIdx} className="border border-[#e2e8f0] overflow-hidden shadow-xs">
                <div className="bg-slate-dark px-6 py-3.5 text-white">
                  <h4 className="text-sm font-bold tracking-wide">{category.category}</h4>
                </div>
                <div className="divide-y divide-[#e2e8f0]">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-3.5 text-xs sm:text-sm ${itemIdx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'
                        }`}
                    >
                      <div className="font-semibold text-slate-dark sm:col-span-1">
                        {item.label}
                      </div>
                      <div className="text-[#475569] sm:col-span-2">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
