'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/admin')(app);
  require('./router/index')(app);
  
  
  // router.post('/admin/dologin',controller.admin.login.dologin)
 
  // router.get('/admin/manager',controller.admin.manager.index)
  // router.post('/admin/manager/add',controller.admin.manager.add)
  // router.get('/admin/manager/delete',controller.admin.manager.delete)
  // router.post('/admin/manager/edit',controller.admin.manager.edit)
  // router.get('/admin/manager/detail',controller.admin.manager.detail)
  // router.get('/admin/manager/allAccess',controller.admin.manager.allAccess)


  // router.post('/admin/role',controller.admin.role.index)
  // router.post('/admin/role/add',controller.admin.role.add)
  // router.get('/admin/role/delete',controller.admin.role.delete)
  // router.post('/admin/role/edit',controller.admin.role.edit)
  // router.post('/admin/role/lineAccess',controller.admin.role.roleLineAccess)
  // router.get('/admin/role/detail',controller.admin.role.detail)

  // router.post('/admin/access',controller.admin.access.index)
  // router.post('/admin/access/add',controller.admin.access.add)
  // router.get('/admin/access/delete',controller.admin.access.delete)
  // router.get('/admin/access/edit',controller.admin.access.edit)

  

  // router.post('/admin/goodstype',controller.admin.goodstype.index)
  // router.post('/admin/goodstype/add',controller.admin.goodstype.add)
  // router.get('/admin/goodstype/delete',controller.admin.goodstype.delete)
  // router.post('/admin/goodstype/edit',controller.admin.goodstype.edit)

  // router.get('/admin/goodstypeattr',controller.admin.goodstypeattr.getAttrById)
  // router.post('/admin/goodstypeattr/add',controller.admin.goodstypeattr.add)
  // router.get('/admin/goodstypeattr/delete',controller.admin.goodstypeattr.delete)
  // router.post('/admin/goodstypeattr/edit',controller.admin.goodstypeattr.edit)

  // router.post('/admin/upload',controller.admin.upload.add)
  // router.post('/admin/upload/suo',controller.admin.upload.addLimit)
  // router.get('/admin/upload/del',controller.admin.upload.delete)


  // router.post('/admin/focus/add',controller.admin.focus.add)
  // router.post('/admin/focus/edit',controller.admin.focus.edit)
  // router.get('/admin/focus/list',controller.admin.focus.index)
  // router.get('/admin/focus/delete',controller.admin.focus.delete)


  // router.post('/admin/goodscate/add',controller.admin.goodscate.add)
  // router.post('/admin/goodscate/edit',controller.admin.goodscate.edit)
  // router.post('/admin/goodscate',controller.admin.goodscate.index)
  // router.get('/admin/goodscate/delete',controller.admin.goodscate.delete)

  // router.post('/admin/goodscolor/add',controller.admin.goodscolor.add)
  // router.post('/admin/goodscolor/edit',controller.admin.goodscolor.edit)
  // router.post('/admin/goodscolor',controller.admin.goodscolor.index)
  // router.get('/admin/goodscolor/delete',controller.admin.goodscolor.delete)
};
