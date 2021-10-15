import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiTableRowComponent extends Component {
  @action
  rowClasses(row) {
    return [this.args.isRowSelected(row) ? 'is-selected' : null]
      .filter((v) => v)
      .join(' ');
  }
}
