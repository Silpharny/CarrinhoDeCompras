import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import ListItem from "../../components/ListItem";

import { CartContext } from "../../contexts/CartContext";

export default function Home() {
  const navigation = useNavigation();
  const { cart, addItemCart, removeItemCart } = useContext(CartContext);

  const [products, setProducts] = useState([
    { id: 1, name: "Coca-Cola", price: 19.9 },
    { id: 2, name: "Chocolate", price: 6.5 },
    { id: 3, name: "Queijo 500g", price: 15 },
    { id: 4, name: "Batata Frita", price: 23.9 },
    { id: 5, name: "Guaraná Lata", price: 6 },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  function handleRemoveCart(item) {
    removeItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          {cart.length >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cart?.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            addToCart={() => handleAddCart(item)}
            removeToCart={() => handleRemoveCart(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 14,
  },
  cartContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
  },
});
