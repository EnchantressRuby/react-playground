const Dog = (props) => {
    return (
        <div>
            <p style={{padding: "1rem", fontWeight: "bold", fontSize: "2rem"}}>{props.name}</p>
            <img className="img" src={props.img} alt="" />
            <p style={{ backgroundColor: props.color, color: "white", padding: "1rem"}}>Color:{props.color}</p>
            <hr />
        </div>
    )
}

export default Dog;