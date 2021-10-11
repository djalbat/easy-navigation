"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import AccordionNavigationItem from "../../item/navigation/accordion";

import { guaranteeArray } from "../../utilities/array";

class AccordionNavigationList extends Element {
  getAccordionNavigationItem() {
    const { AccordionNavigationItem } = this.constructor;

    return AccordionNavigationItem;
  }

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

      (uriArticleURI) ?
        button.disable() :
          button.enable();
    });
  }

  childElements() {
    const { ArticlesArray, showArticle } = this.properties,
          ArticlesArrayLength = ArticlesArray.length,
          AccordionNavigationItem = this.getAccordionNavigationItem(),
          firstIndex = 0,
          lastIndex = ArticlesArrayLength - 1,
          items = ArticlesArray.map((ArticleOrArticles, index) => {
            const last = (index === lastIndex),
                  first = (index === firstIndex),
                  Articles = guaranteeArray(ArticleOrArticles); ///

            return (

              <AccordionNavigationItem Articles={Articles} first={first} last={last} showArticle={showArticle} />

            );
          });

    return ([

      ...items

    ]);
  }

  parentContext() {
    const updateAccordionNavigation = this.update.bind(this),  ///
          parentContext = {
            updateAccordionNavigation
          };

    return parentContext;
  }

  static AccordionNavigationItem = AccordionNavigationItem;

  static tagName = "ul";

  static defaultProperties = {
    className: "accordion navigation"
  };
}

export default withStyle(AccordionNavigationList)`

  list-style-type: none;
  
`;
