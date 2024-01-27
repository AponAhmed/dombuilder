class Obj2Dom {
  constructor(object) {
    this.dom = null;
    this.object = object;
    this.init();
  }
  init() {
    this.dom = this.buildDom(this.object);
  }
  buildDom(obj) {
    if (obj.hasOwnProperty("type")) {
      let elm = document.createElement(obj.type);

      //Class
      if (obj.hasOwnProperty("class")) {
        if (typeof obj.class === "string") {
          elm.classList.add(obj.class); //Loop For Multiple class
        } else {
          obj.class.forEach((v) => {
            elm.classList.add(v);
          });
        }
      }
      //Attribute
      if (obj.hasOwnProperty("attributes")) {
        for (const AttName in obj.attributes) {
          elm.setAttribute(AttName, obj.attributes[AttName]);
        }
      }
      //Events
      if (obj.hasOwnProperty("events")) {
        for (const eventName in obj.events) {
          elm.addEventListener(eventName, obj.events[eventName]);
        }
      }
      //Child Node or Inner Html
      if (obj.hasOwnProperty("nodes")) {
        if (typeof obj.nodes === "string") {
          elm.innerHTML = obj.nodes;
        } else {
          obj.nodes.forEach((node) => {
            elm.appendChild(this.buildDom(node));
          });
        }
      }
      return elm;
    }
    return null;
  }
  render(domElement) {
    domElement.appendChild(this.dom);
  }
}

class Dombuilder {
  constructor(tag) {
    this.element = document.createElement(tag);
    return this;
  }
  attr(name, value) {
    this.element.setAttribute(name, value);
    return this;
  }
  class(classNames) {
    this.element.classList.add(classNames);
    return this;
  }
  classes(...classNames) {
    classNames.forEach(className => {
      this.element.classList.add(className);
    });
    return this;
  }

  event(eventName, callback) {
    this.element.addEventListener(eventName, callback);
    return this;
  }
  append(dom) {
    this.element.appendChild(dom);
    return this;
  }
  renderTo(dom) {
    dom.appendChild(this.element);
    return this;
  }
  html(string) {
    this.element.innerHTML = string;
    return this;
  }
  appendHtml(string) {
    this.element.innerHTML += string;
    return this;
  }
}

export { Dombuilder, Obj2Dom };
