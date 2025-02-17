import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProfessionalDesignNative from "./src/pages/professional-design-native"
import HeartRate from "./src/pages/heartRate"
import Steps from "./src/pages/steps"

export type RootStackParamList = {
  Home: undefined
  HeartRate: undefined
  Steps: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ProfessionalDesignNative} options={{ title: "Gesis Smart Health App" }} />
        <Stack.Screen name="HeartRate" component={HeartRate} options={{ title: "Heart Rate" }} />
        <Stack.Screen name="Steps" component={Steps} options={{ title: "Steps" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App