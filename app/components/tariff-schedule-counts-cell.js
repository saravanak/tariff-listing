import Component from '@glimmer/component';

export default class TariffScheduleCountsCellComponent extends Component {
  get cellValueClasses() {
    return ['mr-1', this.args.cellValue == 0 ? 'text-red-500' : ''].join(' ');
  }
}
