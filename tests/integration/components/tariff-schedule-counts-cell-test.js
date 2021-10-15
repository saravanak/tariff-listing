import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import {
  ActionSelectors,
  getActionSelector,
} from '../../helpers/tariff-page-objects';

module(
  'Integration | Component | tariff-schedule-counts-cell',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      this.set('actions', {
        onIncrementSchedules: function () {},
      });

      await render(
        hbs`<TariffScheduleCountsCell @actions={{this.actions}} @cellValue={{0}}/>`
      );

      assert.ok(find(getActionSelector(ActionSelectors.zeroCountHandler)));

      // Template block usage:
      await render(hbs`
      <TariffScheduleCountsCell @actions={{this.actions}} @cellValue={{0}}>
        template block text
      </TariffScheduleCountsCell>
    `);
      assert.ok(find(getActionSelector(ActionSelectors.zeroCountHandler)));
    });
  }
);
