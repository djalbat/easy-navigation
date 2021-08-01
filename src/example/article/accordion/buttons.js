"use strict";

import { AccordionArticle } from "../../../index";  ///

import { buttonsURI } from "../../uris";
import { buttonsPath } from "../../paths";

export default class ButtonsAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h1>
          Buttons
        </h1>
      </div>

    );
  }

  static uri = buttonsURI;

  static path = buttonsPath;

  static title = "Buttons";

  static defaultProperties = {
    className: "buttons"
  };
}
