import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Cannot fetch data from this resource");
          } else return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 500);
  }, [URL]);

  return { data, loading, error };
};

export default useFetch;
