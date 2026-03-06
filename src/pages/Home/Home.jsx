import "./Home.scss";

export default function Home() {
  return (
    <section className="home section--home">
      <div className="section__container home__container">
        <div className="home__content">
          <div className="home__info">
            <h4 className="section-subtitle section-subtitle--sm">
              SO, YOU WANT TO TRAVEL TO
            </h4>
            <h1 className="section-title section-title--big">SPACE</h1>
            <p className="section-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home__btn-container">
            <button className="home__button">
              <span>EXPLORE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
