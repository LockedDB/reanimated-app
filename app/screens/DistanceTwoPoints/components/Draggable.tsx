import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  measure,
  runOnJS,
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { BubbleAnimationContext } from "../context/BubbleAnimationProvider";

type GestureContext = {
  offsetX: number;
  offsetY: number;
};

interface DraggableProps {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
}

const Draggable = ({ x, y }: DraggableProps) => {
  const aref = useAnimatedRef<Animated.View>();
  const { bubbleAnimation } = useContext(BubbleAnimationContext);

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

  const onPress = () => {
    runOnUI(() => {
      "worklet";
      const measured = measure(aref);
      if (measured !== null) {
        const { x, y } = measured;
        runOnJS(bubbleAnimation)(x, y);
      } else {
        console.warn("measured is null");
      }
    })();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <TouchableOpacity onPress={onPress}>
        <Animated.View ref={aref} style={[styles.draggable, animatedStyle]} />
      </TouchableOpacity>
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
