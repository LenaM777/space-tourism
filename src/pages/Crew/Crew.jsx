import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition, customEase } from "../../utils/animations";
import data from "../../data.json";
import "./Crew.scss";

export default function Crew() {
  const [index, setIndex] = useState(0);
  const { crew } = data;
  const { name, role, bio, images } = crew[index];

  return (
    <motion.div {...pageTransition}>
      <section className="crew section">
        <div className="crew__container">
          <h3 className="page-title">
            <span>02</span>MEET YOUR CREW
          </h3>
          <motion.div
            className="crew__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="crew__info">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="crew__exposition"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="crew__name">
                    <h2 className="section-subtitle">{role}</h2>
                    <h1 className="section-title">{name}</h1>
                  </div>
                  <p className="section-text">{bio}</p>
                </motion.div>
              </AnimatePresence>
              <div className="crew__tabs">
                {data.crew.map((person, i) => (
                  <button
                    key={person.name}
                    className={i === index ? "active" : ""}
                    onClick={() => setIndex(i)}
                    aria-label={`Show crew member: ${person.name}`}
                    aria-selected={i === index}
                    role="tab"
                  />
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="crew__image"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: customEase }}
              >
                <img
                  src={images.webp}
                  alt={`Crew member: ${role} ${name}`}
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
