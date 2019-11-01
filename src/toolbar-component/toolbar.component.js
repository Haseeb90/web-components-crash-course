
export default class AppToolbar extends HTMLElement {

  constructor() {
    super();
    console.log('This is from the constructor');
    this.heading = document.createElement('h1');
  }

  static get observedAttributes() {
    return ['title', 'color'];
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  get color() {
    return this.getAttribute('color');
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  connectedCallback() {
    this.heading.textContent = this.title;
    this.heading.style.color = this.color;
    this.appendChild(this.heading);
  }

  disconnectedCallback() {
    console.log('This is from the disconnectedCallback method');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.heading.textContent = newValue;
    }

    if (name === 'color') {
      this.heading.style.color = newValue;
    }
  }
}