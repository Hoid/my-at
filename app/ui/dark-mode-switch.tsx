'use client';

import { useLayoutEffect } from "react";

export default function DarkModeSwitch() {

  useLayoutEffect(() => {
    const userPrefersDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userPrefersDarkTheme) {
      document.body.classList.add("dark");
      document.querySelector("#theme-switch")!.textContent = "🌙";
    }
  }, [])

  const switchMode = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const d = document.body.classList;
    if (d.contains("dark")) {
      event.currentTarget.textContent = "☀️";
      d.remove("dark");
    } else {
      event.currentTarget.textContent = "🌙";
      d.add("dark");
    }
  }

  return (
    <a
      className="bd-primary is-rounded is-center"
      href="#"
      id="theme-switch"
      onClick={switchMode}
      aria-label="Switch Theme"
      role="button"
    >☀️</a>
  );

}