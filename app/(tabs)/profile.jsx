import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [userName, setUserName] = useState('Arniel Repuela');
  const [userBio, setUserBio] = useState('Coffee Lover | Foodie | Traveler');

  const user = {
    profileImage: require('../../assets/niel.jpg'), // Update the path as needed
    favoriteItems: 12,
    friends: 150,
  };

  const handleSaveProfile = () => {
    setModalVisible(false);
    // Here you could implement logic to save the updated profile to your backend or state management
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={user.profileImage} style={styles.profileImage} />
      
      {/* User Info */}
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userBio}>{userBio}</Text>

      {/* User Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.favoriteItems}</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.friends}</Text>
          <Text style={styles.statLabel}>Friends</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Editing Profile */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            
            <TextInput 
              style={styles.input}
              placeholder="Enter Name"
              value={userName}
              onChangeText={(text) => setUserName(text)}
              placeholderTextColor="#9c6644"
            />
            <TextInput 
              style={styles.input}
              placeholder="Enter Bio"
              value={userBio}
              onChangeText={(text) => setUserBio(text)}
              placeholderTextColor="#9c6644"
            />
            
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ede0d4', // Light beige background
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ddb892', // Warm tan border
    marginBottom: 15,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7f5539', // Dark brown text
    marginBottom: 5,
  },
  userBio: {
    fontSize: 16,
    color: '#9c6644', // Medium brown for bio text
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#e6ccb2', // Light tan background for stats
    borderRadius: 10,
    padding: 15,
    shadowColor: '#9c6644', // Medium brown shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7f5539', // Dark brown for stat values
    marginBottom: 3,
  },
  statLabel: {
    fontSize: 14,
    color: '#9c6644', // Medium brown for stat labels
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    backgroundColor: '#7f5539', // Dark brown for buttons
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#9c6644', // Medium brown shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  actionText: {
    color: '#ede0d4', // Light beige text for buttons
    fontWeight: 'bold',
    fontSize: 16,
  },
  /* Modal Styles */
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#ede0d4',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7f5539',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#9c6644',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#e6ccb2',
    marginBottom: 15,
    color: '#7f5539', // Input text color
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#7f5539',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  saveButtonText: {
    color: '#ede0d4',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#9c6644',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: '#ede0d4',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
