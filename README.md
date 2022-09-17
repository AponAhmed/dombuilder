# dombuilder

HTML Dom Builder

## Inastalatio

    `npm i @aponahmed/dombuilder`

## Uses

```javascript
import Dombuilder from "@aponahmed/dombuilder";
let dom = new dombuilder({
  type: "div",
  class: ["element", "parent"],
  attributes: {
    id: "parentElement",
  },
  events: {
    click: function () {
      console.log("clicked on Parent");
    },
  },
  nodes: [
    {
      type: "span",
      class: "child",
      innerHTML: "Hello ",
    },
    {
      type: "span",
      class: "child",
      innerHTML: " world ",
    },
  ],
});
dom.render(document.getElementById("wrap"));
```
