import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SleepCard = ({ image, title, duration, quality }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Durasi: {duration}</Text>
        <Text style={styles.text}>Kualitas: {quality}</Text>
      </View>
    </View>
  );
};

export default SleepCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    borderRadius: 18,
    marginBottom: 15,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 140,
  },

  content: {
    padding: 15,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  text: {
    color: '#CBD5E1',
    fontSize: 13,
  },
});