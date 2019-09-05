import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class jQueryService {

    initialize(dataSet) {
        $(document).ready(function () {
            $('#example').DataTable( {
                data: dataSet,
                columns: [
                    { title: "Name" },
                    { title: "Contact Person" },
                    { title: "Address" },
                    { title: "City" },
                    { title: "Contact Number" }
                ]
            } );
        });
    }
}

