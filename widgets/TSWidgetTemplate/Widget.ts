import BaseWidget = require("jimu/BaseWidget");
import lang = require("dojo/_base/lang");


class Widget extends BaseWidget {

  public baseClass: string = "a-new-ts-widget";
  public config: SpecificWidgetConfig;

  private subnode: HTMLElement;

  constructor(args?) {
    super(lang.mixin({baseClass: "a-new-ts-widget"}, args));
  }


  postCreate() {
    
    for(var element of this.config.elements){
      var divElement = document.createElement("div");
      var linkElement = document.createElement("a");
      
      linkElement.textContent = element.name;
      linkElement.href = element.href;

      divElement.appendChild(linkElement);

      this.subnode.appendChild(divElement);
    }

  }
}

interface SpecificWidgetConfig{
  value: string;
  elements: Item[];
}

interface Item{
  name: string;
  href: string;
}

export = Widget;
