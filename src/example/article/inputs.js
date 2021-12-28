"use strict";

import Article from "../article";

import { inputsURI } from "../uris";
import { inputsPath } from "../paths";

export default class InputsArticle extends Article {
  childElements() {
    return (

      <div>
        <h1>
          Inputs
        </h1>
      </div>

    );
  }

  static uri = inputsURI;

  static path = inputsPath;

  static title = "Inputs";

  static defaultProperties = {
    className: "inputs"
  };
}
