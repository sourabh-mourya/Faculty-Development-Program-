import SectionHeader from "../components/SectionHeader.jsx";
import { scheduleData } from "../data.js";
import { renderTextParts } from "../utils/renderContent.jsx";

function SessionDescription({ session }) {
  if (session.descriptionParts) {
    return renderTextParts(session.descriptionParts);
  }

  return session.description;
}

function SessionRow({ session }) {
  return (
    <div className="sess-row">
      <div className="st">
        <span className="st-lbl">{session.day}</span>
        <span className="st-time">{session.date}</span>
      </div>
      <div className="sp">
        <div className="sp-title">{session.title}</div>
        <div className="sp-sub">
          <SessionDescription session={session} />
        </div>
      </div>
      <div className="sk">
        {session.trainer ? (
          <>
            <div className="sk-name">{session.trainer}</div>
            {session.trainerRole ? (
              <div className="sk-role">{session.trainerRole}</div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

function ScheduleBanner({ banner }) {
  const className =
    banner.type === "ceremony" ? "ceremony-banner" : "break-banner";
  const timeClass =
    banner.type === "ceremony"
      ? "cb-time"
      : "bb-time";

  return (
    <div className={className}>
      {banner.type === "ceremony" ? <strong>{banner.label}</strong> : banner.label}
      <span className={timeClass}>{banner.time}</span>
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section className="section schedule-section" id={scheduleData.id}>
      <div className="sec-inner">
        <SectionHeader
          eyebrow={scheduleData.eyebrow}
          title={scheduleData.title}
          description={scheduleData.description}
          className="schedule-heading"
        />

        <div className="sched-cards">
          {scheduleData.weeks.map((week) => (
            <div className="day-block" key={week.title}>
              <div className={`day-header ${week.headerClass}`}>
                <div className="day-header-title">{week.title}</div>
              </div>
              <div className="sess-grid">
                {week.sessions.map((session) => (
                  <SessionRow session={session} key={session.day} />
                ))}
              </div>
              <ScheduleBanner banner={week.banner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
