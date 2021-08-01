"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class AccordionNavigationButton extends Button {
  clickHandler(event, element) {
    const { showArticle, Article } = this.properties,
          uri = Article.getURI();

    showArticle(uri);
  }

  isURIArticleURI(uri) {
    const { Article } = this.properties,
          uriArticleURI = Article.isURIArticleURI(uri);

    return uriArticleURI;
  }

  didMount() {
    const { first, last } = this.properties;

    if (first) {
      this.addClass("first");
    }

    if (last) {
      this.addClass("last");
    }

    this.onClick(this.clickHandler, this);
  }

  willUnmount() {
    this.offClick(this.clickHandler, this);
  }

  childElements() {
    const { Article } = this.properties,
          { title } = Article;

    return title; ///
  }

  static ignoredProperties = [
    "Article"
  ];

  static defaultProperties = {
    className: "accordion navigation"
  };
}

export default withStyle(AccordionNavigationButton)`

  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 1px solid black;
  border-top: none;

  .first {
    border-top: 1px solid black;
  }
  
  :disabled {
    cursor: auto;
    border: none;
    background: none;
    font-weight: bold;
  }

  :disabled:not(.last) {
    border-bottom: 1px solid black;
  }

`;
