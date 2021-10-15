import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/table-header-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('column', { name: 'fruit' });
    await render(hbs`<Ui::TableHeaderCell @column={{column}}/>`);

    assert.equal(this.element.textContent.trim(), 'fruit');
  });
});
