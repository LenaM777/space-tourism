import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data.json";
import "./Destination.scss";

export default function Destination() {
  const [index, setIndex] = useState(0);
  const { destinations } = data;
  const { name, description, distance, travel, images } = destinations[index];

  return (
    <section className="destination section">
      <div className="destination__container section__container">
        <h3 className="page-title">
          <span>01</span>PICK YOUR DESTINATION
        </h3>
        <div className="destination__content">
          <AnimatePresence mode="wait">
            <motion.div
              key={name}
              src={images.png}
              alt={name}
              className="destination__image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <img src={images.png} alt={name} />
            </motion.div>
          </AnimatePresence>
          <div className="destination__info">
            <div className="destination__show">
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={description}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="destination__exposition">
                    <h1 className="section-title section-title--destination">
                      {name}
                    </h1>
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
