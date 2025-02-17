import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [7000, 8500, 6800, 9200, 7600, 8000, 8439],
    },
  ],
};

const Steps = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  chartContainer: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default Steps;