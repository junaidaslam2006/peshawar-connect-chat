import { MessageCircle, X } from "lucide-react";
import universityLogo from "@/assets/university-logo.jfif";

interface ChatBubbleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatBubble({ isOpen, onClick }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      className="chat-bubble animate-pulse-glow group"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {isOpen ? (
          <X className="w-7 h-7 text-primary-foreground transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <div className="relative">
            <img
              src={universityLogo}
              alt="University of Peshawar"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-foreground/20"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <MessageCircle className="w-2.5 h-2.5 text-accent-foreground" />
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
