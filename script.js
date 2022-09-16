module.export = class Dom {
  constructor(object) {
    this.object = object;
    this.init();
  }
  init() {
    this.dom = this.buildDom(this.object);
  }
  buildDom(obj) {
    let elm = document.createElement(obj.type);
    //Class
    if (typeof obj.class === "string") {
      elm.classList.add(obj.class); //Loop For Multiple class
    } else {
      obj.class.forEach((v) => {
        elm.classList.add(v);
      });
    }
    //Attribute
    if (obj.hasOwnProperty("attributes")) {
      for (const AttName in obj.attributes) {
        elm.setAttribute(AttName, obj.attributes[AttName]);
      }
    }
    //Attribute
    if (obj.hasOwnProperty("events")) {
      for (const eventName in obj.events) {
        elm.addEventListener(eventName, obj.events[eventName]);
      }
    }
    //innetHTML
    if (obj.hasOwnProperty("innerHTML")) {
      elm.innerHTML = obj.innerHTML;
    }
    //Child Node
    if (obj.hasOwnProperty("nodes")) {
      obj.nodes.forEach((node) => {
        elm.appendChild(this.buildDom(node));
      });
    }
    return elm;
  }
  render(domElement) {
    domElement.appendChild(this.dom);
  }
};
