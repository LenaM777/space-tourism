import { useState } from "react";
import data from "../../data.json";
import "./Crew.scss";

export default function Crew() {
  const [index, setIndex] = useState(0);
  const { crew } = data;
  const { name, role, bio, images } = crew[index];

  return (
    <section className=" crew">
      <div className="section__container crew__container">
        <h3 className="page-title">
          <span>02</span>MEET YOUR CREW
        </h3>
        <div className="crew__content">
          <div className="crew__info">
            <div className="crew__exposition">
              <div className="crew__name">
                <h2 className="section-subtitle">{role}</h2>
                <h1 className="section-title">{name}</h1>
              </div>
              <p className="crew__text section-text">{bio}</p>
            </div>

            <div className="crew__tabs">
              {data.crew.map((person, i) => (
                <button
                  key={person.name}
                  className={i === index ? "active" : ""}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="crew__image">
            <img src={images.png} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
