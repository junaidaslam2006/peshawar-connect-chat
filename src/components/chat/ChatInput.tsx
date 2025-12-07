import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-border/30">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question..."
          disabled={disabled}
          className="flex-1 px-4 py-2.5 text-sm bg-muted/50 border border-border/30 rounded-full
                   placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30
                   transition-all duration-200 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="w-10 h-10 rounded-full bg-primary text-primary-foreground
                   flex items-center justify-center transition-all duration-200
                   hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
                   hover:scale-105 active:scale-95"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
