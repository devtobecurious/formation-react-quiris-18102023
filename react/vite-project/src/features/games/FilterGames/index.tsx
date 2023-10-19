import { useState } from "react";
import { FilterBySpecies } from "./FilterBySpecies";

export type FilterGamesProps = {
    clickToSearch: (labelEspece: string) => void
}

export const FilterGames = (props: FilterGamesProps) => {
    const [specie, setSpecie] = useState('');

    const onClickToSearch = () => {
        props.clickToSearch(specie);
    };

    const changeSpecie = (value: string) => {
      setSpecie(value);
    }

  return (
    <>
      <h1>Filtres</h1>
      <div>
        <div>
            <FilterBySpecies onChangeSpecie={changeSpecie}></FilterBySpecies>
        </div>
        <div>
            <button onClick={onClickToSearch}>Rechercher</button>
        </div>
      </div>
    </>
  );
};
