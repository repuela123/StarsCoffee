import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';

// Sample data
const dailySpecials = [
  { id: '1', name: 'Pumpkin Spice Latte', image: require('../../assets/mocha.jpg'), description: 'A seasonal favorite with pumpkin and spices.' },
];

const recommendedItems = [
  { id: '1', name: 'Caffè Latte', image: require('../../assets/matcha.jpg'), description: 'Rich espresso with steamed milk.' },
];

const locationOffers = [
  { id: '1', offer: '20% off on all pastries today!' },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Our Stars Coffee!</Text>
      <TextInput style={styles.searchInput} placeholder="Search for your favorite items..." />

      <Text style={styles.sectionTitle}>Daily Specials</Text>
      <FlatList
        data={dailySpecials}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuName}>{item.name}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.offerContainer}>
        <Text style={styles.offerHeader}>Location-Based Offers</Text>
        {locationOffers.map(offer => (
          <Text key={offer.id} style={styles.offerText}>{offer.offer}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recommended Items</Text>
      <FlatList
        data={recommendedItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuName}>{item.name}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.buttonText}>Order Ahead</Text>
      </TouchableOpacity>

      <View style={styles.statusContainer}>
        <Text style={styles.statusHeader}>Order Status</Text>
        <Text style={styles.statusText}>Your order is: <Text style={styles.statusBold}>Preparing</Text></Text>
        <Text style={styles.statusText}>Estimated Wait Time: <Text style={styles.statusBold}>10 minutes</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ede0d4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    marginRight: 15,
    width: 150,
  },
  menuImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  menuName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  menuDescription: {
    fontSize: 12,
  },
  offerContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  offerHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerText: {
    fontSize: 16,
  },
  orderButton: {
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
  statusContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  statusHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 16,
  },
  statusBold: {
    fontWeight: 'bold',
  },
});

export default Home;
