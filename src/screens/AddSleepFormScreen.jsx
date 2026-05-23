import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddSleepFormScreen = () => {
  // State untuk menyimpan input jam tidur
  const [jamTidur, setJamTidur] = useState('');

  // State untuk menyimpan input jam bangun
  const [jamBangun, setJamBangun] = useState('');

  // State untuk menyimpan input durasi tidur
  const [durasi, setDurasi] = useState('');

  // State untuk menyimpan input kualitas tidur
  const [kualitas, setKualitas] = useState('');

  // Fungsi untuk memproses form ketika tombol ditekan
  const handleSubmit = () => {
    if (jamTidur === '' || jamBangun === '' || durasi === '' || kualitas === '') {
      Alert.alert('Peringatan', 'Semua data harus diisi');
    } else {
      Alert.alert(
        'Berhasil',
        `Catatan tidur berhasil disimpan\nJam Tidur: ${jamTidur}\nJam Bangun: ${jamBangun}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Catatan Tidur</Text>

      <Text style={styles.label}>Jam Tidur</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 22:00"
        placeholderTextColor="#94A3B8"
        value={jamTidur}
        onChangeText={setJamTidur}
        keyboardType="default"
      />

      <Text style={styles.label}>Jam Bangun</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 06:00"
        placeholderTextColor="#94A3B8"
        value={jamBangun}
        onChangeText={setJamBangun}
        keyboardType="default"
      />

      <Text style={styles.label}>Durasi Tidur</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 8 Jam"
        placeholderTextColor="#94A3B8"
        value={durasi}
        onChangeText={setDurasi}
        maxLength={20}
      />

      <Text style={styles.label}>Kualitas Tidur</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Baik"
        placeholderTextColor="#94A3B8"
        value={kualitas}
        onChangeText={setKualitas}
        maxLength={30}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan Catatan Tidur</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddSleepFormScreen;

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

  label: {
    color: '#CBD5E1',
    marginBottom: 6,
    fontWeight: 'bold',
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
    marginTop: 10,
  },

  buttonText: {
    color: '#0F172A',
    fontWeight: 'bold',
  },
});