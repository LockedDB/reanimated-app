import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue
} from "react-native-reanimated";
import {StyleSheet, View} from "react-native";
import { PanGestureHandler } from 'react-native-gesture-handler';

const Circle = () => <View style={styles.circle}></View>

interface GestureProps {
    width: number;
    height: number;
}

export const Gesture = ({ width, height }: GestureProps) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onActive: (event, ctx) => {
            translateX.value = event.translationX;
            translateY.value = event.translationY;
        }
    });

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value}
            ]
        }
    })

    return <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
            <Circle />
        </Animated.View>
    </PanGestureHandler>
}

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 100,
    }
});