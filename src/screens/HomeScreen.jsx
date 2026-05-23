import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Animated,
} from 'react-native';

import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import SleepCard from '../components/SleepCard';

import { menuData } from '../data/menuData';
import { sleepData } from '../data/sleepData';

const HomeScreen = ({ navigation }) => {
  // State untuk menyimpan data tidur
  const [sleep, setSleep] = useState(sleepData);

  // Variabel animasi untuk efek transparansi
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Variabel animasi untuk efek slide dari bawah ke atas
  const slideAnim = useRef(new Animated.Value(40)).current;

  // Fungsi animasi dijalankan saat halaman pertama kali dibuka
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Fungsi untuk berpindah halaman ketika menu ditekan
  const handleMenu = (menu) => {
    if (menu === 'Tambah Catatan') {
      navigation.navigate('AddSleep');
    } else if (menu === 'Riwayat Tidur') {
      navigation.navigate('SleepSchedule');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* Banner aplikasi dengan animasi */}
      <Animated.Image
        style={[
          styles.banner,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
        source={{
          uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200',
        }}
      />

      {/* Menu utama dengan animasi */}
      <Animated.View
        style={[
          styles.grid,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            title={item.title}
            onPress={() => handleMenu(item.title)}
          />
        ))}
      </Animated.View>

      {/* Data monitoring tidur dengan animasi */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <Text style={styles.sectionTitle}>Monitoring Tidur</Text>

        {sleep.map((item) => (
          <SleepCard
            key={item.id}
            image={item.image}
            title={item.title}
            duration={item.duration}
            quality={item.quality}
          />
        ))}
      </Animated.View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  banner: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
});