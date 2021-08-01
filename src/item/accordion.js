"use strict";

import { Element } from "easy";

import AccordionDiv from "../div/accordion";
import AccordionButton from "../button/accordion";

export default class AccordionItem extends Element {
  getArticles() {
    const descendantArticleElements = this.getDescendantElements("article", 2),
          articles = descendantArticleElements; ///

    return articles;
  }

  getAccordionDiv() {
    const { AccordionDiv } = this.constructor;

    return AccordionDiv;
  }

  getAccordionButton() {
    const { AccordionButton } = this.constructor;

    return AccordionButton;
  }

  getArticleIndex(uri) {
    const { Articles } = this.properties,
          articleIndex = Articles.findIndex((Article) => {
            const uriArticleURI = Article.isURIArticleURI(uri);

            if (uriArticleURI) {
              return true;
            }
          });

    return articleIndex;
  }

  getInitialHeight(collapsed) {
    let initialHeight;

    if (collapsed) {
      initialHeight = 0;
    } else {
      const divHeight = this.getDivHeight();

      initialHeight = divHeight;  ///
    }

    return initialHeight;
  }

  isArticlePresent(uri) {
    const articleIndex = this.getArticleIndex(uri),
          articlePresent = (articleIndex !== -1);

    return articlePresent;
  }

  update(uri, instantly, callback) {
    const buttonDisplayed = this.isButtonDisplayed();

    if (!buttonDisplayed) {
      instantly = true;
    }

    const collapsed = this.isCollapsed(),
          articlePresent = this.isArticlePresent(uri);

    if (!articlePresent) {
      if (!collapsed) {
        this.collapse(instantly);
      }

      return;
    }

    const { Articles } = this.properties,
          articles = this.getArticles(),
          initialHeight = this.getInitialHeight(collapsed);

    Articles.forEach((Article, index) => {
      const article = articles[index],
            uriArticleURI = Article.isURIArticleURI(uri);

      uriArticleURI ?
        article.show() :
          article.hide();
    });

    this.disable(uri);

    this.expand(initialHeight, instantly, callback);
  }

  enable() {
    this.enableButton();
  }

  disable(uri) {
    const articleIndex = this.getArticleIndex(uri),
          articleFirstArticle = (articleIndex === 0);

    articleFirstArticle ?
      this.disableButton():
        this.enableButton();
  }

  expand(initialHeight, instantly, callback) {
    this.expandDiv(initialHeight, instantly, callback);
  }

  collapse(instantly) {
    this.collapseDiv(instantly, () => this.enable());
  }

  childElements() {
    const { Articles, first, last, showArticle } = this.properties,
          [ Article ] = Articles,
          AccordionDiv = this.getAccordionDiv(),
          AccordionButton = this.getAccordionButton(),
          articles = Articles.map((Article, index) =>

            <Article index={index} />

          );

    return ([

      <AccordionButton Article={Article} first={first} last={last} showArticle={showArticle} />,
      <AccordionDiv>
        {articles}
      </AccordionDiv>

    ]);
  }

  initialise() {
    this.assignContext([
      "getDivHeight",
      "resizeDiv",
      "expandDiv",
      "isCollapsed",
      "collapseDiv",
      "enableButton",
      "disableButton",
      "activateButton",
      "deactivateButton",
      "isButtonDisplayed"
    ]);
  }

  static AccordionDiv = AccordionDiv;

  static AccordionButton = AccordionButton;

  static tagName = "li";

  static defaultProperties = {
    className: "accordion"
  };
}
