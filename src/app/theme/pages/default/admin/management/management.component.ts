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

  display = 'none';

  cars: Car[];

  cols: any[];

  data = 'hehe';

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

  constructor(private modalService: NgbModal)  {

  }
  ngOnInit()  {
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

  clickMe(c){
    console.log('click me',c);
  }

  openModalUpdateUser(car: Car){
    this.display='block';
  }
  onCloseHandled(){
    this.display='none';
  }

  open(content: TemplateRef<Car> ,car: Car) {
    console.log('car:',JSON.stringify(car));
    console.log('content:',content);
    console.log('content:',content.elementRef.nativeElement);

    this.modalService.open(content).result.then((result) => {
      console.log('result is:',result);
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
