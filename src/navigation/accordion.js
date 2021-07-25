"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import AccordionNavigationList from "../list/navigation/accordion";

import { desktop } from "../breakpoints";

class AccordionNavigation extends Element {
  getAccordionNavigationList() {
    const { AccordionNavigationList } = this.constructor;

    return AccordionNavigationList;
  }

  childElements() {
    const { ArticlesArray, showArticle } = this.properties,
          AccordionNavigationList = this.getAccordionNavigationList();

    return (

      <AccordionNavigationList ArticlesArray={ArticlesArray} showArticle={showArticle} />

    );
  }

  static AccordionNavigationList = AccordionNavigationList;

  static tagName = "nav";

  static defaultProperties = {
    className: "accordion"
  };
}

export default withStyle(AccordionNavigation)`

  display: none;
  
  @media (min-width: ${desktop}) {
  
    display: block;
  
  }
  
`;
