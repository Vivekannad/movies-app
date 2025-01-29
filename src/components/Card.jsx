import {useState} from "react";

const Card = (props) => {
    const movie = props.movie;
    const [hasLiked , setHasLiked] = useState(false);
    return (
        <div className={"card"}>
            <h1 >I am a Card and I need {movie} movie</h1>
            <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? "You Liked" : "Like"}</button>
        </div>
    )
}
export default Card;