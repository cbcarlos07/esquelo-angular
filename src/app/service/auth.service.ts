import { EventEmitter, Injectable } from '@angular/core';
import { Menu } from '../components/menu/menu.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authEmitter = new EventEmitter()
  constructor() { }

  getName(){
    return 'Carlos Bruno'
  }

  logout(){

  }

  avisoLogin(status: boolean = true){
		this.authEmitter.emit(status)
	}

  isLoggedIn(){
    return true
		//return localStorage.getItem('token') != null
	}

  obterMenus(){
    return [
      {
        menu: 'Dashboard', 
        url: ['#'], 
        logo: 'fa-dashboard',
        submenu: [
          {
            menu: 'Dashboard v1',
            url: ['/dashboard'],
            logo: 'fa-circle-o'
          },
          {
            menu: 'Dashabord v2',
            url: ['/dashboard2'],
            logo: 'fa-circle-o'
          }
        ]
      },
      {
        menu: 'Lista', 
        url: ['/lista'], 
        logo: 'fa-bars',
      }
    ]
	}



}
