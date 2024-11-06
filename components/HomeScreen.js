import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ userData, topTracks }) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        {userData.images.length > 0 && (
          <Image
            source={{ uri: userData.images[0].url }}
            style={styles.profileImage}
          />
        )}
        <View style={styles.userDetails}>
          <Text style={styles.displayName}>Hello, {userData.display_name}!</Text>
          <Text style={styles.email}>{userData.email}</Text>
        </View>
      </View>
      
      <Text style={styles.topTracksTitle}>Your Top Tracks:</Text>
      <FlatList
        data={topTracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.trackContainer}>
            {item.album.images.length > 0 && (
              <Image
                source={{ uri: item.album.images[0].url }}
                style={styles.trackImage}
              />
            )}
            <Text style={styles.trackText}>
              {item.name} by {item.artists.map(artist => artist.name).join(', ')}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  displayName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  topTracksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trackImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  trackText: {
    fontSize: 16,
  },
});