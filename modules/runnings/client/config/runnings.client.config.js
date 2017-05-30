﻿(function () {
  'use strict';

  // Configuring the Runnings Admin module
  angular
    .module('runnings')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Manage Records',
      state: 'runnings.list',
      roles: ['user', 'admin']
    });
  }
}());
