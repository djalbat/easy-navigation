"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import AccordionNavigationItem from "../../item/navigation/accordion";

import { guaranteeArray } from "../../utilities/array";

class AccordionNavigationList extends Element {
  getButtons() {
    const maximumDepth = 2,
          buttonDescendantElements = this.getDescendantElements("button", maximumDepth),
          buttons = buttonDescendantElements;  ///

    return buttons;
  }

  update(uri) {
    const buttons = this.getButtons();

    buttons.forEach((button) => {
      const uriArticleURI = button.isURIArticleURI(uri);

      if (uriArticleURI) {
        button.disable();
        button.blur();
      } else {
        button.enable();
      }
    });
  }

  childElements() {
    const { AccordionNavigationItem } = this.constructor,
          { ArticlesArray, showArticle } = this.properties,
          ArticlesArrayLength = ArticlesArray.length,
          firstIndex = 0,
          lastIndex = ArticlesArrayLength - 1,
          items = ArticlesArray.map((ArticleOrArticles, index) => {
            const last = (index === lastIndex),
                  first = (index === firstIndex),
                  Articles = guaranteeArray(ArticleOrArticles); ///

            return (

              <AccordionNavigationItem Articles={Articles} first={first} last={last} showArticle={showArticle} />

            );
          }),
          childElements = items;  ///

    return childElements;
  }

  parentContext() {
    const updateAccordionNavigation = this.update.bind(this);  ///

    return ({
      updateAccordionNavigation
    });
  }

  static AccordionNavigationItem = AccordionNavigationItem;

  static tagName = "ul";

  static defaultProperties = {
    className: "accordion-navigation"
  };
}

export default withStyle(AccordionNavigationList)`

  list-style-type: none;
  
`;
