import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import {
  ActionSelectors,
  getActionSelector,
} from '../../helpers/tariff-page-objects';

module('Integration | Component | tariff-delete-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('handleSelectAll', function () {});

    await render(
      hbs`<TariffDeleteRow @handleSelectAll={{this.handleSelectAll}} @onDelete={{this.handleSelectAll}}/>`
    );

    assert.ok(find(getActionSelector(ActionSelectors.selectAllButton)));

    // Template block usage:
    await render(hbs`
      <TariffDeleteRow @handleSelectAll={{this.handleSelectAll}}
      @onDelete={{this.handleSelectAll}}
      >
        
      </TariffDeleteRow>
    `);

    assert.ok(find(getActionSelector(ActionSelectors.selectAllButton)));
  });
});
