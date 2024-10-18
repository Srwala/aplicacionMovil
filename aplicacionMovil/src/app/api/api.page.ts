import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
      this.apiService.loadStudents().subscribe(users => {
        this.users = users;
      });   
    }
  }
