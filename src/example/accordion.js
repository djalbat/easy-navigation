"use strict";

import withStyle from "easy-with-style";  ///

import { Accordion } from "../index"; ///

import AccordionItem from "./item/accordion";

export default withStyle(class extends Accordion {
  static AccordionItem = AccordionItem;
})`

  grid-area: accordion;
  
`;
