import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { authenticateWithSpotify } from './components/spotifyAuth';
import { fetchUserData } from './components/spotifyApi';

export default function App() {

  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleLogin = async () => {
    const accessToken = await authenticateWithSpotify();
    setToken(accessToken);
  };

  useEffect(() => {
    if (token) {
      fetchUserData(token).then(data => setUserData(data));
    }
  }, [token]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Login with Spotify" onPress={handleLogin} />
      {userData ? (
        <Text>Welcome, {userData.display_name}</Text>
      ) : (
        <Text>Please log in</Text>
      )}
    </View>
  );
}