import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScriptLoaderService} from "../../../../../_services/script-loader.service";

@Component({
    selector: 'app-admin-management',
    templateUrl: "./management.component.html",
    encapsulation: ViewEncapsulation.None,

})
export class ManagementComponent implements OnInit, AfterViewInit{

  //test
  loading= false;

  display = 'none';

  cars: Car[];

  cols: any[];

  dummyCars = [
    {
      vin:'2143',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'5654',
      year:1992,
      brand:'mer',
      color:'blue',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },
    {
      vin:'hehe',
      year:1992,
      brand:'bmw',
      color:'red',
    },

  ]


  userDatas: any [];

  dummyData = [
    {
      username:'larry',
      role: 'admin',
    },
    {
      username:'larry1',
      role: 'admin1',
    },
    {
      username:'larry2',
      role: 'admin2',
    },
    {
      username:'larry3',
      role: 'admin3',
    },
    {
      username:'larry4',
      role: 'admin4',
    },
  ];


  constructor(private _script: ScriptLoaderService)  {

  }
  ngOnInit()  {
    this.userDatas = this.dummyData;
    this.cars = this.dummyCars;
    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

  ngAfterViewInit()  {
    /*this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/app/js/management.js');*/
  }

  clickMe(car: Car){
    console.log('click me',car);
  }

  openModalUpdateUser(car: Car){
    this.display='block';
  }
  onCloseHandled(){
    this.display='none';
  }
}

interface Car {
  vin;
  year;
  brand;
  color;
}
