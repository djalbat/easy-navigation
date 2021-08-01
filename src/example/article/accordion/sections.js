"use strict";

import AccordionArticle from "../../article/accordion";

import { sectionsURI } from "../../uris";
import { sectionsPath } from "../../paths";

export default class SectionsAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h1>
          Sections
        </h1>
      </div>

    );
  }

  static uri = sectionsURI;

  static path = sectionsPath;

  static title = "Sections";

  static defaultProperties = {
    className: "sections"
  };
}
