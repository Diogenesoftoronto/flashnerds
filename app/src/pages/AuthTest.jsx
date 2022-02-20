import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("no message");
  const { token } = useAuth();
  console.log(token);

  useEffect(async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(headers);

    try {
      const URL_TEST_API = "http://localhost:3001/api/auth/test";
      const message = await axios.post(URL_TEST_API, {}, { headers });
      console.log(message);
      setMessage(message.data.message);
      // alert(JSON.stringify(message));
      // alert(message.data.message);
    } catch(error) {
      console.log(error.message)
      // setMessage(JSON.stringify(error));
      setMessage(error.message);
      // setMessage("error");
    }
  }, [token]);

  return (
    <div>
      Auth Test:
      <span>{message}</span>
    </div>
  );
}

export default Home;
