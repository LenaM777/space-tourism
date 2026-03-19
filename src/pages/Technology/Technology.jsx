import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition, customEase } from "../../utils/animations";
import data from "../../data.json";
import "./Technology.scss";

export default function Technology() {
  const [index, setIndex] = useState(0);
  const { technology } = data;
  const { name, description, images } = technology[index];

  return (
    <motion.div {...pageTransition}>
      <section className="technology section">
        <div
          className={`technology__container ${
            index === 2
              ? "technology__container--left"
              : "technology__container--right"
          }`}
        >
          <h3 className="page-title">
            <span>03</span>SPACE LAUNCH 101
          </h3>
          <div className="technology__content">
            <motion.div
              key={images.portrait}
              className="technology__image"
              initial={{ opacity: 0, y: 30, scale: 1.1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
            >
              <picture>
                <source media="(min-width: 1024px)" srcSet={images.portrait} />
                <source media="(min-width: 768px)" srcSet={images.landscape} />
                <img src={images.portrait} alt={`Space technology: ${name}`} />
              </picture>
            </motion.div>
            <div className="technology__info">
              <div className="technology__tabs">
                {data.technology.map((vehicle, i) => (
                  <button
                    key={vehicle.name}
                    className={i === index ? "active" : ""}
                    onClick={() => setIndex(i)}
                    aria-label={`Step ${i + 1}: ${vehicle.name}`}
                    aria-selected={i === index}
                    role="tab"
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: customEase }}
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
    </motion.div>
  );
}
