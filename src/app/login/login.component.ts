import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PushNotificationService } from '../push-notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('user') user:ElementRef; 
  @ViewChild('pwd') pwd:ElementRef; 
  constructor(private _notificationService: PushNotificationService,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit()
  {
if(this.user.nativeElement.value=='admin' &&this.pwd.nativeElement.value=='admin')
{
this.router.navigateByUrl('/admin')
}
else
{
  let data: Array<any> = [];
  data.push({
    'title': 'dear Partner',
    'alertContent': 'Welcome to saintgobain Glass Login '
  });

      this._notificationService.generateNotification(data);
      this.router.navigateByUrl('/formcom')
}
}

  }

