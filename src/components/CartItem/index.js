import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function CartItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  function handleIncrease() {
    addAmount();
    setAmount((item) => item + 1);
  }

  function handleDecrease() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
    }
    setAmount((item) => item - 1);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.price}</Text>
      </View>

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleIncrease}>
          <Feather name="plus" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.textAmount}>{amount}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleDecrease}>
          <Feather name="minus" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 2,
    borderColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },

  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
