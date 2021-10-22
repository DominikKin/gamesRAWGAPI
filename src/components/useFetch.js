import { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);

  const [allData, setAllData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const dataReceived = await response.json();
    setAllData(dataReceived);

    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { allData, loading };
}

export default useFetch;
