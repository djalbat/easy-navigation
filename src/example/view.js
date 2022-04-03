"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";

import Accordion from "./accordion";
import ArticlesArray from "./articlesArray";
import AccordionNavigation from "./navigation/accordion";

class View extends Element {
  showArticle(uri, instantly) {
    this.updateAccordion(uri, instantly);

    this.updateAccordionNavigation(uri);
  }

  childElements() {
    const showArticle = (uri) => controller.showArticle(uri);

    return ([

      <Accordion ArticlesArray={ArticlesArray} showArticle={showArticle} />,
      <AccordionNavigation ArticlesArray={ArticlesArray} showArticle={showArticle} />

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  display: block;
  
  @media (min-width: 800px) {

    display: grid;
    
    column-gap: 2rem;
    grid-template-rows: 1fr;
    grid-template-areas: "accordion-navigation accordion";
    grid-template-columns: 20rem auto;

  }

`;
