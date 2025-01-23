// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from '../api/axiosConfig';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      source.cancel('Component unmounted');
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
