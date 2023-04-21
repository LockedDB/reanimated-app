import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";

interface BubbleProps {
  x1: SharedValue<number>;
  y1: SharedValue<number>;
  x2: SharedValue<number>;
  y2: SharedValue<number>;
}

const Bubble = ({ x1, y1, x2, y2 }: BubbleProps) => {
  const bubbleX = useSharedValue(x1.value);
  const bubbleY = useSharedValue(y1.value);

  const moveBubble = () => {
    bubbleX.value = withTiming(x2.value, { duration: 1000 });
    bubbleY.value = withTiming(y2.value, { duration: 1000 });
  };

  const animatedBubbleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: bubbleX.value }, { translateY: bubbleY.value }],
    };
  });

  return <Animated.View style={[styles.bubble, animatedBubbleStyle]} />;
};

export default Bubble;

const styles = StyleSheet.create({
  bubble: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
  },
});
