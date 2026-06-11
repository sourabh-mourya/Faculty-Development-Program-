import { statsData } from "../data.js";

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {statsData.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <div className="stat-num">{stat.number}</div>
          <div className="stat-lbl">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
