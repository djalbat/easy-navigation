"use strict";

import Article from "../article";

import { sectionsURI } from "../uris";
import { sectionsPath } from "../paths";

export default class SectionsArticle extends Article {
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
