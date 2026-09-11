"use client";

import { useMemo, useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Search,
  ListFilter as Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { jsPDF } from "jspdf";
import { PRODUCT_CATEGORIES, PRODUCT_ROWS, type ProductRow } from "@/lib/products";

type SortDirection = "asc" | "desc" | null;

interface ProductTableProps {
  className?: string;
}

export function ProductTable({ className = "" }: ProductTableProps) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortConfig, setSortConfig] = useState<{ key: keyof ProductRow; direction: SortDirection }>({
    key: "category",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredAndSortedRows = useMemo(() => {
    let rows = [...PRODUCT_ROWS];

    if (search) {
      const s = search.toLowerCase();
      rows = rows.filter(
        (row) =>
          row.sku.toLowerCase().includes(s) ||
          row.name.toLowerCase().includes(s) ||
          row.category.toLowerCase().includes(s) ||
          row.unit.toLowerCase().includes(s),
      );
    }

    if (categoryFilter !== "all") {
      rows = rows.filter((row) => row.category === categoryFilter);
    }

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
    currentPage * itemsPerPage,
  );

  const handleSort = (key: keyof ProductRow) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
  };

  const getSortIcon = (key: keyof ProductRow) => {
    if (sortConfig.key !== key) return <ChevronUp className="size-4 text-muted-foreground" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="size-4 text-primary" />
    ) : (
      <ChevronDown className="size-4 text-primary" />
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;
    let y = 24;

    const header = () => {
      doc.setFont("helvetica", "bold");
      doc.setTextColor(14, 90, 125);
      doc.setFontSize(17);
      doc.text("ECA Networks Product Catalogue", margin, 15);
      doc.setDrawColor(232, 118, 34);
      doc.setLineWidth(1);
      doc.line(margin, 19, pageWidth - margin, 19);
      doc.setTextColor(70, 86, 102);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
    };

    header();
    filteredAndSortedRows.forEach((row, index) => {
      const nameLines = doc.splitTextToSize(row.name, 93) as string[];
      const rowHeight = Math.max(8, nameLines.length * 4.2 + 2);
      if (y + rowHeight > pageHeight - 16) {
        doc.addPage();
        header();
        y = 24;
      }
      if (index % 2 === 0) {
        doc.setFillColor(246, 248, 250);
        doc.rect(margin, y - 4, pageWidth - margin * 2, rowHeight, "F");
      }
      doc.setTextColor(22, 50, 79);
      doc.text(row.sku, margin + 2, y);
      doc.text(nameLines, margin + 27, y);
      doc.setTextColor(91, 113, 134);
      doc.text(row.category, margin + 122, y);
      doc.text("In stock", pageWidth - margin - 2, y, { align: "right" });
      y += rowHeight;
    });
    doc.setFontSize(8);
    doc.setTextColor(91, 113, 134);
    doc.text("Prices are supplied by quotation. Stock shown as confirmed by ECA Networks.", margin, pageHeight - 8);
    doc.save(`eca-networks-catalogue-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <div className={`${className} space-y-6`}>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="size-4 text-muted-foreground" />
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-no-repeat bg-right pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235B7186' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundPosition: "right 0.75rem center",
            }}
          >
            <option value="all">All Categories</option>
            {PRODUCT_CATEGORIES.map((cat) => (
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
              className="rounded-xl bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-muted/80"
              aria-label="Clear filters"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            onClick={generatePDF}
            className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            aria-label="Download PDF"
          >
            <Download className="size-4" />
            <span>Download Catalogue</span>
          </button>
        </div>
      </div>

      {/* Results info */}
      <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {paginatedRows.length} of {filteredAndSortedRows.length} products
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full" role="table">
          <thead className="bg-muted/50">
            <tr>
              {[
                { key: "sku", label: "SKU" },
                { key: "name", label: "Product" },
                { key: "category", label: "Category" },
                { key: "unit", label: "Unit" },
                { key: "status", label: "Status" },
              ].map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="cursor-pointer select-none px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => handleSort(col.key as keyof ProductRow)}
                  style={{ userSelect: "none" }}
                >
                  <div className="flex items-center gap-1.5">
                    {col.label}
                    {getSortIcon(col.key as keyof ProductRow)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">
                  No products match your filters.
                </td>
              </tr>
            ) : (
              paginatedRows.map((row, idx) => (
                <tr
                  key={row.sku}
                  className="transition-colors hover:bg-muted/40"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  <td className="px-4 py-3 text-sm font-mono text-foreground">{row.sku}</td>
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{row.category}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{row.unit}</td>
                  <td className="px-4 py-3">
                    <span
                      className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary"
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
            className="rounded-xl border border-border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
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
                  className={`h-10 w-10 rounded-xl text-sm font-medium transition-all ${
                    currentPage === pageNum
                      ? "bg-primary text-primary-foreground shadow-[0_4px_14px_-4px_rgba(14,165,233,0.5)]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
            className="rounded-xl border border-border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next page"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}