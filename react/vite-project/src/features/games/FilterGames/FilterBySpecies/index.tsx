import { SelectWithLabel } from "../../../../shared/ui/forms/SelectWithLabel";
import { getSpeciesBusiness, getSpeciesRaw } from "../../services/infrastructure";

export const FilterBySpecies = (props: {onChangeSpecie: (value: string) => void}) => {
    const species = getSpeciesBusiness(getSpeciesRaw);
    const items = species.map(esp => ({ id: esp.id.toString(), label: esp.libelle }))

    return (
        <>
            <SelectWithLabel onChange={props.onChangeSpecie} label="Espèces" items={items}></SelectWithLabel>
        </>
    );
}