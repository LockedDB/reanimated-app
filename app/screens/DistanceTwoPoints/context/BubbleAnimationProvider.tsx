import { createContext } from "react";

interface BubbleAnimationContext {
  bubbleAnimation: (x: number, y: number) => void;
}

export const BubbleAnimationContext =
  createContext<BubbleAnimationContext>(null);

const BubbleAnimationProvider = ({ children }) => {
  const bubbleAnimation = (x: number, y: number) => {
    console.log("bubbleAnimation: ", x, y);
  };

  const value: BubbleAnimationContext = {
    bubbleAnimation,
  };

  return (
    <BubbleAnimationContext.Provider value={value}>
      {children}
    </BubbleAnimationContext.Provider>
  );
};

export default BubbleAnimationProvider;
