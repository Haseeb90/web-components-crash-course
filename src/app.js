
import AppToolbar from './toolbar-component/toolbar.component';

if (!customElements.get('app-toolbar')) {
  customElements.define('app-toolbar', AppToolbar);
}
