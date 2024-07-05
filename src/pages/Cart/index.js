import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        ListEmptyComponent={() => (
          <Text style={styles.notFoundProduct}>
            Nenhum item encontrado no carrinho...
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CartItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <Text style={styles.total}>Total: R${total}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  notFoundProduct: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
