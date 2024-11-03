//Client ID: 63b34a4e691c4c81bc0eb33debea5e02
// Client Secret: b949c921b84f4c9c994bd562766a9033

export async function fetchUserData(token) {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

