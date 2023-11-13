import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-line.component.html',
  styleUrl: './svg-line.component.less'
})
export class SvgLineComponent {
  public animationRunning:boolean = true;
}
