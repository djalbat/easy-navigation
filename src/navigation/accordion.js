"use strict";

import { Element } from "easy";

import AccordionNavigationList from "../list/navigation/accordion";

export default class AccordionNavigation extends Element {
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
