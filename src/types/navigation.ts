import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Home: undefined
  HeartRate: undefined
  Steps: undefined
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">
export type HeartRateScreenProps = NativeStackScreenProps<RootStackParamList, "HeartRate">
export type StepsScreenProps = NativeStackScreenProps<RootStackParamList, "Steps">

