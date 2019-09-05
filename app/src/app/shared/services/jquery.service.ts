import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class jQueryService {

    initialize() {
        $(document).ready(function () {
        });
    }
}

