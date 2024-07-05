import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

export default function ListItem({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
      <TouchableOpacity onPress={addToCart}>
        <Feather name="plus-circle" size={30} color="#006688" />
      </TouchableOpacity>
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
  title: {},
});
