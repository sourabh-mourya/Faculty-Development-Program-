import Avatar from "../components/Avatar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { committeeData } from "../data.js";

export default function CommitteeSection() {
  return (
    <section className="section committee-section" id={committeeData.id}>
      <div className="sec-inner">
        <SectionHeader
          eyebrow={committeeData.eyebrow}
          title={committeeData.title}
          description={committeeData.description}
        />

        <div className="committee-groups">
          {committeeData.groups.map((group) => (
            <div className="role-group" key={group.role}>
              <div className="role-row">
                <span>{group.role}</span>
              </div>
              <div className="fac-grid">
                {group.members.map((member) => (
                  <div className="fi" key={member.name}>
                    <Avatar initials={member.initials} tone={member.tone} />
                    <div>
                      <div className="fn">{member.name}</div>
                      <div className="fp">{member.designation}</div>
                      <span className="fbadge">{member.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
