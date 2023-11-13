import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.less'
})
export class MainPageComponent {

  constructor(private _router: Router) { }

  public myEmail:string = 'volvovics@yahoo.com';
  navigateTo(route:string){
    this._router.navigateByUrl(route);
  }
}
