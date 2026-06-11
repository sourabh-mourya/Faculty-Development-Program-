import { heroData, imageData } from "../data.js";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="hero-content">
          <div className="fdp-tag">{heroData.tag}</div>
          <h1 className="hero-title">
            {heroData.title.lineOne}
            <br />
            <span>{heroData.title.lineTwo}</span>
          </h1>
          <p className="hero-subtitle">{heroData.subtitle}</p>

          <div className="hero-meta">
            {heroData.meta.map((item, index) => (
              <div className="meta-item-group" key={item.label}>
                {index > 0 ? <div className="meta-divider"></div> : null}
                <div className="meta-item">
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <a
              href={imageData.brochure}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Download Brochure
            </a>
            <a
              href="#schedule"
              className="btn-secondary"
            >
              View Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
