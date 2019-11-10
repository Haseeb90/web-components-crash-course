
import TemplateViewer from './template-viewer/template-viewer.component';
import styles from '../styles.css';

if (!customElements.get('template-viewer')) {
  customElements.define('template-viewer', TemplateViewer);
}

const templateSelector = document.getElementById('template-selector');
const templateViewer = document.querySelector('template-viewer');
templateSelector.addEventListener('change', (event) => {
  const valueSelected = event.target.value;
  templateViewer.layout = valueSelected;
});
