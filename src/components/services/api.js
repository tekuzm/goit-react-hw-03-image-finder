import axios from 'axios';

const API_KEY = '32114919-b1da84808ca0f604bcef4a7c4';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = async q => {
  const response = await axios(
    `?q=${q}&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`,
    {
      params: {
        q,
        key: API_KEY,
      },
    }
  );

  console.log(response);
  return;
};

export default fetchImages;
