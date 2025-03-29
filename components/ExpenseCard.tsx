import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Metrics from "../constants/Metrics"
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import EvilIcons from "@expo/vector-icons/EvilIcons"
import { useRouter } from "expo-router"

interface ExpenseCardProps {
  title: string
  description: string
  amount: number
}

const ExpenseCard = ({ title, description, amount }: ExpenseCardProps) => {
  const router = useRouter()

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton}>
      <EvilIcons
        name="trash"
        size={Metrics.screenHeight * 0.061}
        color="black"
      />
    </TouchableOpacity>
  )
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={() => router.navigate("/ss")}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.amount}>${amount.toFixed(2)}</Text>
          </View>
          <Text
            style={styles.description}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: Metrics.screenWidth * 0.95,
    backgroundColor: "white",
    padding: Metrics.screenWidth * 0.03,
    marginVertical: Metrics.screenHeight * 0.009,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Metrics.screenHeight * 0.01,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  description: {
    width: Metrics.screenWidth * 0.75,
    fontSize: 14,
    color: "#666",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    marginVertical: 10,
    borderRadius: 10,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
})

export default ExpenseCard
