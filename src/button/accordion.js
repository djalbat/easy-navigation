"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class AccordionButton extends Button {
  clickHandler(event, element) {
    const { showArticle, Article } = this.properties,
          uri = Article.getURI();

    showArticle(uri);
  }

  didMount() {
    const { last } = this.properties;

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

    return title;
  }

  parentContext() {
    const enableButton = this.enable.bind(this),  ///
          disableButton = this.disable.bind(this),  ///
          isButtonDisplayed = this.isDisplayed.bind(this),  ///
          parentContext = {
            enableButton,
            disableButton,
            isButtonDisplayed
          };

    return parentContext;
  }

  static ignoredProperties = [
    "Article"
  ];

  static defaultProperties = {
    className: "accordion"
  };
}

export default withStyle(AccordionButton)`

  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid black; 

  .last {
    border-bottom: none;
  }

  :disabled {
    cursor: auto;
    background: none;
    font-weight: bold;
    border-bottom: none;
  }

`;
