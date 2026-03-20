import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition, planetVariants } from "../../utils/animations";
import data from "../../data.json";
import "./Destination.scss";

export default function Destination() {
  const [index, setIndex] = useState(0);
  const { destinations } = data;
  const { name, description, distance, travel, images } = destinations[index];

  return (
    <motion.div {...pageTransition}>
      <section className="destination section">
        <div className="destination__container">
          <h1 className="page-title">
            <span>01</span>PICK YOUR DESTINATION
          </h1>
          <div className="destination__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={name}
                className="destination__image"
                variants={planetVariants}
                initial="hidden"
                animate={["show", "infinite"]}
                exit="hidden"
              >
                <img
                  src={images.webp}
                  alt={`The planet ${name}`}
                  decoding="async"
                  width="480"
                  height="480"
                  fetchpriority="high"
                />
              </motion.div>
            </AnimatePresence>
            <div className="destination__info">
              <div className="destination__exposition">
                <div
                  className="destination__tabs"
                  role="tablist"
                  aria-label="Destination selection"
                >
                  {data.destinations.map((planet, i) => (
                    <button
                      key={planet.name}
                      className={i === index ? "active" : ""}
                      onClick={() => setIndex(i)}
                      aria-selected={index === i}
                      role="tab"
                    >
                      {planet.name}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="destination__heading">
                      <h2 className="section-title section-title--destination">
                        {name}
                      </h2>
                      <p className="section-text">{description}</p>
                    </div>
                    <hr className="destination__line"></hr>
                    <div className="destination__facts">
                      <div className="destination__fact">
                        <h3 className="destination__stat">AVG. DISTANCE</h3>
                        <p className="destination__values">{distance}</p>
                      </div>
                      <div className="destination__fact">
                        <h3 className="destination__stat">Est. travel time</h3>
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
    </motion.div>
  );
}
