import { footerData } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="fi-wrap">
        <div className="f-top">
          <div className="f-brand">
            <h3>{footerData.brand.title}</h3>
            <p>{footerData.brand.description}</p>
          </div>

          <div className="f-nav-groups">
            {footerData.groups.map((group) => (
              <div className="f-lg" key={group.title}>
                <h4>{group.title}</h4>
                <div className="f-links">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="f-bot">
          {footerData.bottom.map((line) => (
            <span className="f-copy" key={line}>
              {line}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
