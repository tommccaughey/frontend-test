import type React from "react"
import { Text, StyleSheet, ScrollView, Dimensions, View } from "react-native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import CardSection from "../components/cardsection"
import ProgressNative from "../../components/ui/progress-native";
import type { RootStackParamList } from "../../App"

const { width, height } = Dimensions.get("window")

type ProfessionalDesignNativeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">
}

const ProfessionalDesignNative: React.FC<ProfessionalDesignNativeProps> = ({ navigation }) => {
  const stepsChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [7000, 8500, 6800, 9200, 7600, 8000, 8439],
      },
    ],
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Gesis Smart Health App</Text>
      <CardSection
        title="Heart Rate"
        onPress={() => navigation.navigate("HeartRate")}
        content={
          <>
            <Text style={styles.cardContentText}>72 BPM</Text>
            <Text style={styles.cardSubContent}>Normal range</Text>
          </>
        }
      />
      <CardSection
        title="Steps"
        showChart={true}
        chartData={stepsChartData}
        content={
          <>
            <Text style={styles.cardContentText}>8,439</Text>
            <Text style={styles.cardSubContent}>Goal: 10,000</Text>
          </>
        }
      />

<CardSection
        title="Nutrition Tracker"
        content={
          <View style={styles.listItem}>
            <Text style={styles.listItem}>
              <Text>Calories</Text>
              <Text style={styles.listItemDetail}>1,200 / 2,000</Text>
            </Text>
            <ProgressNative value={60} />
            <Text style={styles.listItem}>
              <Text>Protein</Text>
              <Text style={styles.listItemDetail}>75g / 100g</Text>
            </Text>
            <ProgressNative value={75} />
            <Text style={styles.listItem}>
              <Text>Carbs</Text>
              <Text style={styles.listItemDetail}>150g / 250g</Text>
            </Text>
            <ProgressNative value={60} />
          </View>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  cardContentText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardSubContent: {
    fontSize: 16,
    color: "#888",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  listItemDetail: {
    fontWeight: "bold",
  },
  },

)

export default ProfessionalDesignNative

