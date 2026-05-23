import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import SleepCard from '../components/SleepCard';
import { sleepData } from '../data/sleepData';

const SearchScreen = () => {
  // State untuk menyimpan teks pencarian
  const [keyword, setKeyword] = useState('');

  // Filter data berdasarkan input pencarian
  const filteredData = sleepData.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cari Riwayat Tidur</Text>

      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
      />

      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <SleepCard
            key={item.id}
            image={item.image}
            title={item.title}
            duration={item.duration}
            quality={item.quality}
          />
        ))
      ) : (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>
            Data tidur tidak ditemukan
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default SearchScreen;

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

  emptyBox: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  emptyText: {
    color: '#CBD5E1',
  },
});