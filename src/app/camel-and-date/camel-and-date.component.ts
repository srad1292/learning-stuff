import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-camel-and-date',
  templateUrl: './camel-and-date.component.html',
  styleUrls: ['./camel-and-date.component.scss']
})
export class CamelAndDateComponent implements OnInit {

  logs: any[] = [];

  constructor() { }

  ngOnInit() {
    console.log(moment().format());
    let timestamp = "2019-09-29T14:49:39-04:00";
    this.logs = [
      {beforeCamel: 'someKey', afterCamel: '', beforeDate: moment().format(), afterDate: ''},
      {beforeCamel: 'someLongerKey', afterCamel: '', beforeDate: "2019-09-29T14:49:39-04:00", afterDate: ''},
      {beforeCamel: 'key', afterCamel: '', beforeDate: '', afterDate: ''},
      {beforeCamel: 'aReallyLongKeyName', afterCamel: '', beforeDate: '2018-10-20', afterDate: ''},
      {beforeCamel: 'something', afterCamel: '', beforeDate: 'not a date', afterDate: ''},
      {beforeCamel: 'somethingElse', afterCamel: '', beforeDate: '10-10-2017', afterDate: ''},
    ];

    this.updateCamel();
    this.updateDate();
  }

  updateCamel() {
    this.logs.forEach(log => {
      const original = log.beforeCamel;
      const updated = original.replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`);
      log.afterCamel = updated;
    });
  }

  updateDate() {
    this.logs.forEach(log => {
      const original = moment(log.beforeDate, ['YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DD', 'MM-DD-YYYY']);       
      console.log(original, original.isValid())
      if(original.isValid()) {
        const updated = original.format('DD/MM/YYYY');
        log.afterDate = updated;
      }
    });
  }

}
