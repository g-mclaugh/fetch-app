import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort, SortDirection } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { Dog } from '../models/dog';
import { DogSearchQueryParams } from '../models/search';
import { SearchService } from '../services/search.service';
import { MatDialog } from '@angular/material/dialog';
import { MatchDialogComponent } from '../match-dialog/match-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('breedInput') breedInput: ElementRef<HTMLInputElement>;

  public dogs$ = new BehaviorSubject([]);
  public total = 0;
  public pageSize = 10;
  public pageIndex = 0;
  public sortActive = 'breed';
  public sortDirection: SortDirection = 'asc';
  public displayedColumns = ['select', 'img', 'name', 'age', 'zip_code', 'breed']
  public breedControl = new FormControl<string[]>(null);
  public allBreeds: string[] = [];
  public selectedDogs = new SelectionModel<Dog>(true);

  constructor(private searchService: SearchService, private dialog: MatDialog, private snackbar: MatSnackBar, private authService: AuthService, private router: Router) {
    this.breedControl.valueChanges.subscribe(() => {
      this.performNewSearch();
    })
  }

  ngOnInit() {
    this.performNewSearch();
    this.getAllDogBreeds();
  }

  private performNewSearch() {
    const breeds = this.breedControl.getRawValue() ?? [];
    const params: DogSearchQueryParams = { size: this.pageSize, from: this.pageIndex * this.pageSize, sort: `${this.sortActive}:${this.sortDirection}`, breeds };
    this.searchService.searchForDogs(params).subscribe(dogsResponse => {
      this.dogs$.next(dogsResponse.dogs);
      this.total = dogsResponse.total;
      dogsResponse.dogs.forEach(dog => {
        const foundSelectedDog = this.selectedDogs.selected.find(selectedDog => selectedDog.id === dog.id);
        if (!foundSelectedDog) { return; }
        this.selectedDogs.deselect(foundSelectedDog);
        this.selectedDogs.select(dog);
      })
    });
  }

  private getAllDogBreeds() {
    this.searchService.getDogBreeds().subscribe(breeds => this.allBreeds = breeds);
  }

  public pageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.performNewSearch();
  }

  public sortEvent(event: Sort) {
    this.sortActive = event.active;
    this.sortDirection = event.direction;
    this.performNewSearch();
  }

  public match() {
    this.searchService.match(this.selectedDogs.selected.map(dog => dog.id)).subscribe((matchResponse) => {
      const dialogRef = this.dialog.open(MatchDialogComponent, { data: { matchedDog: this.selectedDogs.selected.find(dog => dog.id === matchResponse.match) } });
      dialogRef.afterClosed().subscribe(isAdopting => {
        if (isAdopting) {
          this.snackbar.open(`Thank you for your interest in ${this.selectedDogs.selected.find(dog => dog.id === matchResponse.match).name}! We will be in touch soon!`, undefined, { duration: 4000 });
        }
      })
    })
  }

  public deselectDog(dog: Dog) {
    this.selectedDogs.deselect(dog);
  }

  public logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
