
import TemplateViewer from './template-viewer/template-viewer.component';

if (!customElements.get('template-viewer')) {
  customElements.define('template-viewer', TemplateViewer);
}
