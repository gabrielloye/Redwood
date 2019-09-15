import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.scss']
})
export class NotetakerComponent implements OnInit {

  faMicrophone = faMicrophone;
  input = new FormControl('');
  display: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  start() {
    setTimeout(() =>{
      this.display = true;
    },2000)
  }

  navigate() {
    this.router.navigate(['/'])
  }

  submit() {
    
  }

}