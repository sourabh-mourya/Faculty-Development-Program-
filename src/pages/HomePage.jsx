import { homePageData } from "../data.js";
import AboutSection from "../sections/AboutSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import CommitteeSection from "../sections/CommitteeSection.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import ScheduleSection from "../sections/ScheduleSection.jsx";
import StatsBar from "../sections/StatsBar.jsx";
import TopicsSection from "../sections/TopicsSection.jsx";
import TrainersSection from "../sections/TrainersSection.jsx";

const sectionRegistry = {
  hero: HeroSection,
  stats: StatsBar,
  about: AboutSection,
  schedule: ScheduleSection,
  trainers: TrainersSection,
  committee: CommitteeSection,
  topics: TopicsSection,
  contact: ContactSection,
};

export default function HomePage() {
  return (
    <>
      {homePageData.sections.map((sectionKey) => {
        const Section = sectionRegistry[sectionKey];
        return Section ? <Section key={sectionKey} /> : null;
      })}
    </>
  );
}
