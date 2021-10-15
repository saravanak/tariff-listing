import Route from '@ember/routing/route';
import { tariffs, suppliers } from '../stub-data/tariffs';

export default class IndexRoute extends Route {
  model() {
    return tariffs.map((t, i) => {
      return {
        id: i,
        ...t,
        supplierName: suppliers.find((s) => s.code == t.supplierCode)?.name,
      };
    });
  }
}
