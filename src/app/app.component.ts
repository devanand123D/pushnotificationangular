import { Component } from '@angular/core';
import { PushNotificationService } from './push-notification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pushnotificationangular';
  name = 'Angular 6';

  constructor(private _notificationService: PushNotificationService) {
    this._notificationService.requestPermission();
  }


  notify() {
    let data: Array<any> = [];
    data.push({
      'title': 'Approval',
      'alertContent': 'This is First Alert -- By Debasis Saha'
    });
    // data.push({
    //   'title': 'Request',
    //   'alertContent': 'This is Second Alert -- By Debasis Saha'
    // });
    // data.push({
    //   'title': 'Leave Application',
    //   'alertContent': 'This is Third Alert -- By Debasis Saha'
    // });
    // data.push({
    //   'title': 'Approval',
    //   'alertContent': 'This is Fourth Alert -- By Debasis Saha'
    // });
    // data.push({
    //   'title': 'To Do Task',
    //   'alertContent': 'This is Fifth Alert -- By Debasis Saha'
    // });
    this._notificationService.generateNotification(data);
  }
}


