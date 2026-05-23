import React, { useRef, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

import ScheduleItem from '../components/ScheduleItem';
import { sleepScheduleData } from '../data/sleepScheduleData';

const SleepScheduleScreen = () => {
  // Variabel animasi untuk efek fade in
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Variabel animasi untuk efek slide dari bawah ke atas
  const slideAnim = useRef(new Animated.Value(40)).current;

  // Menjalankan animasi ketika halaman dibuka
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Jadwal Tidur</Text>

      {/* Daftar jadwal tidur dengan animasi */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        {sleepScheduleData.map((item) => (
          <ScheduleItem
            key={item.id}
            hari={item.hari}
            jam={item.jam}
            target={item.target}
          />
        ))}
      </Animated.View>
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
});