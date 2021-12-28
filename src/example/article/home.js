"use strict";

import Article from "../article";

import LinkButton from "../button/link";

import { homePath } from "../paths";
import { homeURI, linksURI, buttonsURI, headingsURI } from "../uris";

export default class HomeArticle extends Article {
  childElements() {
    return (

      <div>
        <h1>
          Home
        </h1>
        <ul>
          <li>
            <LinkButton onClick={(event, element) => controller.showArticle(linksURI)}>
              Links
            </LinkButton>
          </li>
          <li>
            <LinkButton onClick={(event, element) => controller.showArticle(buttonsURI)}>
              Buttons
            </LinkButton>
          </li>
          <li>
            <LinkButton onClick={(event, element) => controller.showArticle(headingsURI)}>
              Headings
            </LinkButton>
          </li>
        </ul>
      </div>

    );
  }

  static uri = homeURI;

  static path = homePath;

  static title = "Home";

  static defaultProperties = {
    className: "home"
  };
}
