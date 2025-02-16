import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ProfessionalDesignNative from "./app/designs/professional-design-native"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfessionalDesignNative />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00000',
    marginTop: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00000',
    marginBottom: 16,
  },
});

export default App;