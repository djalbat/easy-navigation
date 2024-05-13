# Easy Navigation

A responsive accordion and associated navigation.

There is an accordion element, which can take an array of arrays of articles, together with a navigation element. The two can be used in tandem or independently. They are responsive in the sense that they can be easily styled to work together with only one of them showing at any one time. They can also be made to respond to changes in the browser's address bar.   

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Mobile](https://github.com/djalbat/easy-mobile) Touch gestures for mobile web applications.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richTextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy Layout with [npm](https://www.npmjs.com/):

    npm install easy-navigation

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-navigation.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

A view class that utilises both the accordion and associated navigation is shown below:

```
import Accordion from "./accordion";
import ArticlesArray from "./articlesArray";
import AccordionNavigation from "./navigation/accordion";

class View extends Element {
  showArticle(uri, instantly) {
    this.updateAccordion(uri, instantly);
    this.updateAccordionNavigation(uri);
  }

  childElements() {
    const showArticle = this.showArticle.bind(this);
    
    return ([

      <Accordion ArticlesArray={ArticlesArray} showArticle={showArticle} />,
      <AccordionNavigation ArticlesArray={ArticlesArray} showArticle={showArticle} />

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
```

You must pass a `showArticles()` method to both the accordion and associated navigation as well as an array of arrays of articles. Note that local instances of both have been used in order that custom styles can be applied. This is explained in greater detail in the section on styles that comes next.

Calling the `assignContext()` method in the view's `initialise()` method makes the `updateAccordion()` and `updateAccordionNavigation()` methods available to the view and it is these methods that are called from its `showArticle()` method. Note that the `updateAccordion()` method takes optional `instantly` and `callback` arguments. If set to `true` the `instantly` argument will force the acoordion to show articles instantly, that is, with no animations. The `callback` argument allows a callback function to be provided that is invoked when the animation completes. If the `instantly` argument has been set to true, this callback is called immediately.  

An example array of arrays of articles is shown below:

```
const ArticlesArray = [ ///
  [ HomeArticle, LinksArticle, ButtonsArticle, HeadingsArticle ],
  CodesArticle,
  InputsArticle,
  SectionsArticle
];

export default ArticlesArray;
```

In fact not all the elements of the outermost array need to be arrays, single articles are coerced into arrays automatically. For genuine arrays the first element is taken as the main article in that it's title is shown in the accordion and associated navigation buttons. There is no second level navigation to enable the other articles to be shown. However, if they are shown by means of links or whatever, both the accordion and associated navigation will respond by enabling the button corresponding to the first article in the array, thus allowing the user to navigate back to it. 

The articles provided must have `title`, `uri` and` path` static properties. For example:

```
import Article from"/../article";

import { buttonsURI } from "../uris";
import { buttonsPath } from "../paths";

export default class ButtonsArticle extends Article {
  childElements() {
    return (

      <div>
        <h1>
          Buttons
        </h1>
      </div>

    );
  }

  static uri = buttonsURI;

  static path = buttonsPath;

  static title = "Buttons";

  static defaultProperties = {
    className: "buttons"
  };
}
```
Note that a predefined `Article` class has been extended here, see the styles section below.

Paths are used to match URIs and should be regular expressions. This means that URIs that include, say, dynamic identifiers, can be matched.

## Styles

The way to make the accordion and associated navigation work in tandem responsively is to hide the accordion's buttons as the screen widens and hide the navigation entirely as the screen narrows. By only hiding the accordion's bottons, its child articles remain visible and this gives the desired effect.

Here is some example styling for the view:

```
export default withStyle(View)`

  padding: 4rem;

  display: block;
  
  @media (min-width: 800px) {

    display: grid;
    
    column-gap: 2rem;
    grid-template-rows: 1fr;
    grid-template-areas: "accordion-navigation accordion";
    grid-template-columns: 20rem auto;

  }

`;
```

Note the use of the grid template areas. These are not present on the accordion and associated navigation by default and must be added with custom styles. Here is an example of styling the associated navigation:

```
import { AccordionNavigation } from "easy-navigation";

export default withStyle(AccordionNavigation)`

  grid-area: accordion-navigation;
  
  display: none;
  
  @media (min-width: 800px) {
  
    display: block;
  
  }

`;
```
Note that as well as the `grid-arae` property the navigation's visibility is toggled as the screen width changes.

Before looking at the accordion, note that you may also wish to create an `Article` class in order to set the appropriate whitespace around the articles:

```
import { Element } from "easy";

class Article extends Element {
  static tagName = "article";
}

export default withStyle(Article)`

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
```

Finally, the accordion's buttons can be made to be responsive with another media query:

```
import { AccordionButton } from "easy=accordion";

export default withStyle(AccordionButton)`

  @media (min-width: 800px) {

    display: none;

  }

`;
```
The accordion must be appraised of this new button and this is done in two stages. First, the `AccordionItem` class must be overridden in the following manner...

```
import { AccordionItem } from "easy-navigation";

import AccordionButton from "../button/accordion";

export default class extends AccordionItem {
  static AccordionButton = AccordionButton;
}
```
...and then the accordion must be appraised of this new item:

```
import { Accordion } from "easy-navigation";

import AccordionItem from "./item/accordion";

export default withStyle(class extends Accordion {
  static AccordionItem = AccordionItem;
})`

  grid-area: accordion;

  border: 1px solid black;
  
  @media (min-width: 800px) {
  
    border: none;
  
  }

`;
```
Note that in this instance it has also been given a responsive border.

It has already been mentioned but it is worth repeating that only the accordion's buttons need to be hidden as the screen widens whilst its child articles remain in use, so to speak. In this way responsiveness is acheived without the need to duplicate content.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
