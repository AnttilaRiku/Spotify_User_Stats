import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

export default function ProfileScreen({ userData }) {
  return (
    <View style={styles.container}>
      {userData && (
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
            <Text style={styles.country}>Country: {userData.country}</Text>
            <Text style={styles.spotifyId}>Spotify ID: {userData.id}</Text>
            <Text style={styles.followers}>Followers: {userData.followers.total}</Text>
            <Text style={styles.product}>Product: {userData.product}</Text>
            <Text style={styles.uri}>Spotify URI: {userData.uri}</Text>
            <Text style={styles.externalUrl}>
              Spotify Profile: 
              <Text 
                style={styles.link} 
                onPress={() => Linking.openURL(userData.external_urls.spotify)}
              >
                {userData.external_urls.spotify}
              </Text>
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

// Define styles object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userDetails: {
    alignItems: 'center',
    marginTop: 10,
  },
  displayName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  country: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  spotifyId: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  followers: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  product: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  uri: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  externalUrl: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
