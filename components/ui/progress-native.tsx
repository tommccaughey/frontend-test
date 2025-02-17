import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressNative = ({ value }: { value: number }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${value}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b82f6',
  },
});

export default ProgressNative;
