"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class LinkButton extends Button {
  static defaultProperties = {
    className: "link"
  };
}

export default withStyle(LinkButton)`

  color: blue;
  cursor: pointer;
  border: none;
  display: inline;
  padding: 0;
  background: transparent;
  
  :hover {
    text-decoration: underline;
  }
  
  :disabled {
    cursor: auto;
  }
  
  :disabled:hover {
    text-decoration: none;
  }
  
`;
