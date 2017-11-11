import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  ngOnInit() {
  }

}
