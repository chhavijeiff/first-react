import "./Card.css"
export default function Card(props){
    console.log(props);
    return (
        <div id={props.id}>
            <h2>{props.title}</h2>
            <p>{props.docs}</p>
        </div>
    )
}