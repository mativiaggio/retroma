import React from "react";
import "./Loader.scss";

import { LineWobble } from "@uiball/loaders";

function Loader() {
  return (
    <div className="loader-container">
      <LineWobble size={80} lineWeight={5} speed={1.5} color="white" />
    </div>
  );
}

export default Loader;
