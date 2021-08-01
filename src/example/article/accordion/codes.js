"use strict";

import AccordionArticle from "../../article/accordion";

import { codesURI } from "../../uris";
import { codesPath } from "../../paths";

export default class CodesAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h2>
          Codes
        </h2>
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
