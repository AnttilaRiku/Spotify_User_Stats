import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ userData }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {userData ? (
        <Text>Hello, {userData.display_name}!</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}