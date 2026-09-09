// Central place for every external fact the site references — contact
// addresses, the church site, and distribution links. Update this file
// as real store listings and files go live; nothing else in the app
// should hardcode these values.

export const site = {
  name: "Vineward",
  tagline: "Grow people. Form leaders. Multiply generations.",
  url: "https://vineward.app", // placeholder production domain
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
    label: "Nissan Diezon Encabo",
    role: "Developer & CTO, Vineward",
    email: "nissandiezonencaboagripoz9@gmail.com",
  },
};

// Distribution links. A `null` href means the listing is not live yet —
// the button renders in a clearly-labeled "in review" state instead of
// linking nowhere or pretending a store page exists.
export type DownloadTarget = {
  id: string;
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
