/* Edit this file to change who appears on the site. Nothing else needs to be touched.

   photo    path under assets/. A missing file falls back to initials, so a broken
            path never shows a broken image.
   focus    where the circle centres, as "x% y%". Default "50% 50%".
   zoom     how far to magnify inside the circle. Default 1.
            focus and zoom frame a full-length photo on the face. A tight headshot
            needs neither; delete both lines and it fills the circle as-is.
   linkedin optional profile URL; omit it and no link renders.
   more     an entry of { more: true } renders the open-slot tile. */

window.PEOPLE = {
  /* Empty renders the section's data-empty message ("Coming soon.").
     Add an advisor only once they have confirmed in writing that they will be listed. */
  advisors: [],

  /* Portfolio companies. Same shape: name, role (one line, e.g. "Fintech · Seed 2027"),
     photo (logo under assets/), linkedin (used as the company link). */
  portfolio: [],

  team: [
    {
      name: "Amanda Lai",
      role: "Class of 2028"
      /* TODO: add role line, photo (assets/amanda-lai.jpg) and LinkedIn */
    },
    {
      name: "Deven Bhattacharya",
      role: "COO, HeyTutor (acquired by ESS) · ScOp Venture Capital",
      photo: "assets/deven-bhattacharya.jpg",
      focus: "54% 4%",
      zoom: 2.5,
      linkedin: "https://www.linkedin.com/in/deven-bhattacharya-3a802b134/"
    },
    {
      name: "Jaymal Lodha",
      role: "Sequoia Capital India (now Peak XV) · Bain & Co",
      photo: "assets/jaymal-lodha.jpg",
      focus: "50% 8%",
      zoom: 2.5,
      linkedin: "https://www.linkedin.com/in/jaymal-lodha/"
    },
    {
      name: "Zane Sun",
      role: "Vanderbilt Endowment"
      /* TODO: add photo (assets/zane-sun.jpg) and LinkedIn */
    }
  ]
};
