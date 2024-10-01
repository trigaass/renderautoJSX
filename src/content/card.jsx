export const Boxcard = (props) => {
    return (
        <div className="boxcard">
            <img src={props.imagem} />
            <h2>{props.valor}</h2>
            <h3>{props.legenda}</h3>
        </div>
    )
}

export const ResumeBox = (props) =>{
    return(
        <div className="resumo">
            <h3>{props.legenda}</h3>
            <h2>{props.valor}</h2>
        </div>
    )
}