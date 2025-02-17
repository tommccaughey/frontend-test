import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const CardHeader = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return <View style={[styles.cardHeader, style]}>{children}</View>;
};

const CardTitle = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return <Text style={[styles.cardTitle, style]}>{children}</Text>;
};

const CardDescription = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return <Text style={[styles.cardDescription, style]}>{children}</Text>;
};

const CardContent = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return <View style={[styles.cardContent, style]}>{children}</View>;
};

const CardFooter = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return <View style={[styles.cardFooter, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#888',
  },
  cardContent: {
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
