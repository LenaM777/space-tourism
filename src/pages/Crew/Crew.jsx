import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data.json";
import "./Crew.scss";

export default function Crew() {
  const [index, setIndex] = useState(0);
  const { crew } = data;
  const { name, role, bio, images } = crew[index];

  return (
    <section className="crew section">
      <div className="crew__container">
        <h3 className="page-title">
          <span>02</span>MEET YOUR CREW
        </h3>
        <div className="crew__content">
          <div className="crew__info">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="crew__exposition"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
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
                />
              ))}
            </div>
          </div>
          <motion.div
            key={images.png}
            className="crew__image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={images.png} alt={name} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
