"use strict";

import AccordionArticle from "../../article/accordion";

import { headingsURI } from "../../uris";
import { headingsPath } from "../../paths";

export default class HeadingsAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h1>
            Headings
        </h1>
      </div>

    );
  }

  static uri = headingsURI;

  static path = headingsPath;

  static title = "Headings";

  static defaultProperties = {
    className: "headings"
  };
}
