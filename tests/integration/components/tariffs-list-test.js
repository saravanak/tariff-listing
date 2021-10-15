import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tariffs-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TariffsList />`);

    assert
      .dom(this.element)
      .hasText(
        'None Selected Delete Valid From Expires Type Schedule Supplier Charges'
      );

    // Template block usage:
    await render(hbs`
      <TariffsList>
        template block text
      </TariffsList>
    `);

    assert
      .dom(this.element)
      .hasText(
        'None Selected Delete Valid From Expires Type Schedule Supplier Charges'
      );
  });
});
