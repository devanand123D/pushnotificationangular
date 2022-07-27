import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PushNotificationService } from '../push-notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcom',
  templateUrl: './formcom.component.html',
  styleUrls: ['./formcom.component.css']
})
export class FormcomComponent implements OnInit {
  @ViewChild('name') name:ElementRef; 
  @ViewChild('phone') phone:ElementRef; 
  constructor(private _notificationService: PushNotificationService,private router:Router) { }

  ngOnInit(): void {
  }
  onnotify() {
    let data: Array<any> = [];
    data.push({
      'title': 'Approval',
      'alertContent': 'This is First approval -- By Devanand'
    });

    this._notificationService.generateNotification(data);
  }
}
