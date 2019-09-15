import { Component, OnInit, ViewChild } from '@angular/core';

import { TestListService } from '../test-list.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  matdatasource;
  testList: any[] = [];
  numberOfTests: number;
  pageSize: number = 10;
  displayed_columns: string[] = ['name', 'patient', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private tls: TestListService) { }

  ngOnInit() {
    this.matdatasource = new MatTableDataSource([]);
    this.tls.getAllTests().subscribe(data => {
      console.log(data);
      this.testList = data['tests'] || [];
      this.numberOfTests = this.testList.length;
      this.matdatasource.data = data['tests'];
    });
  }

  ngAfterViewInit() {
    this.matdatasource.paginator = this.paginator;
  }

}
