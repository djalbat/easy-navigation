"use strict";

import { Element } from "easy";

export default class AccordionArticle extends Element {
  static getURI() {
    return this.uri;
  }

  static getPath() {
    return this.path;
  }

  static getTitle() {
    return this.title;
  }

  static isURIArticleURI(uri) {
    const path = this.getPath(),
          uriArticleURI = path.test(uri);  ///

    return uriArticleURI;
  }

  static tagName = "article";

  static defaultProperties = {
    className: "accordion"
  };
}
