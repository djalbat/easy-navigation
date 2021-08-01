"use strict";

import { AccordionArticle } from "../../../index";  ///

import { inputsURI } from "../../uris";
import { inputsPath } from "../../paths";

export default class InputsAccordionArticle extends AccordionArticle {
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
