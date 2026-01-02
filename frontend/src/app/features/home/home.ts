import { Component } from '@angular/core';
import { CenterHome } from './components/center-home/center-home';

@Component({
  selector: 'app-home',
  imports: [CenterHome],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}