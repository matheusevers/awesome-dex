import React from "react";

type keyString = {
  [key: string]: string;
};

const bgColor: keyString = {
  fire: "bg-orange-500",
  grass: "bg-green-400",
  water: "bg-blue-500",
  bug: "bg-lime-400",
  flying: "bg-cyan-100",
  normal: "bg-gray-400",
  poison: "bg-purple-500",
  electric: "bg-yellow-300",
  ground: "bg-yellow-700",
  fairy: "bg-fuchsia-300",
  fighting: "bg-amber-800",
  psychic: "bg-fuchsia-500",
  rock: "bg-yellow-600",
  steel: "bg-slate-500",
  ice: "bg-cyan-300",
  ghost: "bg-violet-500",
  dragon: "bg-rose-700",
  dark: "bg-zinc-800",
};

const Card = (pokemon: any, key: number) => {
  return (
    <div
      key={key}
      className="flex flex-col items-center bg-[#edede9] rounded-2xl hover:cursor-pointer overflow-hidden shadow-lg "
    >
      <img
        className="object-contain h-48 w-48 "
        src={pokemon.pokemon.sprites.other["official-artwork"].front_default}
        alt="pkmn"
      />
      <div className="bg-[#d6ccc2] w-full h-full flex flex-col items-center">
        <p className="text-xl font-semi-bold capitalize">
          {pokemon.pokemon.name}
        </p>

        <div className="flex w-full justify-around pb-2">
          {pokemon.pokemon.types.map(
            (
              t: { slot: number; type: { name: "string"; url: "string" } },
              index: number
            ) => (
              <div
                key={index}
                className={`${
                  bgColor[t.type.name]
                } rounded-xl w-20 text-center`}
              >
                {t.type.name}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
