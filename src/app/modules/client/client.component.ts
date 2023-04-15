import { Component, OnInit } from '@angular/core';

import { ClientService } from './service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
