import { Bot, User } from "lucide-react";
import universityLogo from "@/assets/university-logo.jfif";

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  isTyping?: boolean;
}

export function ChatMessage({ content, isUser, isTyping }: ChatMessageProps) {
  if (isTyping) {
    return (
      <div className="flex gap-2 items-end animate-fade-in">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <img
            src={universityLogo}
            alt="Bot"
            className="w-6 h-6 rounded-full object-cover"
          />
        </div>
        <div className="message-bot">
          <div className="typing-indicator">
            <div className="typing-dot" />
            <div className="typing-dot" />
            <div className="typing-dot" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex gap-2 items-end animate-fade-in ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser ? "bg-primary" : "bg-primary/10"
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <img
            src={universityLogo}
            alt="Bot"
            className="w-6 h-6 rounded-full object-cover"
          />
        )}
      </div>
      <div
        className={`max-w-[80%] ${isUser ? "message-user" : "message-bot"}`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}
