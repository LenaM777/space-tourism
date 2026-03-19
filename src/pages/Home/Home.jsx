import "./Home.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  pageTransition,
  cascadeContainer,
  itemVariants,
} from "../../utils/animations";

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div {...pageTransition}>
      <section className="home">
        <div className="home__container">
          <div className="home__content">
            <motion.div
              className="home__info"
              variants={cascadeContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h4
                variants={itemVariants}
                className="section-subtitle section-subtitle--sm"
              >
                SO, YOU WANT TO TRAVEL TO
              </motion.h4>
              <motion.h1
                variants={itemVariants}
                className="section-title section-title--big"
              >
                SPACE
              </motion.h1>
              <motion.p variants={itemVariants} className="section-text">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </motion.p>
            </motion.div>
            <div className="home__btn-container">
              <motion.button
                className="home__button"
                onClick={() => navigate("/destination")}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>EXPLORE</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
