const Cards = (props) =>{
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p className="price">{props.price}</p>
            <article>{props.description}</article>
        </div>
        
    );
    
}

export default Cards;