import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Animated, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Sample favorites data
const favoriteItems = [
  { id: '1', name: 'Iced Mocha', image: require('../../assets/drink.png'), description: 'Delicious cold mocha with chocolate syrup.' },
  { id: '2', name: 'Caramel Latte', image: require('../../assets/caramel.jpg'), description: 'Smooth espresso with caramel syrup.' },
  { id: '3', name: 'Vanilla Cold Brew', image: require('../../assets/matcha.jpg'), description: 'Rich espresso with vanilla syrup.' },
];

const Favorite = () => {
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState(favoriteItems);
  const [ratings, setRatings] = useState({}); // Store ratings for items
  const animatedOpacity = new Animated.Value(0); // Animation for fade-in effect

  // Filtering the favorite items based on search text
  const filteredFavorites = favorites.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleRating = (itemId, rating) => {
    setRatings(prevRatings => ({ ...prevRatings, [itemId]: rating }));
    Alert.alert('Rating Submitted', `You rated ${rating} stars!`);
  };

  const renderFavoriteItem = ({ item }) => (
    <Animated.View style={[styles.favoriteItem, { opacity: animatedOpacity }]}>
      <Image source={item.image} style={styles.favoriteImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>

        {/* Rating system */}
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map(star => (
            <TouchableOpacity key={star} onPress={() => handleRating(item.id, star)}>
              <Icon
                name={ratings[item.id] >= star ? 'star' : 'star-o'}
                size={24}
                color={ratings[item.id] >= star ? '#f1c40f' : '#ccc'}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Animated.View>
  );

  const triggerAnimation = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Trigger animation when component mounts
  React.useEffect(() => {
    triggerAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Favorite Items</Text>

      {/* Search bar for filtering items */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search favorites..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Top Favorites section */}
      <Text style={styles.sectionTitle}>Top Favorites</Text>
      <FlatList
        data={filteredFavorites.slice(0, 2)} // Display top 2 items as "Top Favorites"
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.favoriteList}
      />

      {/* All Favorites section */}
      <Text style={styles.sectionTitle}>All Favorites</Text>
      <FlatList
        data={filteredFavorites}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.favoriteList}
      />
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
    color: '#7f5539',
    marginBottom: 15,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9c6644',
    marginVertical: 10,
  },
  favoriteList: {
    marginVertical: 10,
  },
  favoriteItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  favoriteImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7f5539',
  },
  itemDescription: {
    fontSize: 12,
    color: '#7f5539',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default Favorite;
