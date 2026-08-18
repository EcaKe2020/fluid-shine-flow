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
  FileDown,
  QrCode as QrCodeIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  PRICE_ROWS,
  PRICE_CATEGORIES,
  PRICE_LIST_UPDATED,
  PRICE_LIST_URL,
  KES,
  type PriceRow,
} from "@/lib/price-list";
import { COMPANY } from "@/lib/eca";
import { QrCard } from "./QrCard";

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
  const [showQr, setShowQr] = useState(false);
  const itemsPerPage = 15;

  const filteredAndSortedRows = useMemo(() => {
    let rows = [...PRICE_ROWS];

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

  const handleSort = (key: keyof PriceRow) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
  };

  const getSortIcon = (key: keyof PriceRow) => {
    if (sortConfig.key !== key) return <ChevronUp className="size-4 text-muted-foreground" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="size-4 text-primary" />
    ) : (
      <ChevronDown className="size-4 text-primary" />
    );
  };

  const statusColors: Record<string, string> = {
    "In stock": "bg-primary/15 text-primary",
    "Low stock": "bg-warning/15 text-warning",
    "On order": "bg-muted text-muted-foreground",
  };

  const exportPdf = async () => {
    try {
      const { default: JsPdf } = await import("jspdf");
      const doc = new JsPdf({ unit: "pt", format: "a4" });
      const marginX = 40;
      let y = 56;

      doc.setFontSize(16);
      doc.text(`${COMPANY.name} price list`, marginX, y);
      y += 18;
      doc.setFontSize(9);
      doc.text(
        `Updated ${PRICE_LIST_UPDATED}. Prices in KES, exclusive of VAT. Live pricing: ${PRICE_LIST_URL}`,
        marginX,
        y,
      );
      y += 24;

      doc.setFontSize(9);
      const cols = [marginX, marginX + 78, marginX + 250, marginX + 372, marginX + 442, marginX + 500];
      const header = ["SKU", "Product", "Category", "Unit", "Price", "Status"];
      const writeHeader = () => {
        doc.setFont("helvetica", "bold");
        header.forEach((label, i) => doc.text(label, cols[i]!, y));
        doc.setFont("helvetica", "normal");
        y += 6;
        doc.line(marginX, y, 555, y);
        y += 12;
      };
      writeHeader();

      filteredAndSortedRows.forEach((row) => {
        if (y > 780) {
          doc.addPage();
          y = 56;
          writeHeader();
        }
        const cells = [
          row.sku,
          doc.splitTextToSize(row.name, 165)[0] ?? row.name,
          doc.splitTextToSize(row.category, 115)[0] ?? row.category,
          row.unit,
          KES(row.price),
          row.status,
        ];
        cells.forEach((cell, i) => doc.text(String(cell), cols[i]!, y));
        y += 15;
      });

      doc.save(`eca-networks-price-list-${PRICE_LIST_UPDATED}.pdf`);
      toast.success(`PDF ready with ${filteredAndSortedRows.length} lines`);
    } catch {
      toast.error("The PDF could not be generated. Please try again.");
    }
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
              className="rounded-xl bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-muted/80"
              aria-label="Clear filters"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results info and exports */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {paginatedRows.length} of {filteredAndSortedRows.length} products. Updated{" "}
          {PRICE_LIST_UPDATED}, exclusive of VAT.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => void exportPdf()}
            className="btn-radius inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <FileDown className="size-4" />
            Download PDF
          </button>
          <button
            type="button"
            onClick={() => setShowQr((v) => !v)}
            className="btn-radius inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <QrCodeIcon className="size-4 text-primary" />
            {showQr ? "Hide QR" : "Share QR"}
          </button>
        </div>
      </div>

      {showQr && (
        <div className="card-in flex justify-center">
          <QrCard
            url={PRICE_LIST_URL}
            caption="Scan to open this price list on a phone at the counter or on site."
          />
        </div>
      )}

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
                { key: "price", label: "Price (KES)" },
                { key: "status", label: "Status" },
              ].map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="cursor-pointer select-none px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
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
          <tbody className="divide-y divide-border">
            {paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
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
                  <td className="px-4 py-3 text-sm font-semibold text-foreground tabular-nums">
                    {KES(row.price)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[row.status] ?? ""}`}
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
