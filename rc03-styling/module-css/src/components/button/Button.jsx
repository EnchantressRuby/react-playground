// const Button = (props) => {
//     return(
//         <div>
//             <button>{props.name}</button>
//         </div>
//     )
// }


// const Button = (props) => {
//     const {name} = props
//     return(
//         <div>
//             <button>{name}</button>
//         </div>
//     )
// }


const Button = ({name}) => {
    return(
        <div>
            <button>{name}</button>
        </div>
    )
}

export default Button