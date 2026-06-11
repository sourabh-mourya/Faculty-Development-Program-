import SectionHeader from "../components/SectionHeader.jsx";
import { aboutData } from "../data.js";
import { renderTextParts } from "../utils/renderContent.jsx";

export default function AboutSection() {
  return (
    <section className="section about-section" id={aboutData.id}>
      <div className="sec-inner">
        <SectionHeader eyebrow={aboutData.eyebrow} title={aboutData.title} />
        <p className="sec-desc">{renderTextParts(aboutData.descriptionParts)}</p>

        <div className="about-grid">
          <div className="benefit-grid">
            {aboutData.cards.map((card) => (
              <div className="bc" key={card.title}>
                <div className="bc-title">{card.title}</div>
                <div className="bc-desc">{card.description}</div>
              </div>
            ))}
          </div>

          <div className="info-card">
            {aboutData.infoRows.map((row) => (
              <div className="irow" key={row.label}>
                <span className="inum">{row.label}</span>
                <span className="itext">{row.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
