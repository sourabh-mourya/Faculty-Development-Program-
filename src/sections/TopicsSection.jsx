import SectionHeader from "../components/SectionHeader.jsx";
import { topicData } from "../data.js";

export default function TopicsSection() {
  return (
    <section className="section topics-section" id={topicData.id}>
      <div className="sec-inner">
        <SectionHeader eyebrow={topicData.eyebrow} title={topicData.title} />

        <div className="topics-grid">
          {topicData.cards.map((topic) => (
            <div className="tc" key={topic.number}>
              <div className="tn">{topic.number}</div>
              <div className="tt">{topic.title}</div>
              <div className="td">{topic.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
