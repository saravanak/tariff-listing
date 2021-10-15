import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Ui::ListItem @heading="test" @value="apple"/>`);

    assert.ok(this.element.textContent.includes('test'));
    assert.ok(this.element.textContent.includes('apple'));

    // Template block usage:
    await render(hbs`
      <Ui::ListItem @heading="test" @value="apple">
        template block text
      </Ui::ListItem>
    `);

    assert.ok(this.element.textContent.includes('test'));
    assert.ok(this.element.textContent.includes('apple'));
  });
});
