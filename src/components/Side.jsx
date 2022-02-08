const Side = (props) =>{
    return (
        <div className="side_container">
            <h2>{props.title}</h2>
            <article>{props.description}</article>
        </div>
        
    );
    
}

export default Side;