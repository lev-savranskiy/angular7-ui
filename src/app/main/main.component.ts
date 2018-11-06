import { Component, OnInit } from '@angular/core';
import {patient, grid1, grid2, grid3, grid4, grid5, grid6, grid7, instructions} from '../data/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  public patient = patient;
  public grid1 = grid1;
  public grid2 = grid2;
  public grid3 = grid3;
  public grid4 = grid4;
  public grid5 = grid5;
  public grid6 = grid6;
  public grid7 = grid7;
  public instructions = instructions;
  public actionItems = ['Choose Action', 'Complete', 'Add to list', 'Notify'];

}
