import { Component, OnInit } from '@angular/core';
import {items} from '../data/menuleftitems';

@Component({
  selector: 'app-menuleft',
  templateUrl: './menuleft.component.html',
  styleUrls: ['./menuleft.component.css']
})

export class MenuleftComponent {
  public items = items;
}
