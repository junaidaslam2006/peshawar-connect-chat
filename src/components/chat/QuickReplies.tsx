interface QuickRepliesProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function QuickReplies({ suggestions, onSelect }: QuickRepliesProps) {
  if (suggestions.length === 0) return null;

  return (
    <div className="px-3 py-2 border-t border-border/30">
      <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.slice(0, 3).map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelect(suggestion)}
            className="quick-reply text-xs"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
