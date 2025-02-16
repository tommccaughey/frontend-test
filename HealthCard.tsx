import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HealthCardProps {
  title: string;
  value: string;
}

const HealthCard: React.FC<HealthCardProps> = ({ title, value }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#007AFF',
    fontSize: 16,
    marginBottom: 8,
  },
  cardValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HealthCard;