module.exports = (app) => {
  const { router, controller } = app;

  //common
  router.get(
    "/admin/common/enable",
    controller.admin.base.isShow
  );
  
  /**
   * 公共删除
   */
  router.get(
    "/admin/common/delete",
    controller.admin.base.deleteCommon
  );
  /**
   * 公共上传
   */
  router.post(
    "/admin/common/imageUpload",
    controller.admin.upload.addLimit
  );




  //品牌
  router.post("/admin/brand", controller.admin.productManager.brand.index);
  router.post("/admin/brand/add", controller.admin.productManager.brand.add);
  router.post("/admin/brand/edit", controller.admin.productManager.brand.edit);
  router.get(
    "/admin/brand/delete",
    controller.admin.productManager.brand.delete
  );
  router.get(
    "/admin/brand/detail",
    controller.admin.productManager.brand.detail
  );
  router.get(
    "/admin/brand/categoryByBrand",
    controller.admin.productManager.brand.getCategoryByBrand
  );

  //分类
  router.post(
    "/admin/category",
    controller.admin.productManager.category.index
  );
  router.post(
    "/admin/category/add",
    controller.admin.productManager.category.add
  );
  router.post(
    "/admin/category/edit",
    controller.admin.productManager.category.edit
  );
  router.get(
    "/admin/category/delete",
    controller.admin.productManager.category.delete
  );
  router.get(
    "/admin/category/detail",
    controller.admin.productManager.category.detail
  );
  router.get(
    "/admin/category/specByCategory",
    controller.admin.productManager.category.getSpecByCategory
  );

  //商品类型
  router.post(
    "/admin/type",
    controller.admin.productManager.type.index
  );
  router.post(
    "/admin/type/add",
    controller.admin.productManager.type.add
  );
  router.post(
    "/admin/type/edit",
    controller.admin.productManager.type.edit
  );
  router.get(
    "/admin/type/delete",
    controller.admin.productManager.type.delete
  );



  //规格参数组
  router.post(
    "/admin/specGroup",
    controller.admin.productManager.specGroup.index
  );
  router.post(
    "/admin/specGroup/add",
    controller.admin.productManager.specGroup.add
  );
  router.post(
    "/admin/specGroup/edit",
    controller.admin.productManager.specGroup.edit
  );
  router.get(
    "/admin/specGroup/delete",
    controller.admin.productManager.specGroup.delete
  );
  router.get(
    "/admin/specGroup/detail",
    controller.admin.productManager.specGroup.detail
  );

  //规格参数
  router.post("/admin/spec", controller.admin.productManager.specs.index);
  router.post("/admin/spec/add", controller.admin.productManager.specs.add);
  router.post("/admin/spec/edit", controller.admin.productManager.specs.edit);
  router.get(
    "/admin/spec/delete",
    controller.admin.productManager.specs.delete
  );
  router.get(
    "/admin/spec/detail",
    controller.admin.productManager.specs.detail
  );

  //spu
  router.post("/admin/spu", controller.admin.productManager.spu.index);
  router.post("/admin/spu/add", controller.admin.productManager.spu.productAdd);
  router.post("/admin/spu/edit", controller.admin.productManager.spu.edit);
  router.get(
    "/admin/spu/delete",
    controller.admin.productManager.spu.delete
  );
  router.get(
    "/admin/spu/detail",
    controller.admin.productManager.spu.detail
  );
  router.get(
    "/admin/spu/detail/info",
    controller.admin.productManager.spu.detailInfo
  );

   //sku
   router.get("/admin/sku", controller.admin.productManager.sku.findSkuById);
   router.post("/admin/sku/add", controller.admin.productManager.sku.add);
   router.post("/admin/sku/edit", controller.admin.productManager.sku.edit);
   router.get(
     "/admin/sku/delete",
     controller.admin.productManager.sku.delete
   );
   router.get(
     "/admin/sku/detail",
     controller.admin.productManager.sku.detail
   );
};
