import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {AppState} from '../../app.state';
import {AppService} from '../../app.service';

import {Issue} from '../../models/issue';
import {Titul} from '../../models/titul';
import {StavIssue} from '../../models/stav-issue.enum';
import {StateIssue} from '../../models/state-issue.enum';
import {MzModalService} from 'ng2-materialize';
import {CloneDialogComponent} from '../clone-dialog/clone-dialog.component';

@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
    subscriptions: Subscription[] = [];

    stavy = [];
    states = [];

    issue: Issue = new Issue();
    public options: Pickadate.DateOptions = {
        format: 'dd/mm/yyyy',
        formatSubmit: 'yyyy-mm-dd',
    };

    constructor(
    private modalService: MzModalService,
        private route: ActivatedRoute,
        public state: AppState,
        private service: AppService) {
        Object.keys(StavIssue).map(k => {this.stavy.push({key: k, value: StavIssue[k]});});
        Object.keys(StateIssue).map(k => {this.states.push({key: k, value: StateIssue[k]});});
    }

    onSubmit() {
        console.log(this.issue);
    }

    setData(res: any[]) {
        console.log(res);
        if (res.length > 0) {
            //this.issue = res[0];
            this.state.currentIssue = res[0];
            console.log(this.state.currentIssue.exemplare);
            this.service.getTitul(this.state.currentIssue.titul_id).subscribe(res2 => {
                if (res2.length > 0) {
                    this.state.currentTitul = res2[0];
                }
            });
        } else {
            this.issue = new Issue();
        }
    }


    ngOnDestroy() {
        this.subscriptions.forEach((s: Subscription) => {
            s.unsubscribe();
        });
        this.subscriptions = [];
    }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        if (this.state.config) {
            this.service.getIssue(id).subscribe(res => {
                this.setData(res);
            });
        } else {
            this.subscriptions.push(this.state.configSubject.subscribe((state) => {
                this.service.getIssue(id).subscribe(res => {
                    this.setData(res);
                });
            }));
        }
    }

    openCloneDialog() {
        this.modalService.open(CloneDialogComponent);
    }

}