import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Request = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setLoading(false);
        setData(result.data);
      })
      .catch((err) => {
        toast.error("Bunday joy topilmadi , to'g'ri yozing");
      });
  }, [url]);

  return { loading, data };
};

export default Request;
