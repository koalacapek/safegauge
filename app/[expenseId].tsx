import Metrics from "@/constants/Metrics"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function EditExpense() {
  const router = useRouter()
  const { expenseId } = useLocalSearchParams()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!expenseId) return
  }, [expenseId])

  const handleSave = () => {
    // TODO: Update logic here
    router.back()
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Enter expense title"
        />
      </View>

      <View>
        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          placeholder="Enter description"
        />
      </View>

      <View>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="decimal-pad"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Metrics.screenHeight * 0.03,
    paddingTop: Metrics.screenHeight * 0.05,
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: Metrics.screenHeight * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: Metrics.screenWidth * 0.03,
    marginTop: Metrics.screenHeight * 0.01,
  },
  saveButton: {
    marginTop: Metrics.screenHeight * 0.04,
    backgroundColor: "blue",
    padding: Metrics.screenWidth * 0.035,
    borderRadius: 8,
    alignItems: "center",
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
