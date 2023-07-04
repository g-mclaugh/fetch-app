import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Dog } from "../models/dog";

@Component({
  selector: 'app-match-dialog',
  templateUrl: './match-dialog.component.html',
  styleUrls: ['./match-dialog.component.scss']
}) export class MatchDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { matchedDog: Dog }) { }
} 