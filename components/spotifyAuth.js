import * as AuthSession from 'expo-auth-session';

const CLIENT_ID = '63b34a4e691c4c81bc0eb33debea5e02';
const REDIRECT_URI = AuthSession.makeRedirectUri({
  scheme: 'spotifyuserstats',
  useProxy: true,
});

// This is your redirect URI. Add Redirect URI to developer dashboard. (ie. https://auth.expo.dev/@your-expo-username/Spotify_User_Stats)
console.log('Redirect URI:', REDIRECT_URI);


const SCOPE = 'user-read-private user-read-email playlist-read-private';

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
};

export async function authenticateWithSpotify() {
  const request = new AuthSession.AuthRequest({
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scopes: SCOPE.split(' '),
    responseType: AuthSession.ResponseType.Token,
  });

  await request.makeAuthUrlAsync(discovery);
  const authResult = await request.promptAsync(discovery);

  if (authResult.type === 'success') {
    return authResult.params.access_token;
  } else {
    console.log('Spotify Authentication failed:', authResult);
    return null;
  }
}