import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SearchComponent } from "./search.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatchDialogComponent } from "../match-dialog/match-dialog.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatTableModule, MatPaginatorModule, CommonModule, MatSortModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatChipsModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatDialogModule, MatSnackBarModule],
  declarations: [SearchComponent, MatchDialogComponent]
}) export class SearchModule { }