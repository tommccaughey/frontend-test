import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  children: ReactNode;
}

interface CardHeaderProps {
  children: ReactNode;
}

interface CardTitleProps {
  children: ReactNode;
}

interface CardContentProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <View style={styles.cardHeader}>{children}</View>;
};

export const CardTitle = ({ children }: CardTitleProps) => {
  return <Text style={styles.cardTitle}>{children}</Text>;
};

export const CardContent = ({ children }: CardContentProps) => {
  return <View style={styles.cardContent}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
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
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContent: {
    marginTop: 8,
  },
});

export default Card;