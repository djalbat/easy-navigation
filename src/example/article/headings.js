"use strict";

import Article from "../article";

import { headingsURI } from "../uris";
import { headingsPath } from "../paths";

export default class HeadingsArticle extends Article {
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
