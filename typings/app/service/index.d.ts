// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportResponse from '../../../app/service/response';
import ExportTest from '../../../app/service/Test';
import ExportExLogin from '../../../app/service/ex/login';

declare module 'egg' {
  interface IService {
    response: ExportResponse;
    test: ExportTest;
    ex: {
      login: ExportExLogin;
    }
  }
}
