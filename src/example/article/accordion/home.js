"use strict";

import { AccordionArticle } from "../../../index";  ///

import { homeURI } from "../../uris";
import { homePath } from "../../paths";

export default class HomeAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h2>
          Home
        </h2>
      </div>

    );
  }

  static uri = homeURI;

  static path = homePath;

  static title = "Home";

  static defaultProperties = {
    className: "home"
  };
}
