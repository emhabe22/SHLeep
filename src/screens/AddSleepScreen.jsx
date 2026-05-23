import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import InputField from '../components/InputField';

const AddSleepScreen = () => {
  const [jamTidur, setJamTidur] = useState('');
  const [durasi, setDurasi] = useState('');
  const [kualitas, setKualitas] = useState('');

  // Fungsi untuk menambahkan catatan tidur
  const handleAdd = () => {
    Alert.alert('Berhasil', 'Catatan tidur berhasil ditambahkan');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Catatan Tidur</Text>

      <InputField
        placeholder="Jam Tidur"
        value={jamTidur}
        onChangeText={setJamTidur}
      />

      <InputField
        placeholder="Durasi Tidur"
        value={durasi}
        onChangeText={setDurasi}
      />

      <InputField
        placeholder="Kualitas Tidur"
        value={kualitas}
        onChangeText={setKualitas}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Simpan Catatan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddSleepScreen;

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

  button: {
    backgroundColor: '#38BDF8',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0F172A',
    fontWeight: 'bold',
  },
});