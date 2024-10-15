import React from "react";
import DarkModeSwitch from "@/app/ui/dark-mode-switch";
import Socials from "./ui/socials";
import "./ui/global.css"

export default function Page() {
  return (
    <main>
      <div className="container is-full-screen">
        {/* Header */}
        <header>
          <div className="top is-center is-vertical-align">
            <img className="is-rounded" width={ 200 } height={ 200 } src="skelly.png" alt="logo"></img>
            <h1 className="text-center">Ezra Henley</h1>
            <p className="text-center">Links to my social media and blogs</p>
          </div>
        </header>
        {/* Dark/Light Mode Switch */}
        <div className="is-center">
          <DarkModeSwitch />
        </div>
        {/* Socials */}
        {/* var socials: Social[] = ; */}
        {/* <Socials socials={socials}/> */}
      </div>
    </main>
  );
}
