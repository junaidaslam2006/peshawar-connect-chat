import { Moon, Sun, Minimize2 } from "lucide-react";
import universityLogo from "@/assets/university-logo.jfif";

interface ChatHeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onClose: () => void;
}

export function ChatHeader({ isDark, onToggleTheme, onClose }: ChatHeaderProps) {
  return (
    <div className="bg-primary px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={universityLogo}
          alt="University of Peshawar"
          className="w-10 h-10 rounded-full object-cover border-2 border-primary-foreground/20"
        />
        <div>
          <h3 className="font-display text-primary-foreground font-semibold text-sm">
            University of Peshawar
          </h3>
          <p className="text-primary-foreground/70 text-xs">FAQ Assistant</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-primary-foreground" />
          ) : (
            <Moon className="w-4 h-4 text-primary-foreground" />
          )}
        </button>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
          aria-label="Minimize chat"
        >
          <Minimize2 className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
}
