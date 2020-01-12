// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTime from '../../../app/middleware/time';

declare module 'egg' {
  interface IMiddleware {
    time: typeof ExportTime;
  }
}
