import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

import { SnackBarComponent } from "../../component/snack-bar/snack-bar.component";

import { TableService } from "../../services/table.service";

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('15000ms')),
      transition('final=>initial', animate('10000ms'))
    ]),
  ]
})
export class AgTableComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  showDeleteButton = false;
  showRightSideForm = false;
  currentState = 'initial';

  columnDefs = [];
  rowData = [];



  agForm: FormGroup;
  submitted = false;

  constructor(private _formBuilder: FormBuilder, private _tableService: TableService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.agForm = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      progress: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  onGridReady(e) {
    this.columnDefs = [
      { headerName: 'ID', field: 'id', editable: true },
      { headerName: 'Name', field: 'name', checkboxSelection: true, editable: true },
      { headerName: 'Progress', field: 'progress' },
      { headerName: 'Color', field: 'color' }
    ];

    /*
    this.rowData = [
      { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
      { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
      { id: 3, make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    */
    this.fetData();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 800,
    });
  }

  fetData() {
    this._tableService.getUsers().subscribe((d) => {
      this.rowData = <any>d;
    }, (err) => {
      console.log(err);
    });
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.id + " " + node.make + ' ' + node.model + ' ' + node.price).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onRowSelected(e) {
    let rowsSelection = this.agGrid.api.getSelectedRows();
    this.showDeleteButton = rowsSelection.length >= 1 ? true : false;


    if (rowsSelection.length === 1) {
      this.showRightSideForm = true;
      this.agForm.controls['id'].setValue(rowsSelection[0].id);
      this.agForm.controls['name'].setValue(rowsSelection[0].name);
      this.agForm.controls['progress'].setValue(rowsSelection[0].progress);
      this.agForm.controls['color'].setValue(rowsSelection[0].color);
    } else {
      this.agForm.controls['id'].setValue("");
      this.agForm.controls['name'].setValue("");
      this.agForm.controls['progress'].setValue("");
      this.agForm.controls['color'].setValue("");
      this.showRightSideForm = false;
    }
  }

  deleteSelectedRows() {
    let rowsSelection = this.agGrid.api.getSelectedRows();
    console.info(rowsSelection);

    /*
    let arr = [];
    let arr2 = [];

    arr2 = this.rowData.filter(function (item) {
      rowsSelection.forEach((d, i) => {
        if (item.id === d.id) {
          arr.push(item);
        }
      });
      return arr;
    });
    console.log(arr);

    this.rowData = arr2;

    this.showDeleteButton = false;
    */
  }

  onSubmit() {
    console.log(this.agForm.controls["id"].value);
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  cellEdited(e) {
    this._tableService.postUsers(e.data).subscribe((d) => {
      this.fetData();
      this.openSnackBar();
    });
  }

}
