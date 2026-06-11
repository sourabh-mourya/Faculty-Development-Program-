import SectionHeader from "../components/SectionHeader.jsx";
import TrainerCard from "../components/TrainerCard.jsx";
import { trainerData } from "../data.js";

export default function TrainersSection() {
  return (
    <section className="section rp-section" id={trainerData.id}>
      <div className="sec-inner">
        <SectionHeader
          eyebrow={trainerData.eyebrow}
          title={trainerData.title}
          description={trainerData.description}
        />

        <div className="trainer-grid">
          {trainerData.list.map((trainer) => (
            <TrainerCard trainer={trainer} key={trainer.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
