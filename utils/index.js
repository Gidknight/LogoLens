export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

export const getRandom = (length = 4, array) => {
  const numObjects = Math.min(length, array.length); // Ensure we don't exceed the array length
  const randomIndices = [];

  // Generate 5 unique random indices
  while (randomIndices.length < numObjects) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  // Get the objects at the random indices
  const randomObjects = randomIndices.map((index) => array[index]);
  return randomObjects;
};

async function readImageFile(imageFile) {
  // Read the image file as a data URL
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      console.log("image file read");
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(imageFile);
  });
}
