export const TextBox= (props) =>{
    return(
        <div className="textbox">
            <label>{props.label}</label>
            <input
                required
                type={props.type}
                placeholder={props.input}
                step={props.type === "number" ? "0.01" : undefined}
                value={props.valor || ""}
                onChange={(e) => props.aoAlterado(e.target.value)}
            />
        </div>
    )
}