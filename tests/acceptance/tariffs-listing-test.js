import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import click from '@ember/test-helpers/dom/click';

module('Acceptance | tariffs listing', function (hooks) {
  setupApplicationTest(hooks);

  test('able to manage the tariff selections for deleting', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-action="select-all"]');

    // await pauseTest();

    assert.ok(document.querySelector('.ember-table'));
  });
});
