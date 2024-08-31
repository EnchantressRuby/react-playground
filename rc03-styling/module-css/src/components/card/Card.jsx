import Button from "../button/Button"
import data from "../../data"

const Card = () => {
    console.log(data);
    return (
    <div>
        <h1>{data[0].name}</h1>
        <img src={data[0].img} alt="" />
        <Button name={data[0].btnName} />
    </div>
)
}

export default Card