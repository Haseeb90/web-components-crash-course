
export default class AppToolbar extends HTMLElement {
  get title() {
    return this.getAttribute('title');
  }

  set title(value) {
    this.setAttribute('title', value);
  }
}