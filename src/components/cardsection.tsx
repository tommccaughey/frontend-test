import type React from "react"
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card-native"
import { BarChart } from "react-native-chart-kit"

interface CardSectionProps {
  title: string
  content: React.ReactNode
  onPress?: () => void
  showChart?: boolean
  chartData?: {
    labels: string[]
    datasets: { data: number[] }[]
  }
}

const CardSection = ({ title, content, onPress, showChart, chartData }: CardSectionProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {content}
          {showChart && chartData && (
            <View style={styles.chartContainer}>
              <BarChart
                data={chartData}
                width={Dimensions.get("window").width - 60}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                  backgroundColor: "#ffffff",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(255, 105, 180, ${opacity})`, // pink color
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  barPercentage: 0.5,
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  
                }}
              />
            </View>
          )}
        </CardContent>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    marginTop: 10,
  },
})

export default CardSection

