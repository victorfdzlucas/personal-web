/* -------------------------------------------------------------------------- */
/*                 THIS IS THE ONLY FILE YOU ARE SUPPOSED TO EDIT             */
/* -------------------------------------------------------------------------- */

/* ------------------------------ AVATAR ------------------------------ */
export const showAvatar = true;
import avatar from "./public/me-victor.jpg";
export const avatarSrc = avatar.src;
/* -------------------------------------------------------------------- */

/* ------------------------------ TITLE ------------------------------------- */
export const title = "Hi, I'm Victor";
/* -------------------------------------------------------------------------- */

/* ------------------------------ SUBTITLE ---------------------------------- */
export const showSubtitle = true;
export const subtitle = "Engineer Building with AI";
/* -------------------------------------------------------------------------- */

/* ------------------------------ CALL TO ACTION ------------------------------- */
export const showCallToAction = false;
export const mainButtonText = "Stack AI";
export const secondaryButtonText = "My Blog";
/* -------------------------------------------------------------------------- */

/* ------------------------------ NAVBAR -------------------------------------- */
export const showResumeButton = false;

/* ------------------------------ ABOUT ME ---------------------------------- */
export const showAboutme = true;
/* -------------------------------------------------------------------------- */

/* ------------------------------ COMPANIES --------------------------------- */
export const showCompanies = true;

export const companies = [
  {
    name: "Cupra",
    role: "R&D Engineer",
    logo: "/company-logos/cupra_logo.jpg",
    link: "https://www.cupra.com/",
  },
  {
    name: "Celonis",
    role: "Value Engineer",
    logo: "/company-logos/celonis_logo.png",
    link: "https://www.celonis.com/",
  },
  {
    name: "Frekuent",
    role: "Operations Engineer",
    logo: "/company-logos/frekuent_logo.png",
    link: "https://www.frekuent.com/",
  },
  {
    name: "Aily Labs",
    role: "Data Scientist",
    logo: "/company-logos/aily_logo.png",
    link: "https://www.ailylabs.com/",
  },
];

/* ------------------------------ NAVBAR LINKS ------------------------------ */
export const showNavbarLinks = true;
export const externalLinks = {
  github: "https://github.com/victorfdzlucas",
  linkedin: "https://www.linkedin.com/in/victor-fernandez-lucas-66367a205/",
  instagram: "https://www.instagram.com/victorfdzlucas/",
};
/* -------------------------------------------------------------------------- */

/* ------------------------------ PROJECTS ---------------------------------- */
export const showProjects = true;

export const projects = [
  {
    title: "Race Walking Electronic Control System",
    image: "/rwecs_pic.png",
    link: "https://archive.ph/WEQme",
  },
  {
    title: "Voice Insights Dashboard",
    image: "/voice_pic.png",
  },
];
/* -------------------------------------------------------------------------- */

/* ------------------------------ BOOKS ---------------------------------- */
export const showBooks = false;
export const essentialReadsText =
  "Books that shaped the way I think and work every day.";

import atomic from "./assets/books-covers/atomic-habits-cover.jpg";
import hooked from "./assets/books-covers/hooked-cover.jpg";
import principles from "./assets/books-covers/principles-cover.jpg";
import leanStartup from "./assets/books-covers/the-lean-startup-cover.jpg";
import zeroOne from "./assets/books-covers/zero-to-one-cover.jpg";
import howto from "./assets/books-covers/howto.jpg";
import theLikeSwitch from "./assets/books-covers/thelikeswitch.jpg";
import deepWork from "./assets/books-covers/deepwork.jpg";

export const bookCovers = [
  {
    title: "Atomic Habits",
    src: atomic.src,
  },
  { title: "Deep Work", src: deepWork.src },
  {
    title: "How to Win Friends and Influence People",
    src: howto.src,
  },
  { title: "The Lean Startup", src: leanStartup.src },
  { title: "Principles", src: principles.src },
  { title: "Zero to One", src: zeroOne.src },
  { title: "The Like Switch", src: theLikeSwitch.src },
  { title: "Hooked", src: hooked.src },
];
/* -------------------------------------------------------------------------- */

/* ------------------------------ CONTACT ME ---------------------------------- */
export const contactMe = true;
export const contactMeText =
  "I'm always open to chat, helping out and open to new projects. Drop me a message!";
export const contactMeButtonText = "Email me";
export const contactEmail = "victor.fernandez.lucas@gmail.com";
/* ---------------------------------------------------------------------------- */

/* ------------------------------ FOOTER ---------------------------------- */
export const showFooter = true;
export const footerText =
  "© Copyright 2026 Victor Fernandez Lucas — All rights reserved";
/* ------------------------------------------------------------------------ */
