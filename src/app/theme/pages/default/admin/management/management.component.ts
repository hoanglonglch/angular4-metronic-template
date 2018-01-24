import {AfterViewInit, Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-admin-management',
    templateUrl: "./management.component.html",
    encapsulation: ViewEncapsulation.None,

})
export class ManagementComponent implements OnInit, AfterViewInit{

  //
  dataTableLoading= false;
  car: Car;
  cars: Car[];
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
  modalOptions: NgbModalOptions = {
    size: 'lg'
  }

  constructor(private modalService: NgbModal)  {}

  ngOnInit()  {
    this.cars = this.dummyCars;
  }

  ngAfterViewInit()  {}

  openModalUpdateUser(content: TemplateRef<Car> ,carFromTable: Car) {
    this.car = carFromTable;
    this.modalService.open(content,this.modalOptions);
  }

  openModalAddUser(content:TemplateRef<Car>) {
    this.modalService.open(content,this.modalOptions);
  }

}

interface Car {
  vin;
  year;
  brand;
  color;
}
