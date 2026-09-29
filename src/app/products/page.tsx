'use client';

import { useState, useMemo, useEffect } from 'react';
import { Product, SortOption } from '@/types/product';
import { CATEGORIES } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import ProductFilter from '@/components/products/ProductFilter';
import Pagination from '@/components/products/Pagination';
import { PackageSearch } from 'lucide-react';

const ITEMS_PER_PAGE = 28; // 7 rows x 4 columns = 28 products max per page

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('recommend');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 1. Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // 3. Sorting
    switch (selectedSort) {
      case 'recommend':
        result.sort((a, b) => (b.isRecommended ? 1 : 0) - (a.isRecommended ? 1 : 0) || b.rating - a.rating);
        break;
      case 'top-seller':
        result.sort((a, b) => (b.isTopSeller ? 1 : 0) - (a.isTopSeller ? 1 : 0) || b.reviewCount - a.reviewCount);
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedSort, searchQuery, products]);

  // Reset page when category or search changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSelectedSort(sort);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-slate">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="wrap">

        {/* Page Header */}
        <div className="mb-10 text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-dark tracking-tight mb-3">
            Payloads &amp; Vision Systems
          </h1>
          <p className="text-base text-muted-slate max-w-2xl">
            Explore commercial-grade optical zoom payloads, dual-spectrum thermal sensors, and AI companion computers for autonomous platforms.
          </p>
        </div>

        {/* Filters & Sorting */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          selectedSort={selectedSort}
          onSelectSort={handleSortChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          categories={CATEGORIES}
          totalResults={totalItems}
        />

        {/* 3.2 Product Grid (Max 7x4 = 28 products per page) */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 180, behavior: 'smooth' });
              }}
            />
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
            <PackageSearch size={48} className="mx-auto text-[#94a3b8] mb-4" />
            <h3 className="text-xl font-bold text-slate-dark mb-2">No Payloads Found</h3>
            <p className="text-sm text-muted-slate max-w-md mx-auto mb-6">
              We couldn&apos;t find any products matching your search criteria. Try clearing your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSelectedSort('recommend');
                setCurrentPage(1);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-dark text-white hover:bg-[#1a2d48] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
