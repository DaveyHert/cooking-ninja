import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //   initiate abort controller
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        // Check for fetch error
        if (!res.ok) throw new Error("Failed to fetch data");
        // Store data
        const jsonData = await res.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (err) {
        //   check if error is abort error
        if (err.name === "AbortError") {
          console.log("Fetch request cancelled");
        } else {
          setError(err.message);
        }
        setIsLoading(false);
      }
    };

    fetchData();

    // return ability to abort
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
