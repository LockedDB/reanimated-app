import {Button, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export const HomeScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Click to access type of animation</Text>
        <StatusBar style="auto"/>
        <View style={styles.buttonsContainer}>
            <Button title={'Pan Gesture'} color={'black'} onPress={() => navigation.push('Pan gesture')}/>
        </View>
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