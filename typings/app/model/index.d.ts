// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGroup from '../../../app/model/Group';
import ExportGroupResourceRel from '../../../app/model/GroupResourceRel';
import ExportMenu from '../../../app/model/Menu';
import ExportUser from '../../../app/model/User';
import ExportUserGroupRel from '../../../app/model/UserGroupRel';

declare module 'egg' {
  interface IModel {
    Group: ReturnType<typeof ExportGroup>;
    GroupResourceRel: ReturnType<typeof ExportGroupResourceRel>;
    Menu: ReturnType<typeof ExportMenu>;
    User: ReturnType<typeof ExportUser>;
    UserGroupRel: ReturnType<typeof ExportUserGroupRel>;
  }
}
