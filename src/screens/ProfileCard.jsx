import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileCard = ({ nama, umur, email }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Nama: {nama}</Text>
      <Text style={styles.text}>Umur: {umur}</Text>
      <Text style={styles.text}>Email: {email}</Text>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 15,
  },

  text: {
    color: '#FFFFFF',
    marginBottom: 8,
  },
});