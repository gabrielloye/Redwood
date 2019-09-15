import { Component, OnInit } from '@angular/core';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  faClipboard = faClipboard;
  clients = [
    {
      name: "Anthony Green"
    },
    {
      name: "Jane Johnson"
    },
    {
      name: "Zhang YuFei"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["/notetaker"])
  }

}