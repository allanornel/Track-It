import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Historico() {
  const [histHabitos, setHistHabitos] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response);
      setHistHabitos(response.data);
    });
    promise.catch((error) => console.log(error.data));
  }, [user.token]);

  return (
    <>
      <Header />
      {histHabitos.map((habito) => {
        return (
          <>
            <p>Day: {habito.day} </p>
            {habito.habits.map((habit) => (
              <p>
                id: {habit.id} name: {habit.name} date: {habit.date} weekDay:{" "}
                {habit.weekDay} historyId: {habit.historyId}
              </p>
            ))}
          </>
        );
      })}
      <Footer />
    </>
  );
}
