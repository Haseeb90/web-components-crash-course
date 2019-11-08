
import TemplateViewer from './template-viewer/template-viewer.component';
import styles from '../styles.css';

if (!customElements.get('template-viewer')) {
  customElements.define('template-viewer', TemplateViewer);
}
