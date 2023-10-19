import { FilterBySpecies } from "./FilterBySpecies";

export type FilterGamesProps = {
    clickToSearch: (labelEspece: string) => void
}

export const FilterGames = (props: FilterGamesProps) => {
    const onClickToSearch = () => {
        props.clickToSearch('Nain');
    };

  return (
    <>
      <h1>Filtres</h1>
      <div>
        <div>
            <FilterBySpecies></FilterBySpecies>
        </div>
        <div>
            <button onClick={onClickToSearch}>Rechercher</button>
        </div>
      </div>
    </>
  );
};
