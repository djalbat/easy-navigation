"use strict";

import "./example/preamble";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { controller } from "sufficient";

import View from "./example/view"
import createMethods from "./example/createMethods";

const { renderStyles } = withStyle;

const body = new Body(),
      view =

        <View/>

      ,
      model = null,
      scheduler = null;

controller.assignMethods(createMethods, scheduler, model, view);

window.onpopstate = popStateHandler;

renderStyles();

body.mount(view);

popStateHandler();

function popStateHandler(event) {
  const { location } = document,
        { pathname } = location,
        uri = pathname, ///
        instantly = true,
        updateHistory = false;

  controller.showArticle(uri, instantly, updateHistory);
}
