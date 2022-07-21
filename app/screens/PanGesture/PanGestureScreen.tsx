import {StyleSheet, View} from "react-native";
import {Gesture} from "./Gesture";


export const PanGestureScreen = () => {

    return (
        <View style={styles.container}>
            <Gesture height={200} width={200}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});