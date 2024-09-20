export const SelectionBox = (props) => {
    return (
        <div className="selectbox">
            <label>{props.label}</label>
            <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
                <option value="" disabled>selecione uma opção</option>
                {props.item.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export const CaTin = [
    'Combustivel',
    'Diversos'
]