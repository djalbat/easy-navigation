"use strict";

import HomeAccordionArticle from "./article/accordion/home"
import LinksAccordionArticle from "./article/accordion/links"
import CodesAccordionArticle from "./article/accordion/codes"
import InputsAccordionArticle from "./article/accordion/inputs"
import ButtonsAccordionArticle from "./article/accordion/buttons";
import SectionsAccordionArticle from "./article/accordion/sections"
import HeadingsAccordionArticle from "./article/accordion/headings";

const ArticlesArray = [ ///
  [ HomeAccordionArticle, LinksAccordionArticle, ButtonsAccordionArticle, HeadingsAccordionArticle ],
  CodesAccordionArticle,
  InputsAccordionArticle,
  SectionsAccordionArticle
];

export default ArticlesArray;
