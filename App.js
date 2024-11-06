import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { authenticateWithSpotify } from './components/spotifyAuth';
import { fetchUserData, fetchUserTopTracks } from './components/spotifyApi';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  const handleLogin = async () => {
    const accessToken = await authenticateWithSpotify();
    setToken(accessToken);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const userData = await fetchUserData(token);
        console.log('User Data:', userData); // Log user data
        const topTracks = await fetchUserTopTracks(token);
        console.log('Top Tracks:', topTracks); // Log top tracks
        setUserData(userData);
        setTopTracks(topTracks);
      }
    };
    fetchData();
  }, [token]);

  return (
    <View style={{ flex: 1 }}>
      {!userData ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Login with Spotify" onPress={handleLogin} />
        </View>
      ) : (
        <HomeScreen userData={userData} topTracks={topTracks} />
      )}
    </View>
  );
}