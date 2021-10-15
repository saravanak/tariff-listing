import Component from '@glimmer/component';

export default class UiTableCellComponent extends Component {
  get cellClasses() {
    return [
      this.args.column.isFixed ? `is-fixed-${this.args.column.isFixed}` : null,
    ]
      .filter((v) => v)
      .join(' ');
  }
}
