"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { ACCORDION_SCALE_FACTOR } from "../constants";

class AccordionDiv extends Element {
  expand(initialHeight, instantly) {
    const height = this.getHeight(),
          finalHeight = height; ///

    this.removeClass("collapsed");

    this.resize(initialHeight, finalHeight, instantly);
  }

  collapse(instantly, done) {
    const height = this.getHeight(),
          finalHeight = 0,
          initialHeight = height; ///

    this.resize(initialHeight, finalHeight, instantly, () => {
      this.addClass("collapsed");

      done();
    });
  }

  getHeight() {
    let height;

    const display = this.style("display");

    this.show();

    height = super.getHeight();

    this.display(display);

    return height;
  }

  isCollapsed() {
    const collapsed = this.hasClass("collapsed");

    return collapsed;
  }

  setHeight(height) {
    height = (height === "auto") ?
      height :
      `${height}px`; ///

    this.style("height", height);
  }

  resize(initialHeight, finalHeight, instantly, done) {
    if (instantly) {
      done && done(); ///

      return;
    }

    const initialTime = Date.now();

    this.animate(initialTime, initialHeight, finalHeight, () => {
      this.setHeight("auto");

      done && done(); ///
    });
  }

  animate(initialTime, initialHeight, finalHeight, done) {
    const currentTime = Date.now(), ///
          elapsedTime = currentTime - initialTime,
          scale = elapsedTime / ACCORDION_SCALE_FACTOR,
          completed = (scale > 1);

    if (completed) {
      done();

      return;
    }

    const heightDifference = (finalHeight - initialHeight),
          height = initialHeight + scale * heightDifference;

    this.setHeight(height);

    requestAnimationFrame(() => {
      this.animate(initialTime, initialHeight, finalHeight, done);
    });
  }

  parentContext() {
    const context = this.getContext(),
          resizeDiv = this.resize.bind(this), ///
          expandDiv = this.expand.bind(this), ///
          collapseDiv = this.collapse.bind(this), ///
          isCollapsed = this.isCollapsed.bind(this),
          getDivHeight = this.getHeight.bind(this),
          parentContext = Object.assign({}, context, {
            resizeDiv,
            expandDiv,
            collapseDiv,
            isCollapsed,
            getDivHeight
          });

    return parentContext;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "accordion"
  };
}

export default withStyle(AccordionDiv)`

  overflow: hidden;

  display: block;
  
  .collapsed {
    display: none;
  }
  
`;
