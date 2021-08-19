import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setresults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("Something went wrong");
  const [err, seterr] = useState(false);

  const searchApi = async (seachTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: seachTerm,
          location: "san jose",
        },
      });
      setresults(response.data.businesses);
      seterr(false);
    } catch (error) {
      seterr(true);
      seterrorMessage("Sth went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage, err];
};
