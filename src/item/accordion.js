"use strict";

import { Element } from "easy";

import AccordionDiv from "../div/accordion";
import AccordionButton from "../button/accordion";

export default class AccordionItem extends Element {
  getArticles() {
    const maximumDepth = 2,
          descendantArticleElements = this.getDescendantElements("article", maximumDepth),
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
            const { path } = Article,
                  uriArticleURI = path.test(uri);

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

  update(uri, instantly) {
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
      const { path } = Article,
            article = articles[index],
            uriArticleURI = path.test(uri);

      uriArticleURI ?
        article.show() :
          article.hide();
    });

    this.disable(uri);

    this.expand(initialHeight, instantly);
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

  expand(initialHeight, instantly) {
    this.expandDiv(initialHeight, instantly);
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
