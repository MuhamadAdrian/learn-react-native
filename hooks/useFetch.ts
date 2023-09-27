import { useState, useEffect } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
import { RAPID_API_KEY } from "@env";

type QueryParams = {
  query?: string;
  page?: string | number;
  num_pages?: string | number;
  [x: string]: any;
};

const useFetch = <T = Record<string, string>>(
  endpoint?: string,
  query?: QueryParams
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { page, query: search, ...query },
    headers: {
      "X-RapidAPI-Key": `${RAPID_API_KEY}`,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request<any, AxiosResponse<{ data: T }>, any>(
        options
      );
      setData(res.data.data);
    } catch (error: any) {
      setError(error);
      alert("There  is an error");
      throw new Error(`Failed to fetch data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    reFetch,
    search,
    page,
    setSearch,
    setPage,
  };
};

export default useFetch;
