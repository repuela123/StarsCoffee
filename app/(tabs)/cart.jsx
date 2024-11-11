import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Dark Caramel', quantity: 1, price: 4.50 },
    { id: '2', name: 'Vanilla Cold Brew', quantity: 2, price: 5.00 },
  ]);

  const [orderMessage, setOrderMessage] = useState(''); // State to manage success message

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setOrderMessage('Successful Order!'); // Set the success message when the button is clicked
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => {
                const newItems = cartItems.map(cartItem => {
                  if (cartItem.id === item.id && cartItem.quantity > 1) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                  }
                  return cartItem;
                });
                setCartItems(newItems);
              }}>
                <Text style={styles.adjustButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => {
                const newItems = cartItems.map(cartItem => {
                  if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                  }
                  return cartItem;
                });
                setCartItems(newItems);
              }}>
                <Text style={styles.adjustButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      
      {/* Checkout button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
      </TouchableOpacity>

      {/* Display success message */}
      {orderMessage ? <Text style={styles.successMessage}>{orderMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ede0d4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cartItemName: {
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adjustButton: {
    fontSize: 18,
    padding: 5,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  price: {
    fontSize: 18,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: '#e6ccb2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Cart;
