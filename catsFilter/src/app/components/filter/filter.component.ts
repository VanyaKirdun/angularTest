import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from "rxjs";
import { ICat } from 'src/app/module/cat';
import { CatsService } from 'src/app/services/cats.service';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { catsSelector, getCatData } from '../../reducers/filter.reducer'


interface Select {
  value: String;
  viewValue: String;
}


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  breedTarget = new FormControl('');
  categoryTarget = new FormControl('');
  amountTarget = new FormControl('10');

  data$: Observable<ICat[]> | undefined = this.store.pipe(select(catsSelector))

  loading: boolean = true;

  breedsSelect: Select[] = [
    {value: '', viewValue: 'Any'},
  ];
  categorySelect: Select[] = [
    {value: '', viewValue: 'Any'},
  ];
  amountSelect: Select[] = [
    {value: '5', viewValue: '5'},
    {value: '10', viewValue: '10'},
    {value: '25', viewValue: '25'},
    {value: '50', viewValue: '50'},
    {value: '100', viewValue: '100'}
  ];

  constructor(private catsService: CatsService, private store: Store) {}

  submit(){
    this.loading = true
    this.catsService.getAll(
      this.amountTarget.value!,
      this.breedTarget.value!,
      this.categoryTarget.value!
      ).subscribe(data=>{
      this.store.dispatch(getCatData({payload: {
        catsData: data,
      }}))
      this.loading = false
    })
  }

  ngOnInit(): void {
    this.submit()

    this.catsService.getBreedNames().subscribe(cats=>{
      cats.forEach(item=>{
        this.breedsSelect.push({value: item.id, viewValue: item.name})
      })
    })

    this.catsService.getCategoryNames().subscribe(cats=>{
      cats.forEach(item=>{
        this.categorySelect.push({value: item.id, viewValue: item.name})
      })
    })
  }

}
