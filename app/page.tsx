import React from "react";
import DarkModeSwitch from "@/app/ui/dark-mode-switch";
import Socials, { SocialDto } from "./ui/socials";
import "./ui/global.css"

export default function Page() {
  function renderSocials() {
    let socials: SocialDto[] = [
      { name: "Bluesky", url: "https://bsky.app/profile/ezrahenley.com", iconName: "ri:bluesky-fill", color: "#43a4ec"},
      { name: "Instagram", url: "https://www.instagram.com/lightningmcquing", iconName: "ri:instagram-fill", color: "#E4405F"},
      { name: "Github", url: "https://github.com/Hoid", iconName: "ri:github-fill", color: "#E4405F"}
    ];
    return (<Socials socials={socials}/>)
  }

  return (
    <main>
      <script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
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
        {renderSocials()}
      </div>
    </main>
  );
}
