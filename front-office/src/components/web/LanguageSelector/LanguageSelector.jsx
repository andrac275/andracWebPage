import { React, useState } from "react";
import "./LanguageSelector.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { languageEN } from "../../../languages/en";
import { languageES } from "../../../languages/es";
import { ENGLISH, SPANISH } from "../../../languages/languageConstants";

export default function LanguageSelector() {
  const [language, setLanguage] = useState(languageES);
  const [languageToggle, setLanguageToggle] = useState(SPANISH);

  const changeLanguage = (event, value) => {
    setLanguageToggle(value);
    if (value === ENGLISH) {
      setLanguage(languageEN);
    } else if (value === SPANISH) {
      setLanguage(languageES);
    }
  };

  return (
    <div className="languageSelector">
      <ToggleButtonGroup
        value={languageToggle}
        exclusive
        onChange={changeLanguage}
      >
        <ToggleButton value={SPANISH}>
          <span class="fi fi-es"></span>
        </ToggleButton>
        <ToggleButton value={ENGLISH}>
          <span class="fi fi-gb"></span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
