import {AfterViewInit, Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-admin-management',
    templateUrl: "./management.component.html",
    encapsulation: ViewEncapsulation.None,

})
export class ManagementComponent implements OnInit, AfterViewInit{

  //test
  loading= false;
  car: Car;
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

  constructor(private modalService: NgbModal)  {}

  ngOnInit()  {
    this.cars = this.dummyCars;
  }

  ngAfterViewInit()  {
    /*this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/app/js/management.js');*/
  }

  openModalUpdateUser(content: TemplateRef<Car> ,carFromTable: Car) {
    this.car = carFromTable;
    this.modalService.open(content);
  }

  openModalAddUser(content:TemplateRef<Car>) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

}

interface Car {
  vin;
  year;
  brand;
  color;
}
