import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
  estalogeado = false;
  roles = [
    'admin',
    'supervisor',
    'usuario'
  ]
}

