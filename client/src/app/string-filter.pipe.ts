import {Pipe} from "@angular/core";

/**
 * A simple string filter, since ng2 does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe {
 transform(items: any[] ,term :any): any {
 if (term) {
            return items.filter(item => {
                return Object.keys(item).some(
                    k => {
                        if (item[k] != null && item[k] != undefined && typeof item[k] == 'string')
                            return item[k].toLowerCase().includes(term.toLowerCase());
                    }
                );
            });
        }
        return items;
 
  }
}