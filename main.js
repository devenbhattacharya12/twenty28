(function () {
  "use strict";

  /* ---- current year in the footer ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---- hairline under the masthead once the page scrolls ---- */
  var masthead = document.getElementById("masthead");
  if (masthead) {
    var mark = function () {
      masthead.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    mark();
    window.addEventListener("scroll", mark, { passive: true });
  }

  /* ---- people grids ---- */
  function initials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (part) { return part.charAt(0).toUpperCase(); })
      .join("");
  }

  function renderPerson(person) {
    var el = document.createElement("article");
    el.className = "person";

    var photo = document.createElement("div");
    photo.className = "person__photo";
    if (person.focus) photo.style.setProperty("--focus", person.focus);
    if (person.zoom) photo.style.setProperty("--zoom", String(person.zoom));
    if (person.photo) {
      var img = document.createElement("img");
      img.src = person.photo;
      img.alt = person.name;
      img.loading = "lazy";
      /* A missing file falls back to initials rather than a broken image. */
      img.addEventListener("error", function () {
        img.remove();
        photo.textContent = initials(person.name);
      });
      photo.appendChild(img);
    } else {
      photo.textContent = initials(person.name);
    }
    el.appendChild(photo);

    var name = document.createElement("p");
    name.className = "person__name";
    name.textContent = person.name;
    el.appendChild(name);

    if (person.role) {
      var role = document.createElement("p");
      role.className = "person__role";
      role.textContent = person.role;
      el.appendChild(role);
    }

    if (person.linkedin) {
      var link = document.createElement("a");
      link.className = "person__link";
      link.href = person.linkedin;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "LinkedIn";
      link.setAttribute("aria-label", "LinkedIn profile for " + person.name);
      el.appendChild(link);
    }

    return el;
  }

  /* An open slot rather than a person: dashed tile, no initials, no link. */
  function renderOpenSlot(entry) {
    var el = document.createElement("article");
    el.className = "person person--more";

    var tile = document.createElement("div");
    tile.className = "person__photo person__photo--more";
    tile.textContent = "+";
    el.appendChild(tile);

    var name = document.createElement("p");
    name.className = "person__name";
    name.textContent = entry.name || "More to come";
    el.appendChild(name);

    if (entry.role) {
      var role = document.createElement("p");
      role.className = "person__role";
      role.textContent = entry.role;
      el.appendChild(role);
    }

    return el;
  }

  var people = window.PEOPLE || {};
  Array.prototype.forEach.call(document.querySelectorAll("[data-people]"), function (grid) {
    var list = people[grid.dataset.people] || [];

    if (!list.length) {
      var empty = document.createElement("p");
      empty.className = "people__empty";
      empty.textContent = grid.dataset.empty || "Coming soon.";
      grid.appendChild(empty);
      return;
    }

    list.forEach(function (entry) {
      grid.appendChild(entry.more ? renderOpenSlot(entry) : renderPerson(entry));
    });
  });

  /* ---- reveal on scroll ---- */
  var targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.dataset.visible = "true"; });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.dataset.visible = "true";
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  Array.prototype.forEach.call(targets, function (el) { observer.observe(el); });
})();
