import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  filteredStatus = '';
  serversArr = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(13, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(13, 1, 2017)
    },
  ];

  onAddServer() {
    this.serversArr.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(13, 1, 2017)
    });
  }

  fetchStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

}
