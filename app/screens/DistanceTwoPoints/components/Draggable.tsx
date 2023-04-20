import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

type GestureContext = {
  offsetX: number;
  offsetY: number;
};

interface DraggableProps {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
}

const Draggable = ({ x, y }: DraggableProps) => {
  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: GestureContext) => {
      ctx.offsetX = x.value;
      ctx.offsetY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.offsetX + event.translationX;
      y.value = ctx.offsetY + event.translationY;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <Animated.View style={[styles.draggable, animatedStyle]} />
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  draggable: {
    width: 10,
    height: 10,
    backgroundColor: "blue",
    borderRadius: 30,
    position: "absolute",
  },
});

export default Draggable;
