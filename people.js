/* Edit this file to change who appears on the site. Nothing else needs to be touched.

   photo    path under assets/. A missing file falls back to initials, so a broken
            path never shows a broken image.
   focus    where the circle centres, as "x% y%". Default "50% 50%".
   zoom     how far to magnify inside the circle. Default 1.
            focus and zoom frame a full-length photo on the face. A tight headshot
            needs neither; delete both lines and it fills the circle as-is.
   more     an entry of { more: true } renders the open-slot tile. */

window.PEOPLE = {
  /* Empty renders the section's data-empty message ("Coming soon.").
     Add an advisor only once they have confirmed in writing that they will be listed. */
  advisors: [],

  team: [
    {
      name: "Deven Bhattacharya",
      role: "Class of 2028",
      photo: "assets/deven-bhattacharya.jpg",
      focus: "54% 4%",
      zoom: 2.5,
      linkedin: "https://www.linkedin.com/in/deven-bhattacharya-3a802b134/"
    },
    {
      name: "Jaymal Lodha",
      role: "Class of 2028",
      photo: "assets/jaymal-lodha.jpg",
      focus: "50% 8%",
      zoom: 2.5,
      linkedin: "https://www.linkedin.com/in/jaymal-lodha/"
    },
    { more: true, name: "More to come", role: "We are bringing on more of the class." }
  ]
};
