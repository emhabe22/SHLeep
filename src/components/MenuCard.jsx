import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Baris atas header */}
      <View style={styles.topRow}>
        <Text style={styles.title}>SHLeep</Text>

        {/* Tombol profile */}
        <TouchableOpacity>
          <Text style={styles.icon}>☾</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <TextInput
        style={styles.search}
        placeholder="Cari data tidur..."
        placeholderTextColor="#94A3B8"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  icon: {
    fontSize: 26,
    color: '#38BDF8',
  },

  search: {
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
  },
});