import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

import { supabase } from '../config/supabase';

export default function AddSleepScreen({ navigation }) {

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [quality, setQuality] = useState('');
  const [image, setImage] = useState('');

  const saveSleepData = async () => {

    if (
      title === '' ||
      duration === '' ||
      quality === '' ||
      image === ''
    ) {
      Alert.alert('Error', 'Semua data wajib diisi');
      return;
    }

    const { error } = await supabase
      .from('sleep')
      .insert([
        {
          title: title,
          duration: duration,
          quality: quality,
          image: image
        }
      ]);

    if (error) {
      console.log(error);
      Alert.alert('Error', 'Gagal menambahkan catatan tidur');
    } else {
      Alert.alert('Berhasil', 'Catatan tidur berhasil ditambahkan');
      setTitle('');
      setDuration('');
      setQuality('');
      setImage('');
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={styles.container}>

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

      <TouchableOpacity
        style={styles.button}
        onPress={saveSleepData}
      >
        <Text style={styles.buttonText}>
          Simpan Catatan
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    paddingTop: 50
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15
  },

  button: {
    backgroundColor: '#38BDF8',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },

  buttonText: {
    color: '#0F172A',
    fontWeight: 'bold'
  }

});