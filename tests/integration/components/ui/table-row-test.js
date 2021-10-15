import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/table-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('columns', [{ name: 'fruit' }, { name: 'veg' }]);

    // Template block usage:
    await render(hbs`
      <Ui::TableRow @columns={{columns}} @isHeader={{true}} as |row|>
        <row.Cell />
      </Ui::TableRow>
    `);

    assert.ok(this.element.textContent.includes('fruit'));
    assert.ok(this.element.textContent.includes('veg'));
  });
});
