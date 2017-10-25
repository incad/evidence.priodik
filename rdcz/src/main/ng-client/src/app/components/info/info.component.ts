import { Component, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AppState } from '../../app.state';
import { AppService } from '../../app.service';
import {InnerContentComponent} from '../inner-content/inner-content.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements AfterViewInit {
  
  @ViewChild(InnerContentComponent) inn: InnerContentComponent;
  
  
  subscriptions: Subscription[] = [];
  page: string = 'info';
  

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public state: AppState,
    public service: AppService,
    private route: ActivatedRoute) { }

  ngAfterViewInit() {
    
    this.loadComponent();
    this.subscriptions.push(this.service.langSubject.subscribe(
      () => {
        this.loadComponent();
      }
    ));
  }
  
  loadComponent() {
    
    let param = this.route.snapshot.paramMap.get('page');
    if(!param || param === ''){
      this.page = 'info';
    } else {
      this.page = 'info/' + param;
    }
    
    this.service.getText(this.page).subscribe(t => {
//      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(InnerContentComponent);
//      let viewContainerRef = this.inner.viewContainerRef;
//      viewContainerRef.clear();
//      let componentRef = viewContainerRef.createComponent(componentFactory);
//      (<InnerContentComponent>componentRef.instance).setText(t);
      this.inn.setText(t);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s: Subscription) => {
      s.unsubscribe();
    });
    this.subscriptions = [];
  }

}
