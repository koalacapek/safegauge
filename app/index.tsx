import { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Metrics from "../constants/Metrics"
import { FlatList } from "react-native-gesture-handler"
import ExpenseCard from "../components/ExpenseCard"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { router } from "expo-router"

export default function index() {
  const [total, setTotal] = useState<number>(0)
  const expenses = [
    {
      id: "1",
      title: "Groceries",
      description: "Woolworths shopping",
      amount: 55.75,
    },
    {
      id: "2",
      title: "Transport",
      description:
        "Opal card top-updddddddddddddddddddddddddddddddddddddddddddd",
      amount: 20.0,
    },
    {
      id: "3",
      title: "Dining",
      description: "Lunch at Sushi Train",
      amount: 35.5,
    },
  ]

  const handleCreate = () => {
    router.navigate("/new")
  }

  // TODO: Change to just fetch total from backend
  useEffect(() => {
    const sum = expenses.reduce((acc, item) => acc + item.amount, 0)
    setTotal(sum)
  }, [expenses])

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Total expenses */}
      <View style={style.totalContainer}>
        <Text style={style.total}>Total Expenses:</Text>
        <Text style={style.amount}>${total}</Text>
      </View>

      {/* Divider */}
      <View
        style={{
          width: "95%",
          height: 1,
          backgroundColor: "black", // Light gray divider
          marginVertical: Metrics.screenHeight * 0.02, // Spacing above & below
          alignSelf: "center",
        }}
      />

      {/* Content */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseCard {...item} />}
      />

      {/* Add button */}
      <View style={style.addButtonContainer}>
        <TouchableOpacity style={style.addButton} onPress={handleCreate}>
          <FontAwesome6 name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  totalContainer: {
    paddingTop: Metrics.screenHeight * 0.03,
    flexDirection: "column",
    alignItems: "center",
    rowGap: Metrics.screenHeight * 0.005,
  },
  total: {
    fontSize: 20,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 24,
  },
  addButtonContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -Metrics.screenWidth * 0.07 }],
    bottom: Metrics.screenHeight * 0.02,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: Metrics.screenWidth * 0.14,
    height: Metrics.screenWidth * 0.14,
    backgroundColor: "#fff",
    borderRadius: Metrics.screenWidth * 0.1,
  },
})
