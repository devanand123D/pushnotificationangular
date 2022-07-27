import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PushNotificationService } from '../push-notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('title') title:ElementRef; 
  @ViewChild('message') message:ElementRef; 
  constructor(private _notificationService: PushNotificationService,private router:Router) { }

  ngOnInit(): void {

  }
  onnotify()
  {
    let data: Array<any> = [];
    data.push({
      'title': this.title.nativeElement.value,
      'alertContent': this.message.nativeElement.value
    });
;
    this._notificationService.generateNotification(data);
  }

}
