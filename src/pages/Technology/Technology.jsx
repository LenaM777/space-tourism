import { useState } from "react";
import data from "../../data.json";
import "./Technology.scss";

export default function Technology() {
  const [index, setIndex] = useState(0);
  const { technology } = data;
  const { name, description, images } = technology[index];

  return (
    <section className="technology section">
      <div className="technology__container">
        <h3 className="page-title">
          <span>03</span>SPACE LAUNCH 101
        </h3>
        <div className="technology__content">
          <div className="technology__image">
            <picture>
              <source media="(min-width: 1024px)" srcSet={images.portrait} />
              <img src={images.landscape} alt={name} />
            </picture>
          </div>
          <div className="technology__info">
            <div className="technology__tabs">
              {data.technology.map((vehicle, i) => (
                <button
                  key={vehicle.name}
                  className={i === index ? "active" : ""}
                  onClick={() => setIndex(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="technology__exposition">
              <div className="technology__heading">
                <h2 className="section-subtitle">THE TERMINOLOGY…</h2>
                <h1 className="section-title">{name}</h1>
              </div>
              <p className="section-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
