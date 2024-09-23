import btnStyles from "./Button.module.css"

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
        <div className={btnStyles.title}>
            <button className={`${btnStyles.btnBlue} ${btnStyles["cursor-pointer"]}`}>{name}</button>
        </div>
    )
}

export default Button