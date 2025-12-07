import { faqCategories } from "@/data/faqData";

interface CategoryNavProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryNav({ selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <div className="px-3 py-2 border-b border-border/30 overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        <button
          onClick={() => onSelectCategory(null)}
          className={`category-chip ${!selectedCategory ? "active" : "bg-background"}`}
        >
          All
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`category-chip whitespace-nowrap ${
              selectedCategory === cat.id ? "active" : "bg-background"
            }`}
          >
            <span className="mr-1.5">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
