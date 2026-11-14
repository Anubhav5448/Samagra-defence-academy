export const academyName = "Samagra Defence Academy";

export const contact = {
  phoneDisplay: "+91 00000 00000",
  phoneLink: "+910000000000",
  email: "admissions@example.com",
  address: "Add your campus address, city and postcode before launch.",
  hours: "Add your operating hours before launch.",
};

export const onlineClassVideos = [
  { id: "nda-class", title: "NDA class session", category: "NDA · Subject session", badge: "Class preview", youtubeUrl: "" },
  { id: "ssb-guidance", title: "SSB preparation", category: "SSB · Guided practice", badge: "SSB practice", youtubeUrl: "" },
  { id: "recorded-lesson", title: "Recorded lesson", category: "General ability · Replay", badge: "Recorded class", youtubeUrl: "" },
];

export type ProgramDetail = {
  slug: "nda" | "ssb" | "cds" | "afcat";
  name: string;
  eyebrow: string;
  description: string;
  overview: string;
  focus: string[];
  steps: { title: string; copy: string }[];
  officialNote: string;
  officialHref?: string;
  officialLabel?: string;
};

export const programDetails = {
  nda: {
    slug: "nda",
    name: "NDA & NA",
    eyebrow: "National Defence Academy · Naval Academy",
    description: "Build a confident base for NDA & NA preparation with a clear plan for subject learning, practice and review.",
    overview: "A focused starting point for students preparing for NDA & NA. Develop a steady practice routine across Mathematics and General Ability, track questions that need another look, and discuss next steps with admissions.",
    focus: ["Mathematics", "General Ability", "Study & revision rhythm"],
    steps: [
      { title: "Map your starting point", copy: "Identify your stronger subjects, the areas to work on and a realistic study routine." },
      { title: "Practise with focus", copy: "Build topic understanding through regular practice and thoughtful review of mistakes." },
      { title: "Review your next step", copy: "Use your preparation progress and the current official notification to plan what comes next." },
    ],
    officialNote: "Entry details, eligibility, dates and exam rules can change. Check the latest UPSC notification before applying.",
    officialHref: "https://upsc.gov.in/",
    officialLabel: "Check UPSC notices",
  },
  ssb: {
    slug: "ssb",
    name: "SSB Interview",
    eyebrow: "Services Selection Board interview",
    description: "Practise clear communication, thoughtful participation and self-reflection without relying on rehearsed scripts.",
    overview: "A coaching pathway for candidates called for the Services Selection Board. Prepare to understand the tasks ahead, express your own ideas clearly and reflect honestly while staying attentive to your official call letter.",
    focus: ["Communication", "Group practice", "Self-awareness"],
    steps: [
      { title: "Start with the instructions", copy: "Read your call letter closely and note the reporting and preparation guidance that applies to you." },
      { title: "Practise listening and expression", copy: "Build confidence through discussion, reflection and practice communicating your own point of view." },
      { title: "Review with perspective", copy: "Use feedback to choose a useful next practice step rather than memorize a fixed response." },
    ],
    officialNote: "Reporting details, stages and instructions vary by call and service. Follow the latest instructions in your official call letter.",
  },
  cds: {
    slug: "cds",
    name: "CDS",
    eyebrow: "Combined Defence Services exam",
    description: "Build a measured study plan and revision habit for candidates preparing for the Combined Defence Services examination.",
    overview: "A study pathway for CDS candidates focused on organizing exam preparation, covering core topics and reviewing progress steadily. Discuss your current preparation needs and confirm the current exam scheme in the latest UPSC notice.",
    focus: ["Core subjects", "Revision plan", "Practice & progress review"],
    steps: [
      { title: "Set a clear target", copy: "Choose a study rhythm that leaves room for learning, revision and regular practice." },
      { title: "Build topic coverage", copy: "Work through priority areas and keep a record of the questions that need another review." },
      { title: "Adjust your routine", copy: "Review progress, then make a practical next plan aligned with the current official notice." },
    ],
    officialNote: "The current examination scheme, eligibility and important dates are set by the latest UPSC notification.",
    officialHref: "https://upsc.gov.in/",
    officialLabel: "Check UPSC notices",
  },
  afcat: {
    slug: "afcat",
    name: "AFCAT",
    eyebrow: "Air Force Common Admission Test",
    description: "Organize AFCAT preparation with a steady revision plan, regular practice and current-notice awareness.",
    overview: "A preparation pathway for candidates exploring AFCAT. Start with a realistic study schedule, build topic coverage through practice, and confirm current requirements using the official notification for your entry.",
    focus: ["Core topics", "Exam planning", "Revision & review"],
    steps: [
      { title: "Plan around your target", copy: "Outline the time available for preparation and agree on the areas that need attention first." },
      { title: "Study and practise steadily", copy: "Balance topic learning with regular practice and concise revision notes." },
      { title: "Check current requirements", copy: "Keep your plan aligned with the latest official AFCAT notification and entry guidance." },
    ],
    officialNote: "Entry requirements and dates can change between notifications. Check the official AFCAT site before applying.",
    officialHref: "https://afcat.cdac.in/",
    officialLabel: "Visit official AFCAT site",
  },
} satisfies Record<string, ProgramDetail>;

export const programs = Object.values(programDetails).map((program) => ({
  id: program.slug,
  name: program.name,
  eyebrow: program.eyebrow,
  description: program.description,
  focus: program.focus,
  href: `/programs/${program.slug}`,
}));

export const resources = [
  {
    label: "NDA · Written exam",
    title: "Build a weekly revision routine",
    copy: "Alternate focused Mathematics practice with General Ability revision, then go back over your error log.",
    action: "Explore NDA coaching",
    href: "/programs/nda",
  },
  {
    label: "SSB · Interview",
    title: "Practise being clear, not rehearsed",
    copy: "Use reflection and discussion practice to communicate your own thinking with confidence.",
    action: "Explore SSB preparation",
    href: "/programs/ssb",
  },
  {
    label: "Official notices",
    title: "Check official notices before planning",
    copy: "Eligibility, vacancies and dates can change. Read the latest official notification for your entry.",
    action: "Visit UPSC notices",
    href: "https://upsc.gov.in/",
  },
];
