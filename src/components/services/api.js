import axios from 'axios';

const API_KEY = '32114919-b1da84808ca0f604bcef4a7c4';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
