import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import getPokemons from "../utils/getPokemons";
import logo from "../assets/pkmnlogo.png";

const App = () => {
  const [pokemons, setPokemons] = useState<any>();
  const [count, setCount] = useState<any>();
  const [prev, setPrev] = useState<any>();
  const [next, setNext] = useState<any>();

  const fetchData = async (url?: string) => {
    const response = await getPokemons(url);
    console.log(response);
    setPokemons(response?.results);
    setCount(response?.count);
    setNext(response?.next);
    setPrev(response?.prev);
  };

  const changePage = (url: string) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchData(url);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-4 lg:px-24">
      <div className="flex justify-center">
        <img className="max-w-xs lg:max-w-2xl" src={logo} alt="" />
      </div>
      <div className="grid grid-cols-1  gap-y-8 lg:grid-cols-4 lg:gap-x-4">
        {pokemons &&
          pokemons.map((p: { name: string }, index: number) => (
            <Card key={index} pokemon={p} />
          ))}
      </div>
      <div className="flex justify-center my-8">
        <p className="mr-6 cursor-pointer" onClick={() => changePage(prev)}>
          {"< prev"}
        </p>
        <p className="cursor-pointer" onClick={() => changePage(next)}>
          {"next >"}
        </p>
      </div>
    </div>
  );
};

export default App;
