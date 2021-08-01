"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Accordion from "./accordion";
import ArticlesArray from "./articlesArray";
import AccordionNavigation from "./navigation/accordion";

class View extends Element {
  showArticle(uri, instantly, callback) {
    this.updateAccordion(uri, instantly, callback);

    this.updateAccordionNavigation(uri);
  }

  childElements() {
    const showArticle = this.showArticle.bind(this);

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

  padding: 4rem;

  display: block;
  
  @media (min-width: 800px) {

    display: grid;
    
    column-gap: 2rem;
    grid-template-rows: 1fr;
    grid-template-areas: "accordion-navigation accordion";
    grid-template-columns: 20rem auto;

  }

`;
