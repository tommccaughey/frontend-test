import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfessionalDesignNative = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Professional Design</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Heart Rate</Text>
        <Text style={styles.cardContent}>72 BPM</Text>
        <Text style={styles.cardSubContent}>Normal range</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Steps</Text>
        <Text style={styles.cardContent}>8,439</Text>
        <Text style={styles.cardSubContent}>Goal: 10,000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sleep</Text>
        <Text style={styles.cardContent}>7h 23m</Text>
        <Text style={styles.cardSubContent}>Recommended: 8h</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Activity Summary</Text>
        <View style={styles.graphPlaceholder}>
          <Text style={styles.cardSubContent}>Graph Placeholder</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workout Log</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text>Running</Text>
            <Text style={styles.listItemDetail}>30 min</Text>
          </Text>
          <Text style={styles.listItem}>
            <Text>Strength Training</Text>
            <Text style={styles.listItemDetail}>45 min</Text>
          </Text>
          <Text style={styles.listItem}>
            <Text>Yoga</Text>
            <Text style={styles.listItemDetail}>60 min</Text>
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nutrition Tracker</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text>Calories</Text>
            <Text style={styles.listItemDetail}>1,200 / 2,000</Text>
          </Text>
          <Text style={styles.listItem}>
            <Text>Protein</Text>
            <Text style={styles.listItemDetail}>75g / 100g</Text>
          </Text>
          <Text style={styles.listItem}>
            <Text>Carbs</Text>
            <Text style={styles.listItemDetail}>150g / 250g</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 16,
        color: '#555',
    },
    cardSubContent: {
        fontSize: 14,
        color: '#888',
    },
    graphPlaceholder: {
        height: 300,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        marginTop: 8,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        color: '#555',
    },
    listItemDetail: {
        color: '#888',
    },
});

export default ProfessionalDesignNative;
