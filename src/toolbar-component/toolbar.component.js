
export default class AppToolbar extends HTMLElement {

  constructor() {
    super();
    console.log('This is from the constructor');
    this.parah = document.createElement('p');
  }

  static get observedAttributes() {
    return ['title'];
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  connectedCallback() {
    this.parah.textContent = this.title;
    this.appendChild(this.parah);
  }

  disconnectedCallback() {
    console.log('This is from the disconnectedCallback method');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.parah.textContent = newValue;
    }
  }
}