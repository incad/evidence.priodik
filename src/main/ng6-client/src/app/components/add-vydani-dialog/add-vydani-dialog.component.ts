import {Component} from '@angular/core';
import {MzBaseModal, MzToastService} from 'ngx-materialize';

import {AppState} from '../../app.state';
import {AppService} from '../../app.service';
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-add-vydani-dialog',
  templateUrl: './add-vydani-dialog.component.html',
  styleUrls: ['./add-vydani-dialog.component.scss']
})
export class AddVydaniDialogComponent extends MzBaseModal {

  state: AppState;
  service: AppService;

  vydani: string;

  public issue: Issue;

  constructor(
    private toastService: MzToastService) {
    super();
  }

  ok() {
    this.service.addVydani(this.issue, this.vydani).subscribe(res => {

      if (res['error']) {
        this.toastService.show(res['error'], 4000, 'red');
      } else {
        this.modalComponent.closeModal();
      }
    });

  }
}