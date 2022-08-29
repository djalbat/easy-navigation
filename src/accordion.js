"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import AccordionItem from "./item/accordion";

import { guaranteeArray } from "./utilities/array";

class Accordion extends Element {
  getItems() {
    const childElements = this.getChildElements(),
          items = childElements;  ///

    return items;
  }

  update(uri, instantly) {
    const items = this.getItems(),
          article = items.reduce((article, item) => {
            const itemArticle = item.update(uri, instantly);

            if (itemArticle !== null) {
              article = itemArticle;  ///
            }

            return article;
          }, null);

    return article;
  }

  didMount() {
    const items = this.getItems(),
          instantly = true;

    items.forEach((item) => item.collapse(instantly));
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { AccordionItem } = this.constructor,
          { ArticlesArray, showArticle } = this.properties,
          ArticlesArrayLength = ArticlesArray.length,
          lastIndex = ArticlesArrayLength - 1,
          firstIndex = 0,
          items = ArticlesArray.map((ArticleOrArticles, index) => {
            const last = (index === lastIndex),
                  first = (index === firstIndex),
                  Articles = guaranteeArray(ArticleOrArticles); ///

            return (

              <AccordionItem Articles={Articles} first={first} last={last} showArticle={showArticle} />

            );
          }),
          childElements = items;  ///

    return childElements;
  }

  parentContext() {
    const context = this.getContext(),
          updateAccordion = this.update.bind(this); ///

    return ({
      ...context,
      updateAccordion
    });
  }

  static AccordionItem = AccordionItem;

  static tagName = "ul";  ///

  static defaultProperties = {
    className: "accordion"
  };
}

export default withStyle(Accordion)`

  list-style-type: none;
  
`;
