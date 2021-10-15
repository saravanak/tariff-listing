import Component from '@glimmer/component';

export default class UiTableHeaderCellComponent extends Component {
  get cellClasses() {
    return [
      'sticky top-0',
      this.args.column?.isFixed ? `is-fixed-${this.args.column.isFixed}` : null,
    ]
      .filter((v) => v)
      .join(' ');
  }
  get contentClasses() {
    return [
      this.args.column?.headerClasses?.centerAligned ? `text-center` : null,
    ]
      .filter((v) => v)
      .join(' ');
  }
}
