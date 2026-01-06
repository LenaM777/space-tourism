import { useState } from "react";
import data from "../../data.json";
import "./Destination.scss";

export default function Destination() {
  const [index, setIndex] = useState(0);
  const { destinations } = data;
  const { name, description, distance, travel, images } = destinations[index];

  return (
    <section className="destination section">
      <div className="section__container">
        <h3 className="page-title">
          <span>01</span>PICK YOUR DESTINATION
        </h3>
        <div className="destination__content">
          <img src={images.png} alt="" className="destination__img" />
          <div className="destination__info">
            <div className="destination__tabs">
              {data.destinations.map((planet, i) => (
                <button
                  key={planet.name}
                  className={i === index ? "active" : ""}
                  onClick={() => setIndex(i)}
                >
                  {planet.name}
                </button>
              ))}
            </div>
            <div className="destination__exposition">
              <h1 className="section-title">{name}</h1>
              <p className="section-text">{description}</p>
            </div>
            <hr className="destination__line"></hr>
            <div className="destination__facts">
              <div className="destination__fact">
                <h6 className="destination__stat">AVG. DISTANCE</h6>
                <p className="destination__values">{distance}</p>
              </div>
              <div className="destination__fact">
                <h6 className="destination__stat">Est. travel time</h6>
                <p className="destination__values">{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
