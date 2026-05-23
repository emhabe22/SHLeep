import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const API_URL = 'https://6a12302178d0434e0d5d1fc3.mockapi.io/sleep';

const AddSleepScreen = ({ navigation }) => {
  // State untuk menyimpan input judul tidur
  const [title, setTitle] = useState('');

  // State untuk menyimpan input durasi tidur
  const [duration, setDuration] = useState('');

  // State untuk menyimpan input kualitas tidur
  const [quality, setQuality] = useState('');

  // State untuk menyimpan input gambar
  const [image, setImage] = useState('');

  // Fungsi POST untuk menambahkan data tidur ke MockAPI
  const addSleepData = async () => {
    if (title === '' || duration === '' || quality === '') {
      Alert.alert('Peringatan', 'Data tidur harus diisi');
      return;
    }

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          duration,
          quality,
          image:
            image ||
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200',
        }),
      });

      Alert.alert('Berhasil', 'Catatan tidur berhasil ditambahkan');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Gagal menambahkan data tidur');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Catatan Tidur</Text>

      <TextInput
        style={styles.input}
        placeholder="Judul Tidur"
        placeholderTextColor="#94A3B8"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Durasi Tidur"
        placeholderTextColor="#94A3B8"
        value={duration}
        onChangeText={setDuration}
      />

      <TextInput
        style={styles.input}
        placeholder="Kualitas Tidur"
        placeholderTextColor="#94A3B8"
        value={quality}
        onChangeText={setQuality}
      />

      <TextInput
        style={styles.input}
        placeholder="URL Gambar"
        placeholderTextColor="#94A3B8"
        value={image}
        onChangeText={setImage}
      />

      <TouchableOpacity style={styles.button} onPress={addSleepData}>
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

  input: {
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
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