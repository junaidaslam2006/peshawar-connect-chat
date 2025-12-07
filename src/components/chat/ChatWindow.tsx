import { useState, useRef, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";
import { CategoryNav } from "./CategoryNav";
import { SearchBar } from "./SearchBar";
import { ChatMessage } from "./ChatMessage";
import { QuickReplies } from "./QuickReplies";
import { ChatInput } from "./ChatInput";
import { useTheme } from "@/hooks/useTheme";
import { welcomeMessage, popularQuestions, faqData } from "@/data/faqData";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const { isDark, toggleTheme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", content: welcomeMessage, isUser: false },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getQuickSuggestions = (): string[] => {
    if (selectedCategory) {
      return faqData
        .filter((faq) => faq.category === selectedCategory)
        .slice(0, 3)
        .map((faq) => faq.question);
    }
    if (searchQuery) {
      return faqData
        .filter((faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 3)
        .map((faq) => faq.question);
    }
    return popularQuestions.slice(0, 3);
  };

  const handleSend = async (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const { data, error } = await supabase.functions.invoke("faq-chat", {
        body: { message },
      });

      if (error) throw error;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble responding right now. Please try again or contact the university directly for assistance.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-window bg-card border border-border/50 animate-scale-in">
      <ChatHeader isDark={isDark} onToggleTheme={toggleTheme} onClose={onClose} />
      
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery("")}
      />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} content={msg.content} isUser={msg.isUser} />
        ))}
        {isTyping && <ChatMessage content="" isUser={false} isTyping />}
        <div ref={messagesEndRef} />
      </div>
      
      <QuickReplies suggestions={getQuickSuggestions()} onSelect={handleSend} />
      
      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
