import { Component,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax/parallax.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transitions',
  standalone: true,
  imports: [CommonModule, ParallaxComponent],
  templateUrl: './transitions.component.html',
  styleUrl: './transitions.component.less',
  encapsulation: ViewEncapsulation.None
})
export class TransitionsComponent {
  
  constructor(private router:Router) {}
  
  backToInfo(){
    console.log('back to info clicked')
    this.router.navigateByUrl('/main');
  }
  backToTop(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
