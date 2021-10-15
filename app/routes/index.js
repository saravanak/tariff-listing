import Route from '@ember/routing/route';
import { tariffs, suppliers } from '../stub-data/tariffs';
import format from 'date-fns/format';

const DATE_FORMAT = 'dd MMM yyyy';
export default class IndexRoute extends Route {
  model() {
    return tariffs.map((t, i) => {
      return {
        id: i,
        expiresFormatted: format(new Date(t.expires), DATE_FORMAT),
        validFromFormatted: format(new Date(t.validFrom), DATE_FORMAT),
        ...t,
        supplierName: suppliers.find((s) => s.code == t.supplierCode)?.name,
      };
    });
  }
}
