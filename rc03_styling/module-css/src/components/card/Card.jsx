import Button from "../button/Button"
import data from "../../data"
import cardStyles from "./Card.module.css"
// import "./Card.css"

const Card = () => {
    console.log(data);
    return (
        <div>
            {/*             
        <h1>{data[0].name}</h1>
        <img src={data[0].img} alt="" />
        <Button name={data[0].btnName} />

        <h1>{data[1].name}</h1>
        <img src={data[1].img} alt="" />
        <Button name={data[1].btnName} />

        <h1>{data[2].name}</h1>
        <img src={data[2].img} alt="" />
        <Button name={data[2].btnName} />

        <h1>{data[3].name}</h1>
        <img src={data[3].img} alt="" />
        <Button name={data[3].btnName} /> */}

            {/* {
                data.map((item, i) => {
                    return (
                        // <div key={i}>
                        <div key={item.id}>
                            <h1 className="title">{item.name}</h1>
                            <img src={item.img} alt="" className="images"/>
                            <Button name={item.btnName} />
                        </div>
                    )
                })
            } */}

            {
                data.map((item, i) => {
                    return (
                        // <div key={i}>
                        <div key={item.id}>
                            <h1 className={cardStyles.title}>{item.name}</h1>
                            <img src={item.img} alt="" className={cardStyles.images}/>
                            <Button name={item.btnName} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Card