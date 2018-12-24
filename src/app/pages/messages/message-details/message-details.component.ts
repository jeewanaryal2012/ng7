import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from "../../../services/share.service";

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  detailEmail: any;

  constructor(private _activatedRoute: ActivatedRoute, private _shareService: ShareService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      this.detailEmail = this._shareService.popEmail();
    });
  }

}
