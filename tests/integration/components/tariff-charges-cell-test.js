import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tariff-charges-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('cellValue', []);
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TariffChargesCell @cellValue={{this.cellValue}}/>`);

    assert.ok(find('.tariff-charges-cell'));

    // Template block usage:
    await render(hbs`
      <TariffChargesCell @cellValue={{this.cellValue}}>
      </TariffChargesCell>
    `);

    assert.ok(find('.tariff-charges-cell'));
  });
});
