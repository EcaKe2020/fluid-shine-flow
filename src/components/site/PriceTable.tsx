"use client";

import { useMemo, useState } from "react";
import { ChevronUp, ChevronDown, Search, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PRICE_ROWS, PRICE_CATEGORIES, KES, type PriceRow } from "@/lib/price-list";

type SortDirection = "asc" | "desc" | null;

interface PriceTableProps {
  className?: string;
}

export function PriceTable({ className = "" }: PriceTableProps) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortConfig, setSortConfig] = useState<{ key: keyof PriceRow; direction: SortDirection }>({
    key: "category",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredAndSortedRows = useMemo(() => {
    let rows = [...PRICE_ROWS];

    // Search filter
    if (search) {
      const s = search.toLowerCase();
      rows = rows.filter(
        (row) =>
          row.sku.toLowerCase().includes(s) ||
          row.name.toLowerCase().includes(s) ||
          row.category.toLowerCase().includes(s) ||
          row.unit.toLowerCase().includes(s)
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      rows = rows.filter((row) => row.category === categoryFilter);
    }

    // Sort
    if (sortConfig.direction) {
      rows.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return rows;
  }, [search, categoryFilter, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedRows.length / itemsPerPage);
  const paginatedRows = filteredAndSortedRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof PriceRow) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
  };

  const getSortIcon = (key: keyof PriceRow) => {
    if (sortConfig.key !== key) return <ChevronUp className="size-4 text-[#666666]" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="size-4 text-[#00D4FF]" />
    ) : (
      <ChevronDown className="size-4 text-[#00D4FF]" />
    );
  };

  const statusColors = {
    "In stock": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    "Low stock": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    "On order": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  };

  return (
    <div className={`${className} space-y-6`}>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#666666]" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E5E5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 focus:border-[#00D4FF] transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="size-4 text-[#666666]" />
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 focus:border-[#00D4FF] transition-all appearance-none bg-no-repeat bg-right pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundPosition: "right 0.75rem center",
            }}
          >
            <option value="all">All Categories</option>
            {PRICE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {(search || categoryFilter !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setCategoryFilter("all");
                setCurrentPage(1);
              }}
              className="p-2.5 rounded-xl bg-[#E5E5E5] text-[#666666] hover:bg-[#D4D4D4] transition-colors"
              aria-label="Clear filters"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results info */}
      <div className="text-sm text-[#666666]">
        Showing {paginatedRows.length} of {filteredAndSortedRows.length} products
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-[#E5E5E5] bg-white">
        <table className="w-full" role="table">
          <thead className="bg-[#F5F5F5]">
            <tr>
              {[
                { key: "sku", label: "SKU" },
                { key: "name", label: "Product" },
                { key: "category", label: "Category" },
                { key: "unit", label: "Unit" },
                { key: "price", label: "Price (KES)" },
                { key: "status", label: "Status" },
              ].map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-[#666666] cursor-pointer hover:text-[#00D4FF] transition-colors select-none"
                  onClick={() => handleSort(col.key as keyof PriceRow)}
                  style={{ userSelect: "none" }}
                >
                  <div className="flex items-center gap-1.5">
                    {col.label}
                    {getSortIcon(col.key as keyof PriceRow)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5]">
            {paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-[#666666]">
                  No products match your filters.
                </td>
              </tr>
            ) : (
              paginatedRows.map((row, idx) => (
                <tr
                  key={row.sku}
                  className="transition-colors hover:bg-[#F5F5F5]/50"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  <td className="px-4 py-3 text-sm font-mono text-[#1A1A1A]">{row.sku}</td>
                  <td className="px-4 py-3 text-sm font-medium text-[#1A1A1A]">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-[#666666]">{row.category}</td>
                  <td className="px-4 py-3 text-sm text-[#666666]">{row.unit}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-[#1A1A1A] tabular-nums">
                    {KES(row.price)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl bg-white border border-[#E5E5E5] text-[#666666] hover:border-[#00D4FF] hover:text-[#00D4FF] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous page"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                    currentPage === pageNum
                      ? "bg-[#00D4FF] text-[#0B0C10] shadow-[0_4px_14px_rgba(0,212,255,0.3)]"
                      : "text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
                  }`}
                  aria-label={`Page ${pageNum}`}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl bg-white border border-[#E5E5E5] text-[#666666] hover:border-[#00D4FF] hover:text-[#00D4FF] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next page"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}