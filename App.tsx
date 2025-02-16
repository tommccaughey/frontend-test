import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import HealthCard from './HealthCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All Health Data</Text>
      
      <Text style={styles.sectionTitle}>Today</Text>

      <HealthCard title="Headphone Audio Levels" value="OK" />
      <HealthCard title="Steps" value="1,350 steps" />
      <HealthCard title="Walking + Running Distance" value="0.89 km" />
      <HealthCard title="Flights Climbed" value="3 floors" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
});

export default App;