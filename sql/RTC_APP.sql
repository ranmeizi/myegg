/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : 127.0.0.1:3306
Source Database       : RTC_APP

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2020-04-06 23:15:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sys_dic
-- ----------------------------
DROP TABLE IF EXISTS `sys_dic`;
CREATE TABLE `sys_dic` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT,
  `field_name` varchar(20) DEFAULT NULL,
  `key` varchar(20) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`autoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_dic
-- ----------------------------

-- ----------------------------
-- Table structure for sys_group
-- ----------------------------
DROP TABLE IF EXISTS `sys_group`;
CREATE TABLE `sys_group` (
  `id` varchar(64) NOT NULL,
  `group` varchar(20) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_group
-- ----------------------------

-- ----------------------------
-- Table structure for sys_group_role_rel
-- ----------------------------
DROP TABLE IF EXISTS `sys_group_role_rel`;
CREATE TABLE `sys_group_role_rel` (
  `gid` varchar(64) DEFAULT NULL,
  `rid` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_group_role_rel
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` varchar(64) NOT NULL,
  `role` varchar(20) DEFAULT NULL,
  `target` varchar(20) DEFAULT NULL,
  `parentId` varchar(64) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `uid` varchar(64) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `psw` varchar(64) DEFAULT NULL,
  `salt` varchar(10) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('5c219497-4482-4bec-b8e4-7fdce5a976bd', null, 'ceshiyonghu', 'a6ce585de617243d2365f755fd0c30300a1bdaa740ec5c5404bc9cfc84a037f7', 'oposccieon', '2020-04-06', '2020-04-06', null, null);
INSERT INTO `sys_user` VALUES ('649d3d92-6aef-4492-b425-a1af8d3500c9', null, 'ceshiyonghu', 'd164d8f047c0267c19413e8337bb7b58e4e9cb85b44081f0146a0a00579c5b6e', 'cPlmiciiip', '2020-04-06', '2020-04-06', null, null);
INSERT INTO `sys_user` VALUES ('b73cf70b-7064-4919-91a6-b1bcaf247ed0', null, 'ceshiyonghu', '5f9287e5544e16611e2de8367ff9c767a1892a7e1d4a790459b4f82a5543fe27', 'lanmsoiisc', '2020-04-06', '2020-04-06', null, null);
INSERT INTO `sys_user` VALUES ('c99eac73-fb46-4727-99b4-e7a66d10c631', null, 'ceshiyonghu', '373a2dc32161484947b66916d267445797e3ba6dbbac099277df7ebea4db084a', 'Psonomplic', '2020-04-06', '2020-04-06', null, null);
INSERT INTO `sys_user` VALUES ('f653a64d-21cb-49c5-b22e-aafa26c36e5b', null, 'ceshiyonghu', 'b32420031faeb93adfafdff8e9e482b5281764bda1fa1dba7d7ccbc2e3d055b0', 'osmnvconcm', '2020-04-06', '2020-04-06', null, null);
INSERT INTO `sys_user` VALUES ('ffc557f3-3450-4b30-8c00-397edabccbd0', null, 'ceshiyonghu', 'b1c90a65713da0241973d9ca1d36a2a3bc7de70da83a5d073139f451ef1ae4b8', 'iccranoain', '2020-04-06', '2020-04-06', null, null);

-- ----------------------------
-- Table structure for sys_user_group_rel
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_group_rel`;
CREATE TABLE `sys_user_group_rel` (
  `uid` varchar(64) DEFAULT NULL,
  `gid` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user_group_rel
-- ----------------------------
