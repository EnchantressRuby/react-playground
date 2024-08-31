import Name from "./Name"

// const Dog = (props) => {
//     return (
//         <div>
//             <p style={{padding: "1rem", fontWeight: "bold", fontSize: "2rem"}}>{props.name}</p>
//             <img className="img" src={props.img} alt="" />
//             <p style={{ backgroundColor: props.color, color: "white", padding: "1rem"}}>Color:{props.color}</p>
//             <hr />
//         </div>
//     )
// }

const Dog = ({ name, img, color }) => {
    //? dest
    // const { name, img, color } = props
    return (
        <div>
            <Name name={name} />
            {/* <p style={{ padding: "1rem", fontWeight: "bold", fontSize: "2rem" }}>{name}</p> */}
            <img className="img" src={img} alt="" />
            <p style={{ backgroundColor: color, color: "white", padding: "1rem" }}>Color:{color}</p>
            <hr />
        </div>
    )
}

export default Dog;