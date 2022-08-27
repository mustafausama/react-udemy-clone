import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Abort Controller reference: https://www.youtube.com/watch?v=aKOQtGLT-Yk
    const abrtCnt = new AbortController();

    setTimeout(() => {
      fetch(URL, { signal: abrtCnt.signal })
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

    // useEffect cleanup function to abort the fetch request
    return () => abrtCnt.abort();
  }, [URL]);

  return { data, loading, error };
};

export default useFetch;
