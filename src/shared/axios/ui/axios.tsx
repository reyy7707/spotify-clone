import axios from 'axios';

const accessToken = localStorage.getItem('spotifyAccessToken');

export const getUserProfile = async () => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile', error);
    throw error;
  }
};
