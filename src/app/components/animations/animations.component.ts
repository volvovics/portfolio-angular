import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgAnimationComponent } from './svg-animation/svg-animation.component';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule, SvgAnimationComponent],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.less'
})
export class AnimationsComponent {

}
