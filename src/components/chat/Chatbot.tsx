import { useState } from "react";
import { ChatBubble } from "./ChatBubble";
import { ChatWindow } from "./ChatWindow";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      <ChatBubble isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
}
