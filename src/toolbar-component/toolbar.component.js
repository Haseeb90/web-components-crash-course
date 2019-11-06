
export default class AppToolbar extends HTMLElement {
  connectedCallback() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 3; i++) {
      const paragraph = document.createElement('p');
      paragraph.innerText = `This is paragraph ${i}`;

      fragment.appendChild(paragraph);
    }
    console.log(`Content before appending: ${fragment.textContent}`);
    const clone = fragment.cloneNode(true);
    this.appendChild(clone);
    console.log(`Content after appending: ${fragment.textContent}`);
  }
}