import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data.json";
import "./Technology.scss";

export default function Technology() {
  const [index, setIndex] = useState(0);
  const { technology } = data;
  const { name, description, images } = technology[index];

  return (
    <section
      className={`technology section ${
        index === 2 ? "technology--left" : "technology--right"
      }`}
    >
      <div className="technology__container">
        <h3 className="page-title">
          <span>03</span>SPACE LAUNCH 101
        </h3>
        <div className="technology__content">
          <motion.div
            key={images.portrait}
            className="technology__image "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={images.portrait} />
              <img src={images.landscape} alt={name} />
            </picture>
          </motion.div>

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
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="technology__exposition"
              >
                <div className="technology__heading">
                  <h2 className="section-subtitle">THE TERMINOLOGY…</h2>
                  <h1 className="section-title">{name}</h1>
                </div>
                <p className="section-text">{description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
