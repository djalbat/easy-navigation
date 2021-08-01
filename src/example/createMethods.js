"use strict";

export default function createMethods(scheduler, model, view) {
  function showArticle(uri, instantly = false, updateHistory = true) {
    if (updateHistory) {
      history.pushState(null, null, uri);
    }

    view.showArticle(uri, instantly);
  }

  return ({
    showArticle
  });
}
