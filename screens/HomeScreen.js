import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../style/style'

export default function HomeScreen({ userData, topTracks }) {
  return (
    <View style={styles.container}>
      {userData && (
        <View style={styles.userInfoContainer}>
          {userData.images?.[0]?.url && (
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
      )}
      
      <Text style={styles.topTracksTitle}>Your Top Tracks:</Text>
      {topTracks && topTracks.length > 0 ? (
        <FlatList
          data={topTracks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.trackContainer}>
              {item.album?.images?.[0]?.url && (
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
      ) : (
        <Text>No top tracks available.</Text>
      )}
    </View>
  );
}

