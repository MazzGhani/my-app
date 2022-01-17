import React from "react";

export default function NavBar() {
  return (
    <div class="navigation">
  <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
  <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
  </label>
  <div class="navigation__background">&nbsp;
  Hello
  </div>
  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item"><a href="/" class="navigation__link">HOME</a> </li>
      <li class="navigation__item"><a href="/about" class="navigation__link">ABOUT ME</a> </li>
      <li class="navigation__item"><a href="/islamic-classes" class="navigation__link">PROJECTS</a> </li>
      <li class="navigation__item"><a href="/services" class="navigation__link">EXPERIENCE</a> </li>
      <li class="navigation__item"><a href="/media-releases" class="navigation__link">CONTACT ME</a> </li>
    </ul>
  </nav>
</div>
  );
}
