import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface ICategorySelectorPrps {
  categories: (typeof categoryTable.$inferSelect)[];
}

export default function CategorySelector({
  categories,
}: ICategorySelectorPrps) {
  return (
    <div className="rounded-3xl bg-[#f4efff] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((Category) => (
          <Button
            key={Category.id}
            variant="ghost"
            className="cursor-pointer rounded-3xl bg-white text-xs font-semibold"
          >
            {Category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
