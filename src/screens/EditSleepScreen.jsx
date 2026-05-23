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

const EditSleepScreen = ({ route, navigation }) => {
  const { item } = route.params;

  // State untuk menyimpan perubahan judul tidur
  const [title, setTitle] = useState(item.title);

  // State untuk menyimpan perubahan durasi tidur
  const [duration, setDuration] = useState(item.duration);

  // State untuk menyimpan perubahan kualitas tidur
  const [quality, setQuality] = useState(item.quality);

  // State untuk menyimpan perubahan gambar
  const [image, setImage] = useState(item.image);

  // Fungsi PUT untuk mengubah data tidur pada MockAPI
  const updateSleepData = async () => {
    try {
      await fetch(`${API_URL}/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          duration,
          quality,
          image,
        }),
      });

      Alert.alert('Berhasil', 'Data tidur berhasil diperbarui');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Gagal memperbarui data tidur');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Catatan Tidur</Text>

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

      <TouchableOpacity style={styles.button} onPress={updateSleepData}>
        <Text style={styles.buttonText}>Update Catatan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditSleepScreen;

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