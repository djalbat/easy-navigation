"use strict";

import withStyle from "easy-with-style";

import { AccordionArticle } from "../../index";

export default withStyle(AccordionArticle)`

  padding: 2rem;
  
  :not(:first-of-type) {

    border-top: 1px solid black;
    
  }

  @media (min-width: 800px) {
  
    padding: 0;
    
    :not(:first-of-type) {
  
      border-top: none;
      
    }
  
  }
  
`;
