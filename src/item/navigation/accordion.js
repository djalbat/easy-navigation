"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import AccordionNavigationButton from "../../button/navigation/accordion";

class AccordionNavigationItem extends Element {
  childElements() {
    const { Articles, first, last, showArticle } = this.properties,
          { AccordionNavigationButton } = this.constructor,
          [ Article ] = Articles;

    return (

      <AccordionNavigationButton Article={Article} first={first} last={last} showArticle={showArticle} />

    );
  }

  static AccordionNavigationButton = AccordionNavigationButton;

  static tagName = "li";

  static defaultProperties = {
    className: "accordion-navigation"
  };
}

export default withStyle(AccordionNavigationItem)`

  height: 4rem;
  
`;
