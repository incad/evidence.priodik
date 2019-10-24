import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterializeModule } from 'ngx-materialize';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {NgProgressModule} from '@ngx-progressbar/core';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  NativeDateModule,
  DateAdapter} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppState } from './app.state';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';

import { IssueComponent } from './components/issue/issue.component';
import { FacetComponent } from './components/facet/facet.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { ResultItemComponent } from './components/result/result-item/result-item.component';
import { CalendarMonthComponent } from './components/calendar/calendar-month/calendar-month.component';
import { CalendarYearComponent } from './components/calendar/calendar-year/calendar-year.component';
import { CalendarListComponent } from './components/calendar/calendar-list/calendar-list.component';
import { CalendarMonthDayComponent } from './components/calendar/calendar-month/calendar-month-day/calendar-month-day.component';
import { LoginComponent } from './components/login/login.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { FacetUsedComponent } from './components/facet/facet-used/facet-used.component';
import { ToolbarPaginationResultComponent } from './components/toolbar/toolbar-pagination-result/toolbar-pagination-result.component';
import { ToolbarPaginationCalendarComponent } from './components/toolbar/toolbar-pagination-calendar/toolbar-pagination-calendar.component';
import { ToolbarNavViewsComponent } from './components/toolbar/toolbar-nav-views/toolbar-nav-views.component';
import { ToolbarCountComponent } from './components/toolbar/toolbar-count/toolbar-count.component';
import { CalendarListItemComponent } from './components/calendar/calendar-list/calendar-list-item/calendar-list-item.component';
import { CloneDialogComponent } from './components/clone-dialog/clone-dialog.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { AddExemplarDialogComponent } from './components/add-exemplar-dialog/add-exemplar-dialog.component';
import { AddTitulDialogComponent } from './components/add-titul-dialog/add-titul-dialog.component';
import { AddVdkExComponent } from './components/add-vdk-ex/add-vdk-ex.component';
import { AddVydaniDialogComponent } from './components/add-vydani-dialog/add-vydani-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {AuthGuard} from './auth-guard';
import { EditPagesComponent } from './components/edit-pages/edit-pages.component';
import { SvazekComponent } from './components/svazek/svazek.component';


registerLocaleData(localeCs, 'cs');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    //KalendarFullComponent,
    IssueComponent,
    FacetComponent,
    ToolbarComponent,
    SearchBarComponent,
    HomeComponent,
    ResultComponent,
    ResultItemComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
    CalendarListComponent,
    CalendarMonthDayComponent,
    LoginComponent,
    AddRecordComponent,
    FacetUsedComponent,
    ToolbarPaginationResultComponent,
    ToolbarPaginationCalendarComponent,
    ToolbarNavViewsComponent,
    ToolbarCountComponent,
    CalendarListItemComponent,
    CloneDialogComponent,
    ResultsTableComponent,
    AddExemplarDialogComponent,
    AddTitulDialogComponent,
    AddVdkExComponent,
    AddVydaniDialogComponent,
    ConfirmDialogComponent,
    EditPagesComponent,
    SvazekComponent
  ],
  entryComponents: [ConfirmDialogComponent,
    CloneDialogComponent, 
    AddExemplarDialogComponent, 
    AddTitulDialogComponent, 
    AddVdkExComponent,
    AddVydaniDialogComponent,
    EditPagesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    NgProgressModule.forRoot(),
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
  
    CdkTableModule,
    
    RouterModule.forRoot([
      { path: 'issue', component: IssueComponent, canActivate: [AuthGuard] },
      { path: 'issue/:id', component: IssueComponent },
      { path: 'home', component: HomeComponent },
      { path: 'svazek', component: SvazekComponent },
      { path: 'svazek/:id', component: SvazekComponent },
      { path: 'result', component: ResultComponent },
      { path: 'calendar/:id', component: CalendarComponent, 
        children: [
          { path: '', redirectTo: 'month', pathMatch: 'full' },
          { path: 'month/:day', component: CalendarMonthComponent },
          { path: 'month', component: CalendarMonthComponent },
          { path: 'year', component: CalendarYearComponent },
          { path: 'year/:day', component: CalendarYearComponent },
          { path: 'list', component: CalendarListComponent },
          { path: 'list/:day', component: CalendarListComponent }
        ]
      },
      { path: 'add-record', component: AddRecordComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [HttpClient, DatePipe, AppState, AppService, AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }