
export default class AppToolbar extends HTMLElement {

  constructor() {
    super();
    console.log('This is from the constructor');
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  connectedCallback() {
    this.innerHTML = '<p>Yay! Finally something visual!</p>';
  }

  disconnectedCallback() {
    console.log('This is from the disconnectedCallback method');
  }
}