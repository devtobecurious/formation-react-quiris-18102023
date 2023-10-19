export type SelectWithLabelProps =  {
    label: string,
    items: { id: string, label: string }[]
};

export const SelectWithLabel = (props: SelectWithLabelProps) => {
    const options = props.items.map(item => <option key={item.id} value={item.id}>{item.label}</option>)

    return (
        <>
            <div>
                <label>{props.label}</label>
                <select>
                    {options}
                </select>
            </div>
        </>
    );
}