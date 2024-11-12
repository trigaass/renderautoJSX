export const Buttn = ({onClick, btn}) => {
    return (
        <div className='bttn'>
            <button onClick={onClick}>
                {btn}
            </button>
        </div>
    )
}