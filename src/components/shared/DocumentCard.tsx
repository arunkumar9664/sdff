import { Download, Eye, FileText } from "lucide-react";
import type { DocumentItem } from "@/types";
import { Card } from "@/components/ui/Container";

export function DocumentCard({ doc }: { doc: DocumentItem }) {
  const hasFile = Boolean(doc.file);

  return (
    <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-muted)] text-[var(--color-primary-blue)]">
          <FileText className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <h3 className="font-semibold text-[var(--color-heading)]">{doc.title}</h3>
          <p className="mt-1 text-sm text-[var(--color-body)]">
            {doc.financialYear}
            {doc.publishedDate ? ` · ${doc.publishedDate}` : ""}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {hasFile ? (
          <>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] px-3 py-2 text-sm font-medium hover:bg-[var(--color-muted)]"
            >
              <Eye className="h-4 w-4" aria-hidden />
              View
            </a>
            <a
              href={doc.file}
              download
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-btn)] bg-[#061018] px-3 py-2 text-sm font-medium !text-white hover:bg-[#0284c7]"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download
            </a>
          </>
        ) : (
          <p className="text-sm text-[var(--color-body)]">
            Document unavailable
          </p>
        )}
      </div>
    </Card>
  );
}

export function DocumentList({
  documents,
  emptyMessage = "Documents will be published here when available.",
}: {
  documents: DocumentItem[];
  emptyMessage?: string;
}) {
  if (documents.length === 0) {
    return (
      <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-white px-6 py-12 text-center">
        <FileText className="mx-auto h-10 w-10 text-[var(--color-body)] opacity-40" aria-hidden />
        <p className="mt-4 text-[var(--color-body)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <DocumentCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}
