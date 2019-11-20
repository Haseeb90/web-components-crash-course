
export default class AppToolbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.getElementById('unique');
    const templateClone = template.content.cloneNode(true);

    this.shadowRoot.appendChild(templateClone);
  }
}