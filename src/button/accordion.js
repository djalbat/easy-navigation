"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class AccordionButton extends Button {
  clickHandler(event, element) {
    const { showArticle, Article } = this.properties,
          { uri } = Article;

    showArticle(uri);
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

    return title;
  }

  parentContext() {
    const blurButton = this.blur.bind(this),  ///
          enableButton = this.enable.bind(this),  ///
          disableButton = this.disable.bind(this),  ///
          isButtonDisplayed = this.isDisplayed.bind(this),  ///
          parentContext = {
            blurButton,
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
  height: 4rem;
  cursor: pointer;
  border-top: 1px solid black; 

  .first {
    border-top: none;
  }

  :disabled {
    cursor: auto;
    background: none;
    font-weight: bold;
  }

`;
