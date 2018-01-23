import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScriptLoaderService} from "../../../../../_services/script-loader.service";

@Component({
    selector: 'app-admin-management',
    templateUrl: "./management.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ManagementComponent implements OnInit, AfterViewInit{

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
  }

  ngAfterViewInit()  {
    /*this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/app/js/management.js');*/

  }
}
