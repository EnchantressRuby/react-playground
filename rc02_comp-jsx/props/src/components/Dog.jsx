const Dog = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.img} alt="" />
            <p style={{ backgroundColor: props.color, color: "white" }}>Color:{props.color}</p>
            <hr />
        </div>
    )
}

export default Dog;