import shoe from "./img/pair-trainers.jpg"
const Cards = (props) =>{
    return (
        <div className="card">
            <img src={shoe} alt="" srcset="" />
            <h3>{props.title}</h3>
            <p className="price">{props.price}</p>
            <article>{props.description}</article>
        </div>
        
    );
    
}

export default Cards;