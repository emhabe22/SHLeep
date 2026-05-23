import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ProfileCard from '../components/ProfileCard';
import { profileData } from '../data/profileData';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>

      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200',
        }}
      />

      <ProfileCard
        nama={profileData.nama}
        umur={profileData.umur}
        email={profileData.email}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
});