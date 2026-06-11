import {
  brochure,
  favicon,
  hemantPathak,
  joysthana,
  sanketSir,
} from "./utils/assets.js";

export const siteData = {
  title:
    "FDP 2026 | Python Programming for Pharmaceutical Sciences | Medicaps University",
  description:
    "Faculty Development Program on Python Programming for Pharmaceutical Sciences organized by Medicaps University.",
  tagline: "Faculty Development Program · 2026",
};

export const imageData = {
  logo: {
    src: favicon,
    alt: "Medicaps Faculty of Engineering",
  },
  brochure,
};

export const navigationData = {
  ariaLabel: "Medicaps University FDP",
  mobileToggleLabel: "Toggle menu",
  buttonLabel: "Register Now →",
  registrationUrl: "https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx",
  links: [
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Trainers", href: "#trainers" },
    { label: "Committee", href: "#speakers" },
    { label: "Contact", href: "#contact" },
  ],
};

export const homePageData = {
  sections: [
    "hero",
    "stats",
    "about",
    "schedule",
    "trainers",
    "committee",
    "topics",
    "contact",
  ],
};

export const heroData = {
  tag: "Faculty Development Program · 2026",
  title: {
    lineOne: "Python Programming for",
    lineTwo: "Pharmaceutical Sciences",
  },
  subtitle:
    "2-Week Faculty Development Program organized by the Department of Computer Science & Engineering, Medicaps University, Indore.",
  meta: [
    { label: "Dates", value: "1st – 12th June 2026" },
    { label: "Venue", value: "V Block – 005" },
    { label: "Duration", value: "2 Weeks" },
    { label: "Mode", value: "Offline" },
  ],
};

export const statsData = [
  { number: "12", label: "Program Days" },
  { number: "3", label: "Trainers" },
  { number: "60", label: "Total Sessions" },
  { number: "CSE", label: "Dept. Organising" },
  { number: "Offline", label: "Mode" },
];

export const aboutData = {
  id: "about",
  eyebrow: "About This Program",
  title: "About FDP 2026",
  descriptionParts: [
    { text: "The " },
    { text: "Department of Computer Science & Engineering", strong: true },
    { text: " at " },
    { text: "Medicaps University", strong: true },
    { text: " is organising a " },
    { text: "2-Week Faculty Development Program", strong: true },
    { text: " on " },
    { text: "\"Python Programming for Pharmaceutical Sciences\"", emphasis: true },
    { text: " from " },
    { text: "1st to 12th June 2026", strong: true },
    { text: " at " },
    { text: "V Block – 005", strong: true },
    { text: ", Medicaps University, Indore, in " },
    { text: "Offline Mode", strong: true },
    {
      text: ". The program is designed for faculty members from Pharmacy discipline and professionals working in the pharmaceutical industry.",
    },
  ],
  cards: [
    {
      title: "Python Fundamentals",
      description:
        "Core programming concepts, data types, control flow, and functions tailored for pharmaceutical applications.",
    },
    {
      title: "Data Analysis",
      description:
        "Handling pharmaceutical datasets using Pandas, NumPy, and SciPy for evidence-based research.",
    },
    {
      title: "Data Visualization",
      description:
        "Creating meaningful charts and plots with Matplotlib and Seaborn for academic and research purposes.",
    },
    {
      title: "Healthcare Applications",
      description:
        "Python-driven solutions for healthcare data processing, automation, and problem-solving in pharmacy.",
    },
    {
      title: "NEP & PCI Alignment",
      description:
        "In alignment with the New Education Policy and revised Pharmacy Council of India (PCI) curriculum.",
    },
    {
      title: "Hands-On Coding",
      description:
        "Live coding sessions, case studies, and practical labs bridging digital tools with pharmaceutical education.",
    },
  ],
  infoRows: [
    {
      label: "10",
      text: "Intensive days of hands-on Python programming and pharmaceutical data science workshops",
    },
    {
      label: "CSE",
      text: "Organized by the Department of Computer Science & Engineering, Medicaps University",
    },
    {
      label: "Who",
      text: "Faculty from Pharmacy discipline & professionals in the pharmaceutical industry",
    },
    {
      label: "Fee",
      text: "₹3,000 for Medicaps members · ₹5,000 for Outsiders — pay via the official Medicaps portal",
    },
  ],
};

export const scheduleData = {
  id: "schedule",
  eyebrow: "Program Schedule",
  title: "2-Week Detailed Agenda",
  description: "1st to 12th June 2026  ·  V Block – 005  ·  Offline Mode",
  weeks: [
    {
      title: "WEEK 1  ·  June 1 – 5, 2026 (Mon – Fri)",
      headerClass: "day-header-primary",
      sessions: [
        {
          day: "Day 1",
          date: "June 1 — Mon",
          title: "Inaugural Ceremony & Introduction to Python Programming",
          trainer: "",
          trainerRole: "",
          description:
            "Installing Python & IDEs (Jupyter, PyCharm, VS Code) · Advantages of IDEs · Python variables & data types (integers, floats, strings, booleans) · Type casting & basic operators",
        },

        {
          day: "Day 2",
          date: "June 2 — Tue",
          title: "Python Fundamentals & Libraries",
          trainer: "",
          trainerRole: "",
          description:
            "Input & output operations · Basic string operations & manipulation · Introduction to standard & third-party libraries · Installing & uninstalling libraries",
        },
        {
          day: "Day 3",
          date: "June 3 — Wed",
          title: "Control Structures & Functions",
          trainer: "",
          trainerRole: "",
          description:
            "Conditional statements (if, if-else, if-elif-else) · Nested conditions · Loops (for, while) · Break & continue statements",
        },
        {
          day: "Day 4",
          date: "June 4 — Thu",
          title: "Functions & Modular Programming",
          trainer: "",
          trainerRole: "",
          description:
            "Defining & calling functions · Passing arguments & returning values · Writing modular programs · Dosage calculation & BMI calculation applications",
        },
        {
          day: "Day 5",
          date: "June 5 — Fri",
          title: "Data Structures & File Handling",
          trainer: "",
          trainerRole: "",
          description:
            "Lists, tuples & dictionaries · Indexing & slicing · Basic operations on lists & dictionaries · String manipulation techniques",
        },
      ],
      banner: {
        type: "break",
        label: "🗓 WEEKEND BREAK",
        time: "June 7 – 8 (Sat – Sun)",
      },
    },
    {
      title: "WEEK 2  ·  June 9 – 13, 2026 (Mon – Fri)",
      headerClass: "day-header-secondary",
      sessions: [
        {
          day: "Day 6",
          date: "June 9 — Mon",
          title: "NumPy & Healthcare Datasets",
          trainer: "",
          trainerRole: "",
          description:
            "Introduction to NumPy arrays · Array creation & arithmetic operations · Reading & writing CSV files · Understanding structured healthcare datasets · Importing & manipulating pharmaceutical datasets",
        },
        {
          day: "Day 7",
          date: "June 10 — Tue",
          title: "Data Handling with Pandas",
          trainer: "",
          trainerRole: "",
          description:
            "Introduction to Pandas · Series & DataFrame structures · Reading CSV & Excel files (PK study datasets, ADR reports) · Inspecting datasets using head(), tail(), info(), describe()",
        },
        {
          day: "Day 8",
          date: "June 11 — Wed",
          title: "Pandas Advanced & Matplotlib Introduction",
          trainer: "",
          trainerRole: "",
          descriptionParts: [
            { text: "AM:", strong: true },
            {
              text: " Data cleaning · Handling missing values · Filtering & selecting data · Grouping & aggregation  |  ",
            },
            { text: "PM:", strong: true },
            { text: " Introduction to Matplotlib · Line plots & histograms" },
          ],
        },
        {
          day: "Day 9",
          date: "June 12 — Thu",
          title: "Data Visualization with Matplotlib",
          trainer: "",
          trainerRole: "",
          description:
            "Scatter plots & box plots · Labeling axes, titles & legends · Concentration-time curves (oral & IV) · ADR reporting rates · Dissolution profiles · Scientific interpretation of plots",
        },
        {
          day: "Day 10",
          date: "June 13 — Fri",
          title: "Valedictory Ceremony & Certificate Distribution",
          trainer: "",
          trainerRole: "",
          description:
            "Recap & Q&A session · Participant presentations · Feedback & assessment · Certificate distribution",
        },
      ],
      banner: {
        type: "ceremony",
        label: "🏆 VALEDICTORY & CERTIFICATE DISTRIBUTION",
        time: "June 13, 2026",
      },
    },
  ],
};

export const trainerData = {
  id: "trainers",
  eyebrow: "Distinguished Trainers",
  title: "Resource Person",
  description:
    "Eminent academicians and experts delivering sessions across the 2-week program.",
  list: [
    {
      id: 1,
      name: "Dr. Sanket Gupta",
      designation: "Assistant Professor, CSE",
      university: "Medicaps University, Indore",
      badge: "Resource Person 1",
      initials: "SG",
      image: sanketSir,
    },
    {
      id: 2,
      name: "Prof. Hemant K. Pathak",
      designation: "Assistant Professor, CSE",
      university: "Medicaps University, Indore",
      badge: "Resource Person 2",
      initials: "HK",
      image: hemantPathak,
    },
    {
      id: 3,
      name: "Prof. Jyotsana Goyal",
      designation: "Assistant Professor, CSE",
      university: "Medicaps University, Indore",
      badge: "Resource Person 3",
      initials: "JG",
      image: joysthana,
    },
  ],
};

export const committeeData = {
  id: "speakers",
  eyebrow: "Program Committee",
  title: "Chairs, Co-Chair, Convener & Co-Conveners",
  description:
    "Led by senior faculty of Medicaps University — Deans, HODs, and department faculty — ensuring a high-quality learning experience.",
  groups: [
    {
      role: "Program Chair",
      members: [
        {
          initials: "SJ",
          tone: "cc-bg1",
          name: "Prof. (Dr.) Sanjay Jain",
          designation: "Professor & Dean (Pharmacy), Medicaps University",
          badge: "Program Chair",
        },
        {
          initials: "RL",
          tone: "cc-bg2",
          name: "Prof. (Dr.) Ratnesh Litoriya",
          designation:
            "Associate Dean, CSE & Allied Branches, Medicaps University",
          badge: "Program Chair",
        },
      ],
    },
    {
      role: "Program Co-Chair",
      members: [
        {
          initials: "KB",
          tone: "cc-bg4",
          name: "Prof. (Dr.) Kailash Chandra Bandhu",
          designation: "HOD, CSE, Medicaps University",
          badge: "Program Co-Chair",
        },
      ],
    },
    {
      role: "Convener",
      members: [
        {
          initials: "SG",
          tone: "cc-bg7",
          name: "Dr. Sanket Gupta",
          designation: "Assistant Professor, CSE, Medicaps University",
          badge: "Convener",
        },
      ],
    },
    {
      role: "Co-Conveners",
      members: [
        {
          initials: "HK",
          tone: "cc-bg8",
          name: "Dr. Hemant Khambete",
          designation: "HOD, Pharmacy, Medicaps University",
          badge: "Co-Convener",
        },
        {
          initials: "AK",
          tone: "cc-bg9",
          name: "Prof. Ashish Kumawat",
          designation: "Assistant Professor, CSE, Medicaps University",
          badge: "Co-Convener",
        },
        {
          initials: "RA",
          tone: "cc-bg10",
          name: "Prof. Rajendra Arakh",
          designation: "Assistant Professor, CSE, Medicaps University",
          badge: "Co-Convener",
        },
      ],
    },
  ],
};

export const topicData = {
  id: "topics",
  eyebrow: "Core Modules",
  title: "What Will You Learn?",
  cards: [
    {
      number: "01",
      title: "Python Fundamentals for Pharma",
      description:
        "Variables, data types, control flow, functions, and object-oriented programming specifically applied to pharmaceutical use cases.",
    },
    {
      number: "02",
      title: "Pharmaceutical Data Handling",
      description:
        "Working with clinical and pharmaceutical datasets using Pandas and NumPy — data cleaning, transformation, and statistical analysis.",
    },
    {
      number: "03",
      title: "Data Visualization & Reporting",
      description:
        "Building informative charts and figures using Matplotlib and Seaborn to communicate research insights effectively.",
    },
    {
      number: "04",
      title: "Automation & Scripting",
      description:
        "Automating repetitive pharmacy workflows, batch processing of lab data, and file management using Python scripts.",
    },
    {
      number: "05",
      title: "Healthcare AI Applications",
      description:
        "Introduction to machine learning concepts for drug discovery, clinical trial analysis, and patient outcome prediction.",
    },
    {
      number: "06",
      title: "Integration with Teaching & Research",
      description:
        "How to integrate Python into B.Pharm / M.Pharm curricula, conduct NEP-aligned sessions, and leverage computation for academic research publishing.",
    },
  ],
};

export const contactData = {
  id: "contact",
  eyebrow: "Get In Touch",
  title: "Contact Us",
  people: [
    {
      role: "Convener",
      name: "Dr. Sanket Gupta",
      departmentLines: ["Assistant Professor, CSE", "Medicaps University, Indore"],
      phone: "9713029078",
      phoneHref: "tel:+919713029078",
      initials: "SG",
      tone: "cc-bg7",
    },
    {
      role: "Co-Convener",
      name: "Dr. Hemant Khambete",
      departmentLines: ["HOD, Pharmacy", "Medicaps University, Indore"],
      phone: "9893670420",
      phoneHref: "tel:+919893670420",
      initials: "HK",
      tone: "cc-bg8",
    },
  ],
};

export const footerData = {
  brand: {
    title: "Medicaps University — FDP 2026",
    description:
      "Faculty Development Program on Python Programming for Pharmaceutical Sciences. AB Bypass Road, Pigdamber, Rau, Indore — 453331, MP.",
  },
  groups: [
    {
      title: "Quick Links",
      links: [
        { label: "About FDP", href: "#about" },
        { label: "Schedule", href: "#schedule" },
        { label: "Trainers", href: "#trainers" },
        { label: "Committee", href: "#speakers" },
        { label: "Topics", href: "#topics" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          label: "Register Now →",
          href: "https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx",
          external: true,
        },
        {
          label: "FDP Website",
          href: "https://www.medicaps.ac.in/",
          external: true,
        },
        {
          label: "Medicaps University",
          href: "https://www.medicaps.ac.in/",
          external: true,
        },
      ],
    },
  ],
  bottom: [
    "© SDC 2026 Medicaps University. All rights reserved.",
    "Department of Computer Science & Engineering · Medicaps University",
  ],
};
