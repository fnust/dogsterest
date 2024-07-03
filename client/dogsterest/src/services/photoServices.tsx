const baseURL = 'http://localhost:3000';
export const getPhotos = async () => {
  const response = await fetch(`${baseURL}/photo`);
  if (!response.ok) {
    return [];
  }
  return await response.json();
};

export const getLikedPhotos = async () => {
  const response = await fetch(`${baseURL}/photo/liked`);
  if (!response.ok) {
    return [];
  }
  return await response.json();
};

export const putLikes = async (id: string, likes: number) => {
  const response = await fetch(`${baseURL}/photo/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ likes }),
  });
  if (!response.ok) {
    return (await response.json()).message;
  }
  return await response.json();
};
