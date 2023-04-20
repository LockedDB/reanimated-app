import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PanGestureScreen } from "./screens/PanGesture/PanGestureScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { TransitionsScreen } from "./screens/Transitions/TransitionsScreen";
import { DistanceTwoPointsScreen } from "./screens/DistanceTwoPoints/DistanceTwoPointsScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home screen"}>
        <Stack.Screen name={"Home screen"} component={HomeScreen} />
        <Stack.Screen name={"Pan gesture"} component={PanGestureScreen} />
        <Stack.Screen name={"Transitions"} component={TransitionsScreen} />
        <Stack.Screen
          name={"DistanceTwoPointsScreen"}
          component={DistanceTwoPointsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
