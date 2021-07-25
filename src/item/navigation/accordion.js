"use strict";

import { Element } from "easy";

import AccordionNavigationButton from "../../button/navigation/accordion";

export default class AccordionNavigationItem extends Element {
  getAccordionNavigationButton() {
    const { AccordionNavigationButton } = this.constructor;

    return AccordionNavigationButton;
  }

  childElements() {
    const { Articles, first, last, showArticle } = this.properties,
          [ Article ] = Articles,
          AccordionNavigationButton = this.getAccordionNavigationButton();

    return (

      <AccordionNavigationButton Article={Article} first={first} last={last} showArticle={showArticle} />

    );
  }

  static AccordionNavigationButton = AccordionNavigationButton;

  static tagName = "li";

  static defaultProperties = {
    className: "accordion navigation"
  };
}
