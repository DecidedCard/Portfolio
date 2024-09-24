import { useEffect, useState } from "react";

const useTypingAnimation = (text: string, start?: boolean) => {
  const [comment, setComment] = useState("");
  const [textCount, setTextCount] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTypingPaused || start) {
        clearInterval(typingInterval);
        return;
      }

      if (textCount >= text.length) {
        setIsTypingPaused(true);
        return;
      }

      const nextChar = text[textCount];
      setComment((prevSequence) => prevSequence + nextChar);

      if (nextChar === "\n") {
        setTextCount((prevCount) => prevCount + 2);
      } else {
        setTextCount((prevCount) => prevCount + 1);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [start, text, textCount, isTypingPaused]);

  return { comment, isTypingPaused };
};

export default useTypingAnimation;
