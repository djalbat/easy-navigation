"use strict";

import withStyle from "easy-with-style";  ///

import { Accordion, AccordionNavigation } from "../index";  ///

import ArticlesArray from "./articlesArray";

const View = (properties) =>

  <div className="view">
    <Accordion ArticlesArray={ArticlesArray} />
    <AccordionNavigation ArticlesArray={ArticlesArray} />
  </div>

;

export default withStyle(View)`

  display: block;
  
  @media (min-width: 1000px) {

    display: grid;
    
    column-gap: 2rem;
    grid-template-rows: 1fr;
    grid-template-areas: "accordion-navigation accordion";
    grid-template-columns: 20rem auto;

  }

`;
