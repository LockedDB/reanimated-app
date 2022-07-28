import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PanGestureScreen } from "./screens/PanGesture/PanGestureScreen";
import {HomeScreen} from "./screens/HomeScreen";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home screen"}>
                <Stack.Screen name={"Home screen"} component={HomeScreen}/>
                <Stack.Screen name={"Pan gesture"} component={PanGestureScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();
