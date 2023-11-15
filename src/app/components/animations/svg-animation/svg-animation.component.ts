import { Component, ViewEncapsulation, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-animation.component.html',
  styleUrl: './svg-animation.component.less',
  encapsulation: ViewEncapsulation.None
})
export class SvgAnimationComponent {
  public animationRunning:boolean = true;

  constructor(private elRef:ElementRef) {}
  
  ngAfterContentInit() {
    var path = this.elRef.nativeElement.querySelector('path');
    var dashArrayLength = Math.round(path.getTotalLength());
    console.log(dashArrayLength);
    console.log(path.id);
    
    var svg = this.elRef.nativeElement.querySelector('svg');
    svg.style.strokeDasharray = dashArrayLength;
    
    // each svg has different dasharray lengths so the animation endpoints are different.
    // currently only 2 svg's supported. 
    // to add customizable color and speed if needed
    if (path.id === 'Path1'){
      svg.style.stroke = 'red';
      svg.style.animation = "animateDash1 7s linear alternate infinite";
      document.documentElement.style
        .setProperty('--strokeDashOffset1', dashArrayLength.toString());
    } else {
      svg.style.stroke = 'green';
      svg.style.animation = "animateDash1 7s linear alternate infinite";
      document.documentElement.style
        .setProperty('--strokeDashOffset2', dashArrayLength.toString());
    }
    
  }
}
