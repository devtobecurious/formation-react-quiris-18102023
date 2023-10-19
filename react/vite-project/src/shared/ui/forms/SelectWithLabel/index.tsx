export type SelectWithLabelProps =  {
    label: string,
    items: { id: string, label: string }[],
    onChange: (item: string) => void
};

export const SelectWithLabel = (props: SelectWithLabelProps) => {
    const options = props.items.map(item => <option key={item.id} value={item.id}>{item.label}</option>)

    const changeValue = (event: React.FormEvent<HTMLSelectElement>) => {
        props.onChange(event.currentTarget.value);
    } 

    return (
        <>
            <div>
                <label>{props.label}</label>
                <select onChange={changeValue}>
                    {options}
                </select>
            </div>
        </>
    );
}