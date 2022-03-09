import { selectCurrentUser } from './../../webapp-common/core/reducers/users-reducer';
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSelectedProjectId} from '../../webapp-common/core/reducers/projects.reducer';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ConfigurationService} from '../../webapp-common/shared/services/configuration.service';
import {SearchDeactivate} from '../../webapp-common/dashboard-search/dashboard-search.actions';
import { faCoffee, faBug,  faHatWizard, faFlushed, faBalanceScaleLeft, faDatabase, faCodeBranch, faFileExcel, faThList} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector   : 'sm-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls  : ['./side-nav.component.scss'],
})
export class SideNavComponent {
  public selectedProjectId$: Observable<any>;
  currentUser: any;
  environment = ConfigurationService.globalEnvironment;


  constructor(public store: Store<any>, private router: Router) {
    this.selectedProjectId$ = this.store.select(selectSelectedProjectId);
    this.store.select(selectCurrentUser).subscribe((res) => this.currentUser = res);
  }


  public resetSearch() {
    this.store.dispatch(new SearchDeactivate());
  }

  get guestUser(): boolean {
    return this.currentUser && this.currentUser?.role === 'guest';
  }
  
  faCoffee = faCoffee;
  faBug = faBug;
  faHatWizard = faHatWizard;
  faFlushed = faFlushed;
  faBalanceScaleLeft = faBalanceScaleLeft;
  faDatabase = faDatabase
  faCodeBranch = faCodeBranch
  faFileExcel = faFileExcel
  faThList = faThList
}
