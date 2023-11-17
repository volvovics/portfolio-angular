import { Component,ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.less',
  encapsulation: ViewEncapsulation.None
})
export class ParallaxComponent {
  @Input() bgImageUrl:string = '';
  @Input() isFlex?:boolean = false;
  
  constructor(private elRef:ElementRef) {}

  ngAfterContentInit() {
    var parallaxContainer = this.elRef.nativeElement.querySelector('.parallax-container');
    parallaxContainer.style.backgroundImage = this.bgImageUrl;
  }
}
