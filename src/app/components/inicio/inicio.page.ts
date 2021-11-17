import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

usuario = {
  email:'',
  password:''
};
  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('form submit');
    console.log(this.usuario);
  }
}
