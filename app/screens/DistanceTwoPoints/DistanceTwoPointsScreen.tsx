import React from "react";
import Bubble from "./components/Bubble";
import { useSharedValue } from "react-native-reanimated";
import Draggable from "./components/Draggable";
import { Dimensions } from "react-native";
import BubbleAnimationProvider from "./context/BubbleAnimationProvider";

const maxWidth = Dimensions.get("window").width;
const random = () => Math.random() * maxWidth + 1;

export const DistanceTwoPointsScreen = () => {
  const x1 = useSharedValue(random());
  const y1 = useSharedValue(random());
  const x2 = useSharedValue(random());
  const y2 = useSharedValue(random());

  return (
    <BubbleAnimationProvider>
      <React.Fragment>
        <Bubble x1={x1} y1={y1} x2={x2} y2={y2} />
        <Draggable x={x1} y={y1} />
        <Draggable x={x2} y={y2} />
      </React.Fragment>
    </BubbleAnimationProvider>
  );
};
