import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

const API_URL = 'https://6a12302178d0434e0d5d1fc3.mockapi.io/sleep';

const SleepScheduleScreen = ({ navigation }) => {
  // State untuk menyimpan data tidur dari API
  const [sleepData, setSleepData] = useState([]);

  // State untuk menampilkan loading saat mengambil data
  const [loading, setLoading] = useState(true);

  // Fungsi GET untuk mengambil data tidur dari MockAPI
  const getSleepData = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      const data = await response.json();

      setSleepData(data);
    } catch (error) {
      Alert.alert('Error', 'Gagal mengambil data tidur');
    } finally {
      setLoading(false);
    }
  };

  // Fungsi DELETE untuk menghapus data tidur berdasarkan id
  const deleteSleepData = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      Alert.alert('Berhasil', 'Data tidur berhasil dihapus');
      getSleepData();
    } catch (error) {
      Alert.alert('Error', 'Gagal menghapus data tidur');
    }
  };

  // Fungsi konfirmasi sebelum menghapus data
  const handleDelete = (id) => {
    Alert.alert(
      'Hapus Data',
      'Apakah kamu yakin ingin menghapus catatan tidur ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => deleteSleepData(id),
        },
      ]
    );
  };

  // Fungsi untuk pindah ke halaman edit data
  const handleEdit = (item) => {
    navigation.navigate('EditSleep', { item });
  };

  // Data akan diambil saat halaman pertama kali dibuka
  useEffect(() => {
    getSleepData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Riwayat Tidur</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddSleep')}
      >
        <Text style={styles.addButtonText}>Tambah Catatan Tidur</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#38BDF8" />
      ) : (
        sleepData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleEdit(item)}
            onLongPress={() => handleDelete(item.id)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>Durasi: {item.duration}</Text>
            <Text style={styles.cardText}>Kualitas: {item.quality}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default SleepScheduleScreen;

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
    marginBottom: 15,
  },

  addButton: {
    backgroundColor: '#38BDF8',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },

  addButtonText: {
    color: '#0F172A',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#1E293B',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  cardText: {
    color: '#CBD5E1',
    marginBottom: 4,
  },
});