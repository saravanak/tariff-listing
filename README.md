# work

Details the steps taken and the assumptions followed while attempting the problem. 
## Steps taken

 - Adhered to the spec on the requirements using the Ember LTS Version. 
 - CSS provided by Tailwind (SASS).
 - Started off using ember-table, but it had a technical limitiation. Hence reverted to custom table implementation to support non selectable rows. 
 - Specs covered by tests. 

## Steps to run

  - `yarn install`
  - `ember test -s`
  - `npm start`
## Asssumptions 
   - Table listing implemented as an index route. 
   - Row selection on row click is not handled as it was not asked for. 
   - Just used the stub data provided without any conversion to json API formats. Only changes are: 
      - Ref app/routes/index.js
      - Stub a `tariff.id` based on the index of the item. 
      - Provide a merged `supplierName` property. 
      - Provided formatted date fields `{expires,validFrom}Formatted`
    - No fetch calls are made for the data, hence loading state is not handled on the app. 
    - Error scnearios are not handled: empty tariffs, invalid/partial tariff objects, etc., 
    - schedulesCount==0 popup: 
      - We just list the tariff Ids and the mapped supplier name.
      - Close action is provided which just closes the popup.
    - schedulesCount==0, row checkbox is disabled and a tooltip is provided for the reason on the same (on hover). 
    - When all (applicable) items are selected, the selection text shows `All tariffs selected`.
    - `delete selected` popup
      - List the available suppliers (unique) on the selections. 
      - Close action is provided which just closes the popup. 
      - Delete action is provided which resets the selections when clicked (and closes the popup).
