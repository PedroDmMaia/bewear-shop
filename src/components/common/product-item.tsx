import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBrl } from "@/helpers/money";

interface IProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

export default function ProductItem({ product }: IProductItemProps) {
  const firstVariant = product.variants[0];

  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />

      <div className="flex w-[200px] flex-col gap-1">
        <p className="trucate text-sm font-medium">{product.name}</p>
        <p className="trucate text-muted-foreground text-xs font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-medium">
          {formatCentsToBrl(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
}
