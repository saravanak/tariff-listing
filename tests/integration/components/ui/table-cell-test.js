import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/table-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('column', { valuePath: 'fruit' });
    this.set('row', { fruit: 'grape' });
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::TableCell @column={{column}} @row={{row}}/>`);

    assert.equal(this.element.textContent.trim(), 'grape');

    // Template block usage:
    await render(hbs`
      <Ui::TableCell @column={{column}} @row={{row}} as |cell|>
        {{cell.cellValue}} is here
      </Ui::TableCell>
    `);

    assert.equal(this.element.textContent.trim(), 'grape is here');
  });
});
