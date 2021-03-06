import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {get} from 'lodash/fp';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, tap} from 'rxjs/operators';
import {MESSAGES_SEVERITY} from '../../../../app.constants';
import {IExperimentInfoState} from '../../reducers/experiment-info.reducer';
import {selectExperimentInfoData, selectIsExperimentEditable, selectSelectedExperiment} from '../../reducers';
import {selectBackdropActive} from '../../../../webapp-common/core/reducers/view.reducer';
import {isReadOnly} from '../../../../webapp-common/shared/utils/shared-utils';
import {selectRouterConfig, selectRouterParams, selectRouterQueryParams} from '../../../../webapp-common/core/reducers/router-reducer';
import * as commonInfoActions from '../../../../webapp-common/experiments/actions/common-experiments-info.actions';
import {ExperimentDetailsUpdated} from '../../../../webapp-common/experiments/actions/common-experiments-info.actions';
import {addMessage} from '../../../../webapp-common/core/actions/layout.actions';
import {IExperimentInfo} from '../../shared/experiment-info.model';
import {selectSelectedTableExperiment} from '../../../../webapp-common/experiments/reducers';
import {ITableExperiment} from '../../../../webapp-common/experiments/shared/common-experiment-model.model';

// new imports
import {faDatabase, faCodeBranch, faFileExcel, faThList, faUpload} from '@fortawesome/free-solid-svg-icons';
import { AngularFileUploaderComponent } from "angular-file-uploader";
import { HttpClient, HttpEventType} from '@angular/common/http';


@Component({
  selector: 'sm-experiment-info',
  templateUrl: './experiment-info.component.html',
  styleUrls: ['./experiment-info.component.scss']
})
export class ExperimentInfoComponent implements OnInit, OnDestroy {

  private paramsSubscription: Subscription;
  public selectedExperiment: IExperimentInfo;
  private selectedExperimentSubscription: Subscription;
  public editable$: Observable<boolean>;
  public infoData$: Observable<IExperimentInfo>;
  public backdropActive$: Observable<any>;
  public isExample: boolean;
  private projectId: string;
  private experimentId: string;
  public resultsTab: boolean;
  public queryParams$: Observable<Params>;
  public routerConfig: string[];
  private routerConfigSubscription: Subscription;
  public tableSelectedExperiment$: Observable<ITableExperiment>;
  private toMaximize = false;

  constructor(
    private router: Router,
    private store: Store<IExperimentInfoState>,
    private route: ActivatedRoute, 
    private http: HttpClient
  ) {
    this.editable$ = this.store.select(selectIsExperimentEditable);
    this.infoData$ = this.store.select(selectExperimentInfoData);
    this.backdropActive$ = this.store.select(selectBackdropActive);
    this.queryParams$ = this.store.select(selectRouterQueryParams);
    this.tableSelectedExperiment$ = this.store.select(selectSelectedTableExperiment);
  }

  ngOnInit() {
    this.selectedExperimentSubscription = this.store.select(selectSelectedExperiment)
      .subscribe(experiment => {
        this.selectedExperiment = experiment;
        this.isExample = isReadOnly(experiment);
      });
    this.routerConfigSubscription = this.store.select(selectRouterConfig).subscribe(routerConfig => {
      this.routerConfig = routerConfig;
    });

    this.paramsSubscription = this.store.select(selectRouterParams)
      .pipe(
        tap((params) => {
          this.projectId = get('projectId', params);
          this.resultsTab = 'info-output' === this.route.firstChild.routeConfig.path;
        }),
        debounceTime(150),
        map(params => get('experimentId', params)),
        filter(experimentId => !!experimentId),
        distinctUntilChanged()
      )
      .subscribe(experimentId => {
        this.experimentId = experimentId;

        // We already have GetExperimentInfo in output (results) component
        if (!this.resultsTab) {
          this.store.dispatch(new commonInfoActions.ResetExperimentInfo());
          this.store.dispatch(new commonInfoActions.GetExperimentInfo(experimentId));
        }
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.selectedExperimentSubscription.unsubscribe();
    this.routerConfigSubscription.unsubscribe();
    if (!this.toMaximize) {
      this.store.dispatch(new commonInfoActions.SetExperiment(null));
      this.store.dispatch(new commonInfoActions.ResetExperimentInfo());
    }
  }

  updateExperimentName(name) {
    if (name.trim().length > 2) {
      this.store.dispatch(new ExperimentDetailsUpdated({id: this.selectedExperiment.id, changes: {name: name}}));
    } else {
      this.store.dispatch(addMessage(MESSAGES_SEVERITY.ERROR, 'Name must be more than three letters long'));
    }
  }

  deselectExperiment() {
    this.navigateAfterExperimentSelectionChanged();
  }

  navigateAfterExperimentSelectionChanged() {
    this.router.navigate([`projects/${this.projectId}/experiments`], {queryParamsHandling: 'merge'});
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  maximize() {
    if (window.location.pathname.includes('info-output')) {
      const resultsPath = this.route.firstChild?.firstChild?.routeConfig?.path || this.route.firstChild.routeConfig.path;
      this.router.navigateByUrl(`projects/${this.projectId}/experiments/${this.experimentId}/output/${resultsPath}`);
    } else {
      const parts = window.location.pathname.split('/');
      parts.splice(5, 0, 'output');
      this.router.navigateByUrl(parts.join('/'));
    }
    this.toMaximize = true;
  }

  // So.
  // From here all the code you will find is new.


//  here are the "fontawesome" icons, if you want to change the icons you will have to 
//  first import them here and declare them in the new imports and then use them in HTML.
//  don't need to install anything, it's already in package.json
  faDatabase = faDatabase
  faCodeBranch = faCodeBranch
  faFileExcel = faFileExcel
  faThList = faThList
  faUpload = faUpload

  //test function made to check if the buttons in the html were being triggered correctly
  // test() {
  //   alert("ALIVE")
  //   alert("experimentId" + this.experimentId)
  //   alert("projectId" + this.projectId)
  // }

  // //just leave it here, it is necessary so that the function that uploads files can work
  // selectedFiles: File = null;

  // version_control(){

  //   // has the url variable declared for the current configuration of port 5000 of the new backend module.
  //   // still need to finish and define the methods to be used in the backend, the parameters to be sent 
  //   // will depend on the implementation that will be done.
  //   // I particularly think that it will be necessary to create a new view to be able to perform this function properly

  //   var url = 'http://127.0.0.1:5000/version_control'

  //   this.http.get(url)
  //   .subscribe(response => console.log(response))
      
  // }


  // //To more information about this module go to =>  https://blog.angular-university.io/angular-http/
  // async dataset_upload(evente){
  //   var url = 'http://127.0.0.1:5000'
  //   //var url = window.location.hostname+ ':5000'

  //   alert(url)

  //   const my_id : any = {
  //     'experimentId' : this.experimentId,
  //     'projectId' : this.projectId,
  //   }
  //   this.http.post(url + '/dataset2artefact', my_id)
  //   .subscribe(response => console.log(response))

  //   this.selectedFiles = <File>evente.target.files
  //   console.log(this.selectedFiles)

  //   const file = new FormData()
  //   file.append('file', this.selectedFiles[0],);
  //   //const upload: any = await 

  //   this.http.post(url + '/dataset_upload',file, {
  //     reportProgress: true,
  //     observe:'events'
  //   })
  //   .subscribe(event => {
  //   if (event.type === HttpEventType.UploadProgress){
  //     console.log('UploadProgress: ' + Math.round(event.loaded / event.total * 100) + '%')
  //   }else if(event.type === HttpEventType.Response){
  //     console.log(event)
  //   }
  //   })

  //   //.toPromise();

  // }

  // weight_upload(evente){
  //   var url = 'http://127.0.0.1:5000/weight_upload'

  //   this.selectedFiles = <File>evente.target.files
  //   console.log(this.selectedFiles)

  //   const file = new FormData()
  //   file.append('file', this.selectedFiles[0],);
  //   console.log(file)


  //   this.http.post(url,file, {
  //     reportProgress: true,
  //     observe:'events',
  //   })
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress){
  //         console.log('UploadProgress: ' + Math.round(event.loaded / event.total * 100) + '%')
  //       }else if(event.type === HttpEventType.Response){
  //         console.log(event)
  //       }
  //     })
  // }

  // comparison(){
  //   var url = 'http://127.0.0.1:5000/comparison'

  //   this.http.get(url)
  //   .subscribe(response => console.log(response))
  // }

  



}
