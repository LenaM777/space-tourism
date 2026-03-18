import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../../utils/animations";
import data from "../../data.json";
import "./Destination.scss";

export default function Destination() {
  const [index, setIndex] = useState(0);
  const { destinations } = data;
  const { name, description, distance, travel, images } = destinations[index];

  const planetVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: "drop-shadow(0 0 24px var(--color-white-17))",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      x: 10,
      filter: "drop-shadow(0 0 42px var(--color-white-25))",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div {...pageTransition}>
      <section className="destination section">
        <div className="destination__container">
          <h3 className="page-title">
            <span>01</span>PICK YOUR DESTINATION
          </h3>
          <div className="destination__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={name}
                className="destination__image"
                variants={planetVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                whileHover="hover"
                whileTap={{ scale: 1.03 }}
              >
                <img src={images.png} alt={name} />
              </motion.div>
            </AnimatePresence>
            <div className="destination__info">
              <div className="destination__exposition">
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
                    <div className="destination__heading">
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
    </motion.div>
  );
}
