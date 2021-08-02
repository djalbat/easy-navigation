"use strict";

import AccordionArticle from "../../article/accordion";

import { codesURI } from "../../uris";
import { codesPath } from "../../paths";

export default class CodesAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h1>
          Codes
        </h1>
      </div>

    );
  }

  static uri = codesURI;

  static path = codesPath;

  static title = "Codes";

  static defaultProperties = {
    className: "code"
  };
}
