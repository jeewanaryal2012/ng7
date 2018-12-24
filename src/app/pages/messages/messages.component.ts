import { Component, OnInit } from '@angular/core';

import { MailService } from "../../services/mail.service";
import { ShareService } from "../../services/share.service";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  result: any;
  showBrief = true;

  constructor(private _mailService: MailService, private _shareService: ShareService) { }

  ngOnInit() {
    let emails = this._mailService.loadEmails()
      .subscribe(r => {
        this.result = r
      });
  }

  storeEmail(email) {
    this.showBrief = false;
    this._shareService.pushEmail(email);
  }

}
