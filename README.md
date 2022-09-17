# dombuilder

HTML Dom Builder

## Inastalation

`npm i @aponahmed/dombuilder`

## Import

`import { Obj2Dom, Dombuilder } from "@aponahmed/dombuilder";`

## Uses Dom Builder :: Dombuilder

```javascript
let div = new Dombuilder("div")
  .attr("data-type", "hello Attr")
  .class("div")
  .event("click", () => {
    console.log("Hello");
  })
  .html("Click to Hello")
  .append(
    new Dombuilder("button").html("Say Hello").event("click", () => {
      div.html("Hello !");
    }).element
  );
div.renderTo(document.getElementById("app"));
```
### Methods
#### attr(AttributeName, Value) 
To set Attributs in element
#### class(className)  
To add Class in element
#### event(EventName,Callback)
Bind Event with element, @param1 for event Name and @param2 for calback
#### html(html)  
Add Inner Html of element, @Param should be String
#### appendHtml(html) 
To Append Html after element inner Html
#### append(DomElement)  
To append Chield Element @Param should Dom element
#### renderTo(DomElement)  
To Output Dom Elements, @Param DomElement is output wraper element  

## Uses object To Dom :: Obj2Dom

### General Dom Elements

```javascript
let dom = new Obj2Dom({
  type: "div",
  class: "input-wrap",
  nodes: [
    {
      type: "div",
      nodes: [
        { type: "label", nodes: "Name :" },
        {
          type: "input",
          class: "from-control",
          attribute: {
            type: "text",
          },
          events: {
            change: (event) => {
              console.log("Changed to : " + event.target.value);
            },
          },
        },
      ],
    },
  ], //End Child node of main Div
});

dom.render(document.getElementById("app"));
```

### Table

```javascript
let table = {
  type: "table",
  class: ["table", "table-data"],
  attributes: { border: 1 },
  nodes: [
    {
      type: "thead",
      nodes: [
        {
          type: "tr",
          nodes: [
            { type: "th", nodes: "Name" },
            { type: "th", nodes: "Email" },
            { type: "th", nodes: "Mobile" },
          ],
        },
      ],
    },
    {
      type: "tbody",
      nodes: [
        {
          type: "tr",
          nodes: [
            { type: "td", nodes: "Jhon Doe" },
            { type: "td", nodes: "jhon@dummy.com" },
            { type: "td", nodes: "+02126625563" },
          ],
        },
      ],
    },
  ],
};

let dom = new Obj2Dom(table);
dom.render(document.getElementById("app"));
```
