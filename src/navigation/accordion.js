"use strict";

import { Element } from "easy";

import AccordionNavigationList from "../list/navigation/accordion";

export default class AccordionNavigation extends Element {
  childElements() {
    const { AccordionNavigationList } = this.constructor,
          { ArticlesArray, showArticle } = this.properties;

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
