import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { supabase } from '../config/supabase';

export default function ProfileScreen({ navigation }) {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      getUser();
    }, [])
  );

  const getUser = async () => {

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (user) {
      setUserName(user.user_metadata.full_name);
      setUserEmail(user.email);
    }
  };

  const handleLogout = async () => {

    Alert.alert(
      'Logout',
      'Yakin ingin logout?',
      [
        {
          text: 'Batal',
          style: 'cancel'
        },
        {
          text: 'Logout',
          onPress: async () => {
            await supabase.auth.signOut();
            navigation.replace('Login');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.email}>{userEmail}</Text>
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A'
  },

  header: {
    padding: 30,
    backgroundColor: '#1E293B',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  email: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 5
  },

  menuContainer: {
    padding: 20
  },

  logoutButton: {
    backgroundColor: '#EF4444',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },

  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }

});