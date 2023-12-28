import axios from 'axios';
import React, {useEffect, useState} from 'react';

const useFetch = url => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setloading(false);
      console.log('Datalar set edildi!');
    } catch (err) {
      setloading(false);
      setError(err.message);
      console.log('HATA ! Datalar set edilemedi!');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data};
};

export default useFetch;
