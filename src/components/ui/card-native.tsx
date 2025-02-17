import type React from "react"
import type { ReactNode } from "react"
import { View, Text, StyleSheet } from "react-native"

interface CardProps {
  children: ReactNode
  style?: object
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>
}

export const CardHeader: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.cardHeader, style]}>{children}</View>
}

export const CardTitle: React.FC<CardProps> = ({ children, style }) => {
  return <Text style={[styles.cardTitle, style]}>{children}</Text>
}

export const CardContent: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.cardContent, style]}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    // Add any specific styles for content
  },
})

