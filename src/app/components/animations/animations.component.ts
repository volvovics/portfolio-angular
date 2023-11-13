import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLineComponent } from './svg-line/svg-line.component';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule, SvgLineComponent],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.less'
})
export class AnimationsComponent {

}
