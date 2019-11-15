
export default class AppToolbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <h1>
        Im a shadow root child!
      </h1>
    `;
  }
}