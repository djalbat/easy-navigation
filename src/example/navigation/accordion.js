"use strict";

import withStyle from "easy-with-style";  ///

import { AccordionNavigation } from "../../index"; ///

export default withStyle(AccordionNavigation)`

  grid-area: accordion-navigation;
  
  display: none;
  
  @media (min-width: 600px) {
  
    display: block;
  
  }

`;
