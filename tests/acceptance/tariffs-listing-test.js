import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {
  ActionSelectors,
  getActionButton,
  selectNthTariffSelector,
  getNthTariffSelector,
  assertSelectAllState,
  getSelectedRowsCount,
  clickSelectAllTariffsButton,
  assertStatusText,
  getNthRow,
  getActionSelector,
  getDataSelector,
} from '../helpers/tariff-page-objects';
import click from '@ember/test-helpers/dom/click';
import findAll from '@ember/test-helpers/dom/find-all';

module('Acceptance | tariffs listing', function (hooks) {
  setupApplicationTest(hooks);
  let selectAllButton;

  hooks.beforeEach(async function () {
    await visit('/');
    selectAllButton = getActionButton(ActionSelectors.selectAllButton);
  });

  module('select-all checkbox', () => {
    test('should be in an unselected state if no tariffs are selected', async function (assert) {
      assert.ok(selectAllButton, 'select all button exists');
      assert.notOk(
        selectAllButton.indeterminate,
        'select-all button is not indeterminate'
      );
      assert.notOk(selectAllButton.checked, 'select-all button is checked');
    });

    module(
      'should be in an indeterminate state if some but not all tariffs: ',
      () => {
        test('toggle select a single tariff', async function (assert) {
          await selectNthTariffSelector(0);
          assert.ok(getNthTariffSelector(0).checked);
          assertSelectAllState(
            {
              indeterminate: true,
              checked: false,
              prefix: 'check',
            },
            assert
          );

          //Deselect resets selection
          await selectNthTariffSelector(0);
          assert.notOk(getNthTariffSelector(0).checked);
          assertSelectAllState(
            {
              indeterminate: false,
              checked: false,
              prefix: 'uncheck',
            },
            assert
          );
        });

        test('select all but one of the entire list', async function (assert) {
          const rowClickSequence = [0, 3, 3];

          for (var i = 0; i < rowClickSequence.length; i++) {
            const rowIndex = rowClickSequence[i];
            await selectNthTariffSelector(rowIndex);

            if (i <= 1) {
              assert.ok(getNthTariffSelector(rowIndex).checked);
            } else {
              assert.notOk(getNthTariffSelector(rowIndex).checked);
            }

            assertSelectAllState(
              {
                indeterminate: true,
                checked: false,
                prefix: rowIndex,
              },
              assert
            );
          }

          await selectNthTariffSelector(0);
          assertSelectAllState(
            {
              indeterminate: false,
              checked: false,
            },
            assert
          );
        });
      }
    );

    test('should be in a selected state if all tariffs are selected ', async function (assert) {
      const rowClickSequence = [
        {
          shouldBeChecked: true,
          tariffIndex: 0,
          isAllSelected: false,
        },
        {
          tariffIndex: 3,
          shouldBeChecked: true,
          isAllSelected: false,
        },
        {
          tariffIndex: 4,
          shouldBeChecked: true,
          isAllSelected: true,
        },
        {
          tariffIndex: 4,
          shouldBeChecked: false,
          isAllSelected: false,
        },
        {
          tariffIndex: 3,
          shouldBeChecked: false,
          isAllSelected: false,
        },
      ];

      for (var i = 0; i < rowClickSequence.length; i++) {
        const rowMeta = rowClickSequence[i];
        const { isAllSelected, shouldBeChecked, tariffIndex } = rowMeta;
        await selectNthTariffSelector(tariffIndex);

        if (shouldBeChecked) {
          assert.ok(getNthTariffSelector(tariffIndex).checked);
        } else {
          assert.notOk(getNthTariffSelector(tariffIndex).checked);
        }

        assertSelectAllState(
          {
            indeterminate: !isAllSelected,
            checked: isAllSelected,
            prefix: tariffIndex,
          },
          assert
        );
      }

      await selectNthTariffSelector(0);
      assertSelectAllState(
        {
          indeterminate: false,
          checked: false,
        },
        assert
      );
    });

    module('clicking the select-all button', () => {
      test(' should select all tariffs if none  selected', async function (assert) {
        assert.equal(getSelectedRowsCount(), 0);
        await clickSelectAllTariffsButton();
        assert.equal(getSelectedRowsCount(), 3);
        assertSelectAllState(
          {
            indeterminate: false,
            checked: true,
          },
          assert
        );
        await clickSelectAllTariffsButton();
        assert.equal(getSelectedRowsCount(), 0);
        assertSelectAllState(
          {
            indeterminate: false,
            checked: false,
          },
          assert
        );
      });
      test('should select all tariffs if some are selected', async function (assert) {
        await selectNthTariffSelector(3);
        assert.equal(getSelectedRowsCount(), 1);
        assertSelectAllState(
          {
            indeterminate: true,
            checked: false,
          },
          assert
        );

        await clickSelectAllTariffsButton();
        assert.equal(getSelectedRowsCount(), 3);
        assertSelectAllState(
          {
            indeterminate: false,
            checked: true,
          },
          assert
        );
      });

      test('deselect all tariffs if all are currently selected', async function (assert) {
        const rowClickSequence = [0, 3, 4];
        assertStatusText('None Selected', 'clean state', assert);

        for (var i = 0; i < rowClickSequence.length; i++) {
          await selectNthTariffSelector(rowClickSequence[i]);
          const expectedStatusText =
            i == 2 ? 'All tariffs selected' : `Selected ${i + 1} tariffs`;
          assertStatusText(expectedStatusText, `${i}th selection`, assert);
        }

        assert.equal(getSelectedRowsCount(), 3);
        assertSelectAllState(
          {
            indeterminate: false,
            checked: true,
          },
          assert
        );

        await clickSelectAllTariffsButton();
        assert.equal(getSelectedRowsCount(), 0);
        assertSelectAllState(
          {
            indeterminate: false,
            checked: false,
          },
          assert
        );
        assertStatusText('None Selected', 'clean state', assert);
      });
    });

    test('Only those that have a ​schedulesCount​ of zero can be deleted', async function (assert) {
      assert.notOk(getNthTariffSelector(0).disabled);
      assert.ok(getNthTariffSelector(1).disabled);
      assert.ok(getNthTariffSelector(2).disabled);
      assert.notOk(getNthTariffSelector(3).disabled);
    });

    test('rows should be marked as selected when checked', async function (assert) {
      const tariffUnderTest = 0;
      assert.notOk(
        getNthRow(tariffUnderTest).classList.contains('is-selected')
      );
      await selectNthTariffSelector(tariffUnderTest);
      assert.ok(getNthRow(tariffUnderTest).classList.contains('is-selected'));
    });

    test('Clicking the ​schedulesCount​ should show an alert box with the tariff id and supplier name', async function (assert) {
      await click(getActionSelector(ActionSelectors.zeroCountHandler));
      assert.ok(
        find(
          getDataSelector(ActionSelectors.propertyListingTariffId)
        ).textContent.includes('1')
      );
      assert.ok(
        find(
          getDataSelector(ActionSelectors.propertyListingSupplierName)
        ).textContent.includes('American President Lines Ltd.')
      );

      await click(
        getActionSelector(ActionSelectors.dismissSupplierDetailsModal)
      );
    });

    test(`Clicking "Delete" when some or all tariffs are selected 
    should generate an alert box
    with the tariff id and supplier name of all selected for deletion`, async function (assert) {
      await clickSelectAllTariffsButton();
      await click(getActionSelector(ActionSelectors.deleteSelectedTariffs));

      const matchingSupplierNames = findAll(
        getDataSelector(ActionSelectors.propertyListingSupplierName)
      );
      assert.ok(
        matchingSupplierNames[0].textContent.includes(
          'American President Lines Ltd.'
        )
      );
      assert.ok(matchingSupplierNames[1].textContent.includes('Maersk Line'));
    });
  });
});
