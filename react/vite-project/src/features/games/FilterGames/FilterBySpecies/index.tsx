import { SelectWithLabel } from "../../../../shared/ui/forms/SelectWithLabel";
import { getSpeciesBusiness, getSpeciesRaw } from "../../services/infrastructure";

export const FilterBySpecies = () => {
    const species = getSpeciesBusiness(getSpeciesRaw);
    const items = species.map(esp => ({ id: esp.id.toString(), label: esp.libelle }))

    return (
        <>
            <SelectWithLabel label="Espèces" items={items}></SelectWithLabel>
        </>
    );
}