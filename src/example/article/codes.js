"use strict";

import Article from "../article";

import { codesURI } from "../uris";
import { codesPath } from "../paths";

export default class CodesArticle extends Article {
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
