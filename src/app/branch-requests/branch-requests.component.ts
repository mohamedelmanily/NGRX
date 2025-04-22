import { Component, OnInit } from '@angular/core';
import { loadRequestDetails } from '../store/request.actions';
import { Store } from '@ngrx/store';
import { selectRequestDetails, selectRequestError, selectRequestLoading } from '../store/request.selectors';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-branch-requests',
  imports: [CommonModule],
  templateUrl: './branch-requests.component.html',
  styleUrl: './branch-requests.component.css'
})
export class BranchRequestsComponent implements OnInit {
  details$!: Observable<any>;
  loading$!: Observable<boolean>; 
  error$!: Observable<boolean>; 
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.details$ = this.store.select(selectRequestDetails);
    this.loading$ = this.store.select(selectRequestLoading);
    this.error$ = this.store.select(selectRequestError);
    }
  
  getRequestD() {
      this.store.dispatch(loadRequestDetails({ requestId: 1 }));
    }

}


