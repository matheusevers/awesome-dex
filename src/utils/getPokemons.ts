import axios from "axios";

const getPokemons = async (url?: string) => {
  const { status, data } = await axios.get<{
    count: number;
    next: string;
    prev: string;
    results: Array<any>;
  }>(url || "https://pokeapi.co/api/v2/pokemon/");

  if (status === 200) {
    const preparedData = await Promise.all(
      data.results.map(async (d) => {
        const pkmnData = await axios.get(d.url);

        return {
          url: d.url,
          ...pkmnData.data,
        };
      })
    );
    return {
      ...data,
      results: preparedData,
    };
  }
};

export default getPokemons;
