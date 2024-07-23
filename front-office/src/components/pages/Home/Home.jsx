import { React, useState } from "react";
import "./Home.css";
import { languageEN } from "../../../languages/en";
import { languageES } from "../../../languages/es";

export default function Home() {
  const [selLang, setSelLang] = useState(languageEN);

  const changeLanguage = () => {
    if (selLang.language === "EN") {
      setSelLang(languageES);
    } else {
      setSelLang(languageEN);
    }
  };
  return (
    <div>
      <div className="text-3xl font-bold underline">
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my projects and get to know more about me.</p>
      </div>
      <div class="bg-white dark:bg-gray-800">
        <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>
      <button class="lg:dark:hover:bg-white ...">Test</button>

      <div class="bg-white dark:bg-black">
        <p>Will be white</p>
      </div>
      <div class="dark">
        <div class="bg-white dark:bg-black text-white">Will be black</div>
      </div>
      <br />
      <button style={{ border: "1px solid #000" }} onClick={changeLanguage}>
        Change Language
      </button>
      <div>{selLang.home.par1}</div>
      <div>{selLang.home.par2}</div>
      <div>{selLang.home.par3}</div>
    </div>
  );
}
