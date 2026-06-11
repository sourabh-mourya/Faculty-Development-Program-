import Avatar from "../components/Avatar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { contactData } from "../data.js";

export default function ContactSection() {
  return (
    <section className="section contact-section" id={contactData.id}>
      <div className="sec-inner">
        <SectionHeader eyebrow={contactData.eyebrow} title={contactData.title} />

        <div className="contact-grid">
          {contactData.people.map((person) => (
            <div className="cc" key={person.phone}>
              <Avatar initials={person.initials} size="sm" tone={person.tone} />
              <div>
                <div className="crole">{person.role}</div>
                <div className="cname">{person.name}</div>
                <div className="cdept">
                  {person.departmentLines.map((line) => (
                    <span className="line-break" key={line}>
                      {line}
                    </span>
                  ))}
                </div>
                <div className="clinks">
                  <a href={person.phoneHref} className="clink">
                    {person.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
