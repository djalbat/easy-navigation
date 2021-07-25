"use strict";

import { React, Body, window } from "easy";

import View from "./example/view"

window.assign({
  React
});

const body = new Body();

body.mount(

  <View/>

);
