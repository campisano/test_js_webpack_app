"use strict";

export default class App {
  constructor(elementId) {
    this.element = window.document.getElementById(elementId);
  }

  write(content) {
    this.element.innerHTML = content;
  }
}
