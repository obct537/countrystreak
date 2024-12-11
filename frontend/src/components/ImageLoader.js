import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';

import axios from 'axios';
import { useState } from 'react';

const ImageLoader = (props) => {

  const {apiUrl, ids, ...other} = props;
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchImages = async (idList) => {
    setLoading(true);
    try {
      const images = {};
      for (const id of idList) {
        const response = await axios.get(`${apiUrl}/${id}`);
        images[id] = response.data.imageUrl;
      }
      setImages(images);
    } catch (error) {
      console.error('Error fetching bollard images:', error);
    } finally {
    setLoading(false);
    }
  };

  fetchImages(ids);

  return(
    <Box>
      {ids.map((id) => (
        <div key={id}>
        loading || !images[id] ? (<Skeleton variant="rectangular" />) : (<img alt={id} src=""></img>)
        </div>
      ))}
    </Box>
  )

}

export default ImageLoader;