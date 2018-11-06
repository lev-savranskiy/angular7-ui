import { Component, OnInit } from '@angular/core';
import {items} from '../data/menuitems';
import {user} from '../data/data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  public items = items;
  public title = 'Partner Name';
  public user = user;

}

