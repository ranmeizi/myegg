/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50717
Source Host           : 127.0.0.1:3306
Source Database       : RTC_APP

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2020-04-09 17:17:07
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
  `id` varchar(36) NOT NULL,
  `group` varchar(20) DEFAULT NULL,
  `parent_id` varchar(36) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_group
-- ----------------------------

-- ----------------------------
-- Table structure for sys_group_resource_rel
-- ----------------------------
DROP TABLE IF EXISTS `sys_group_resource_rel`;
CREATE TABLE `sys_group_resource_rel` (
  `gid` varchar(36) DEFAULT NULL,
  `mid` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_group_resource_rel
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `id` varchar(36) NOT NULL,
  `code` varchar(30) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `parent_id` varchar(36) DEFAULT NULL,
  `href` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `uid` varchar(36) NOT NULL,
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
INSERT INTO `sys_user` VALUES ('36d44711-f2f4-455c-9175-cd076f7ff1f6', null, 'woshinibaba', '2bccd577150a71061717ab79dcd881f7caca9ea60226f88d4ff0cca39700bbf2', 'sslrnciiov', '2020-04-08', '2020-04-08', null, null);

-- ----------------------------
-- Table structure for sys_user_group_rel
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_group_rel`;
CREATE TABLE `sys_user_group_rel` (
  `uid` varchar(36) DEFAULT NULL,
  `gid` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user_group_rel
-- ----------------------------
