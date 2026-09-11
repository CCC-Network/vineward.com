// Central place for every external fact the site references — contact
// addresses, the church site, and distribution links. Update this file
// as real store listings and files go live; nothing else in the app
// should hardcode these values.

export const site = {
  name: "Vineward",
  tagline: "Grow people. Form leaders. Multiply generations.",
  url: "https://vineward.com", // placeholder production domain
};

export const church = {
  name: "Shelter of Praise Assembly of God",
  url: "https://shelterofpraise-assemblyofgod.onrender.com",
  email: "shelterofpraiseassemblyofgod@gmail.com",
};

export const contacts = {
  church: {
    label: "Shelter of Praise Assembly of God",
    role: "Church office",
    email: "shelterofpraiseassemblyofgod@gmail.com",
  },
  pastorNetwork: {
    label: "Conquerors & Coheirs of Christ",
    role: "Pastor's network",
    email: "conquerorscoheirsofchrist@gmail.com",
  },
  pastor: {
    label: "Jherico John Balasa",
    role: "Senior Pastor",
    email: "jhericojohnbalasa@gmail.com",
  },
  developer: {
    label: "Jednaz Lonestamp",
    role: "Developer & CTO, Vineward",
    email: "nissandiezonencaboagripoz9@gmail.com",
  },
};

// The pastor's personal ministry hub — linked at the end of the Materials
// page, separate from the church's own site.
export const pastorMinistry = {
  label: "Visit Jherico Balasa Ministries",
  url: "https://jhericojohnbalasa.systeme.io/jhericobalasaministries?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAUPgANwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp-IbVWce2JJYkKUXp52P_Pp_5nTJPtByo7vnmBicwIE7vGaEApWTzZYGFtOw_aem_cN2160sALmXPzinJm2muwQ&utm_id=97760_v0_s00_e0_tv3",
};

// Icon-only social links for the footer.
export type SocialPlatform = "facebook" | "tiktok" | "youtube" | "instagram";

export const socials: { platform: SocialPlatform; label: string; url: string }[] = [
  { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/FriendJohn07" },
  {
    platform: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@calebbb_007?_r=1&_t=ZS-99cFd3eOH4u",
  },
  {
    platform: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@jhericojohnbaletinbalasa?si=VMx_JCaykdCHW703",
  },
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/jhericobalasa?stkn=MXB3eDgycnR0aG1qcw==",
  },
];

// Organizations currently using Vineward. Swap `logo` for a real asset
// path as more churches and networks come on board.
export const usedBy = [
  {
    name: church.name,
    logo: "/assets/shelter-of-praise-banner.png",
    url: church.url,
  },
];

// The first testimonial is reserved for the person building Vineward
// itself — everyone after that is a placeholder until real stories come
// in. `avatar: null` renders a placeholder ring rather than a broken
// image, since a real photo hasn't been supplied yet.
export const testimonials = [
  {
    quote:
      "Build this for everyone, not to. Papers are meant not to replace \u2014 a hybrid approach.",
    name: contacts.developer.label,
    role: contacts.developer.role,
    avatar: null as string | null,
  },
];

// Discipleship materials, in the order they're walked through.
export const materials = [
  {
    name: "Lifegroup",
    aka: "also known as SUNYL",
    body: "What a Lifegroup leader needs to open, guide, and close a healthy small group session.",
  },
  {
    name: "Pre-Encounter",
    body: "Preparation sessions ahead of an Encounter weekend, built to be walked through with a mentor.",
  },
  {
    name: "Encounter",
    body: "The core Encounter material, structured for facilitators and participants alike.",
  },
  {
    name: "Post-Encounter",
    body: "Follow-through content for the weeks right after an Encounter, while it's still fresh.",
  },
  {
    name: "SOL 1 & 2",
    body: "The two-part School of Leaders track, for those moving toward being sent.",
  },
];

// Placeholder screenshot carousel. The real screenshots live in a GitHub
// repo; drop their raw URLs in here once available and the carousel
// switches from placeholder tiles to real images automatically.
export type Screenshot = { caption: string; src: string | null };

export const screenshots: Screenshot[] = [
  { caption: "LNHS Lifegroup", src: "https://github.com/conquerorscoheirs-ag/ShelterOfPraise-AssemblyOfGod-Database-Hosting/blob/main/Public/photos/ministries/lifegroups/ly314u.jpg?raw=true" },
  { caption: "Ice Breaker", src: "https://github.com/conquerorscoheirs-ag/ShelterOfPraise-AssemblyOfGod-Database-Hosting/blob/main/Public/photos/ministries/lifegroups/p3nwz1.jpg?raw=true" },
  { caption: "Ice Breaker", src: "https://github.com/conquerorscoheirs-ag/ShelterOfPraise-AssemblyOfGod-Database-Hosting/blob/main/Public/photos/ministries/lifegroups/782144959_1074518611969143_4988941909814328793_n.jpg?raw=true" },
  { caption: "Grouping", src: "https://github.com/conquerorscoheirs-ag/ShelterOfPraise-AssemblyOfGod-Database-Hosting/blob/main/Public/photos/ministries/lifegroups/779944528_1074519058635765_935181923420096704_n.jpg?raw=true" },
  { caption: "Grouping", src: "https://github.com/conquerorscoheirs-ag/ShelterOfPraise-AssemblyOfGod-Database-Hosting/blob/main/Public/photos/ministries/lifegroups/778504761_1074516138636057_3286527005630375899_n.jpg?raw=true" },
];

// Distribution links. A `null` href means the listing is not live yet —
// the button renders in a clearly-labeled "in review" state instead of
// linking nowhere or pretending a store page exists.
export type DownloadTarget = {
  id: "play" | "ios" | "amazon" | "samsung" | "apkpure";
  label: string;
  detail: string;
  href: string | null;
};

export const downloadTargets: DownloadTarget[] = [
  { id: "play", label: "Google Play", detail: "For Android", href: null },
  { id: "ios", label: "App Store", detail: "For iPhone & iPad", href: null },
  { id: "amazon", label: "Amazon Appstore", detail: "For Fire & Android", href: null },
  { id: "samsung", label: "Galaxy Store", detail: "For Samsung devices", href: null },
  { id: "apkpure", label: "APKPure", detail: "Android, outside Play", href: null },
];

export const directDownload = {
  label: "Download APK directly",
  detail: "Installs on Android without an app store",
  href: null as string | null,
  fileName: "vineward-latest.apk",
};

export const webAccess = {
  label: "Open the web app",
  detail: "Use Vineward from a browser",
  href: null as string | null,
};
