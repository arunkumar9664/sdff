import Image from "next/image";
import type { ImpactArea } from "@/types";
import { Card } from "@/components/ui/Container";

export function ImpactCard({ area }: { area: ImpactArea }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-[16/10]">
        <Image
          src={area.image}
          alt={area.title}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 25vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[var(--color-heading)]">
          {area.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
          {area.description}
        </p>
      </div>
    </Card>
  );
}
