import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  declarations: [LoginComponent]
}) export class LoginModule { }