import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TariffsListComponent extends Component {
  @tracked selections = [];
  @tracked incrementingRow = null;
  @tracked isDeleting = false;

  columns = [
    {
      name: ``,
      width: 25,
      isFixed: 'left',
      isSelectorRow: true,
    },
    {
      name: `Valid From`,
      valuePath: `validFromFormatted`,
    },
    {
      name: `Expires`,
      valuePath: `expiresFormatted`,
    },
    {
      name: `Type`,
      valuePath: `type`,
    },
    {
      name: `Schedule`,
      valuePath: `schedulesCount`,
      headerClasses: {
        centerAligned: true,
      },
      cellComponent: 'tariff-schedule-counts-cell',
    },
    {
      name: `Supplier`,
      valuePath: `supplierName`,
    },
    {
      name: `Charges`,
      valuePath: `charges`,
      cellComponent: 'tariff-charges-cell',
      width: 200,
    },
  ];

  get selectedCount() {
    return this.selections?.length || 0;
  }

  get selectableRows() {
    return this.args.model.filter((t) => t.schedulesCount > 0);
  }

  get selectableRowsCount() {
    return this.selectableRows?.length || 0;
  }

  get areAllTariffsSelected() {
    return (
      this.args.model?.length && this.selectableRowsCount == this.selectedCount
    );
  }

  get uniqueSupplierSelections() {
    return this.selections.uniqBy('supplierCode');
  }

  @action
  handleSelectAll() {
    if (!this.areAllTariffsSelected || this.selectedCount == 0) {
      this.selections = [...this.selectableRows];
    } else if (this.areAllTariffsSelected) {
      this.selections = [];
    }
  }

  @action
  onSelectRow(row) {
    if (this.selections.findBy('id', row.id)) {
      this.selections = [...this.selections.rejectBy('id', row.id)];
    } else {
      this.selections.pushObject(row);
    }
  }

  @action
  isRowSelected(tariff) {
    return this.selections.findBy('id', tariff.id);
  }

  @action
  getActionsForComponent(row, column) {
    const actionsHash = {};
    switch (column.cellComponent) {
      case 'tariff-schedule-counts-cell':
        actionsHash.onIncrementSchedules = this.onIncrementSchedules;
        break;
    }

    return actionsHash;
  }

  @action
  onIncrementSchedules(row) {
    this.incrementingRow = row;
  }

  @action
  deleteSelectedRows() {
    this.selections = [];
    this.isDeleting = false;
  }
}
