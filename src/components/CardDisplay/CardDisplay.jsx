import "./CardDisplay.css";
import img from "./user-icon-trendy-flat-style-600w-418179865.webp";
const CardDisplay = ({ name, age, gender, id }) => {
    return (
        <div class="card-style">
            <div class="card">
                <img src={img} class="card-img-top" alt="cardimage"/>
                    <div class="card-body">
                        <h5 class="card-title">Name: {name}</h5>
                        <p class="card-text">ID: {id}</p>
                        <p class="card-text">Age: {age}</p>
                        <p class="card-text">Gender: {gender}</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        </div>
    )

}
export default CardDisplay;