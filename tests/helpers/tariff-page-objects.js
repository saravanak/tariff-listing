import { click, find } from '@ember/test-helpers';
import findAll from '@ember/test-helpers/dom/find-all';

export const ActionSelectors = {
  selectAllButton: 'select-all',
  tariffRowSelector: 'tariff-selector',
  statusSelectionText: 'selection-status-text',
  zeroCountHandler: 'zero-count-handler',
  propertyListingTariffId: 'property-listing-tariff-id',
  propertyListingSupplierName: 'property-listing-supplier-name',
  dismissSupplierDetailsModal: 'dismiss-supplier-details-modal',
  deleteSelectedTariffs: 'delete-selected-tariffs',
};

export function getActionButton(actionSelector) {
  return find(getActionSelector(actionSelector));
}

export function getActionSelector(actionSelector) {
  return `[data-test-action="${actionSelector}"]`;
}

export function getDataSelector(selector) {
  return `[data-test-data="${selector}"]`;
}

const _nthTariffSelector = (n) =>
  getActionSelector(`${ActionSelectors.tariffRowSelector}-${n}`);
const _TariffSelector = () =>
  `[data-test-action^="${ActionSelectors.tariffRowSelector}"]`;

export function getNthTariffSelector(n) {
  return find(_nthTariffSelector(n));
}

export function selectNthTariffSelector(n) {
  return click(_nthTariffSelector(n));
}

export function assertSelectAllState(
  { indeterminate, checked, prefix },
  assert
) {
  const selectAllButton = getActionButton(ActionSelectors.selectAllButton);

  if (indeterminate) {
    assert.ok(
      selectAllButton.indeterminate,
      `${prefix}:select-all button should be indeterminate`
    );
  } else {
    assert.notOk(
      selectAllButton.indeterminate,
      `${prefix}:select-all button should not be indeterminate`
    );
  }

  if (checked) {
    assert.ok(
      selectAllButton.checked,
      `${prefix}:select-all button should not be checked`
    );
  } else {
    assert.notOk(
      selectAllButton.checked,
      `${prefix}:select-all button is not checked`
    );
  }
}

export function getSelectedRowsCount() {
  return findAll(_TariffSelector()).filter((checkbox) => checkbox.checked)
    .length;
}

export function clickSelectAllTariffsButton() {
  return click(getActionSelector(ActionSelectors.selectAllButton));
}

export function assertStatusText(expected, prefix, assert) {
  const actualStatusText = find(
    getDataSelector(ActionSelectors.statusSelectionText)
  ).textContent;
  return assert.ok(
    actualStatusText.includes(expected),
    `assertStatusText: ${prefix} ${expected} , actual: ${actualStatusText}`
  );
}

export function getNthRow(n) {
  return getNthTariffSelector(n).closest('tr');
}
