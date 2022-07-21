import { StyleSheet, View} from "react-native";

export const PanGestureScreen = () => {
    return <View style={styles.container}>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        marginTop: 15,
        flexDirection: 'row',
    }
});