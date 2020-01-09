// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportExLogin from '../../../app/controller/ex/login';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    ex: {
      login: ExportExLogin;
    }
  }
}
