import React from "react";
import { Gesture } from "../PanGesture/Gesture";

export const DistanceTwoPointsScreen = () => {
  const PointA = <Gesture width={50} height={50} />;
  const PointB = <Gesture width={50} height={50} backgroundColor="green" />;
  return (
    <React.Fragment>
      {PointA}
      {PointB}
    </React.Fragment>
  );
};
