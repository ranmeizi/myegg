// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportExTest from '../../../app/controller/ex/test';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    ex: {
      test: ExportExTest;
    }
  }
}
