import Component from '@glimmer/component';

export default class UiTableComponent extends Component {
  get columns() {
    return this.args.columns;
  }
  get rows() {
    return this.args.rows;
  }

  get isRowSelected() {
    return this.args.isRowSelected;
  }
}
