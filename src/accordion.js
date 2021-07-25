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

  getAccordionItem() {
    const { AccordionItem } = this.constructor;

    return AccordionItem;
  }

  update(uri, instantly, callback) {
    const items = this.getItems();

    items.forEach((item) => item.update(uri, instantly, callback));
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
    const { ArticlesArray, showArticle } = this.properties,
          AccordionItem = this.getAccordionItem(),
          ArticlesArrayLength = ArticlesArray.length,
          lastIndex = ArticlesArrayLength - 1,
          items = ArticlesArray.map((ArticleOrArticles, index) => {
            const last = (index === lastIndex),
                  Articles = guaranteeArray(ArticleOrArticles); ///

            return (

              <AccordionItem Articles={Articles} last={last} showArticle={showArticle} />

            );
          });

    return ([

      ...items

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          updateAccordion = this.update.bind(this), ///
          parentContext = Object.assign({}, context, {
            updateAccordion
          });

    return parentContext;
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
