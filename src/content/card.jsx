export const Boxcard = (props) => {
    return (
        <div className="boxcard">
            <img src={props.imagem} />
            <h2>{props.valor}</h2>
            <h3>{props.legenda}</h3>
        </div>
    )
}

export const ResumeBox = () =>{
    return(
        <div className="resumo">
            <img src="resumo.png" />
        </div>
    )
}