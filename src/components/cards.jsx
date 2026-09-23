import "../index.css"
import perfumeOne from "../assets/perfume1.png"
import perfumeTwo from "../assets/perfume2.png"
import perfumeThree from "../assets/perfume3.png"


function Card(){
    return(
    <div className="cards" id="products">
        <div className="card__item">
            <img src={perfumeOne} alt="image" />
            <p>Fantacy Perfume | Premium & Long Lasting | Eau de Perfume- 100ml (For Women)</p>    
        </div>
        <div className="card__item">
            <img src={perfumeTwo} alt="image" />
            <p>Old Money Long Lasting Luxury EDO Perfume Eau de perfume - 50ml(For men and women)</p>    
        </div>
        <div className="card__item">
            <img src={perfumeThree} alt="image" />
            <p>Hydra Luxury Perfume For men 100ml eau de perfume - 100ml (For Men)</p>    
        </div>
    </div>
    )
}

export default Card