import Component from '@glimmer/component';

export default class TariffDeleteRowComponent extends Component {
  get isIndeterminate() {
    return this.args.selectionsCount > 0 && !this.args.areAllTariffsSelected;
  }
}
