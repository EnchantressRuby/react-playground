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
            <button className="btnBlue">{name}</button>
        </div>
    )
}

export default Button