import teamMembers from "../data";
import "../scss/card.scss"

const Card = () => {
    return (
        <div>
            {
                teamMembers.map((item)=>{
                    const {name, role, bio, img} =item;
                    return(
                        <div className="card">
                            <h2>{name}</h2>
                            <h3>{role}</h3>
                            <img src={img} alt={name} className="img"/>
                            <p className="par">{bio}</p>
                            <div className="buttons">
                                <button className="small">
                                    Details
                                </button>
                                <button className="small">
                                    Contact
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;