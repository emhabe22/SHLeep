import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleItem = ({ hari, jam, target }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{hari}</Text>
      <Text style={styles.text}>Jam Tidur: {jam}</Text>
      <Text style={styles.time}>Target: {target}</Text>
    </View>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  text: {
    color: '#CBD5E1',
    marginTop: 5,
  },

  time: {
    marginTop: 5,
    color: '#38BDF8',
    fontWeight: 'bold',
  },
});