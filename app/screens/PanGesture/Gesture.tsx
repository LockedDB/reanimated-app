import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const Circle = ({ width, height, backgroundColor }: GestureProps) => (
  <View style={[styles.circle, { width, height, backgroundColor }]}></View>
);

interface GestureProps {
  width: number;
  height: number;
  backgroundColor?: string;
}

type GestureContext = {
  offsetX: number;
  offsetY: number;
};

export const Gesture = ({
  width,
  height,
  backgroundColor = "blue",
}: GestureProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: GestureContext) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx: GestureContext) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, width - 50],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, height - 50],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View {...{ style }}>
        <Circle
          width={width}
          height={height}
          backgroundColor={backgroundColor}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
