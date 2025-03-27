// Replace with your album ID and access token
const albumId = 'w2q9yRA';  // Example: 'abc123'
let data = '';
// Function to fetch images from an Imgur album
async function fetchAlbumImages() {
  const url = `https://api.imgur.com/3/album/${albumId}/images`;

  try {
    // Fetch the album images
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`  // Use the access token for authentication
      }
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch album images');
    }

    // Parse the JSON response
     data = await response.json();

    // Log the images or process them as needed
    if (data.success) {
      console.log('Album Images:', data.data);
      // Iterate over the images and log each image's link
      data.data.forEach(image => {
        console.log(image.link);  // The URL of the image
      });
    } else {
      console.error('Error: ', data);
    }
  } catch (error) {
    console.error('Error fetching album images:', error);
  }
}

// Call the function to fetch the images
fetchAlbumImages();
