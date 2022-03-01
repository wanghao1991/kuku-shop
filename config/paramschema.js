const Joi = require("joi");
const errExpection = require("./httpExpection");
class ParamValitator {
  constructor(schema, data) {
    this.schema = schema;
    this.data = data;
    this.validate();
  }
  validate() {
    const { value, error } = this.schema.validate(this.data, {
      allowUnknown: true, //允许不存在的字段
      stripUnknown: true, //过滤不存在的字段
      abortEarly: true, //遇到错误立即返回
    });
    if (error) {
      console.log("---paramschema-err----", error);
      let errMsg =
        (error.details && error.details[0] && error.details[0]["message"]) ||
        error.message;
      throw new errExpection.ParamExpection(errMsg);
    }
  }
}
const allModelIds = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];

const commonIdSchema = Joi.object({
  id: [
    Joi.string().required().messages({
      "any.required": "id参数缺失",
      "string.empty": "id不能为空",
    }),
    Joi.number().required().messages({
      "any.required": "id参数缺失",
      "number.empty": "id不能为空",
    }),
  ],
});
const deleteCommmonSchema = Joi.object({
  id: Joi.number().required().messages({
    "any.required": "id参数缺失",
    "number.empty": "id不能为空",
  }),
  modelId: Joi.number()
    .valid(...allModelIds)
    .required()
    .error(new Error("modelId参数有误")),
  soft: Joi.number().valid(0, 1).error(new Error("name参数有误")),
});
const brandSchema = {
  name: {
    name: Joi.string().max(10).required().messages({
      "any.required": "name参数缺失",
      "string.empty": "name不能为空",
      "string.max": "用户名太长",
    }),
  },
  id: {
    id: [
      Joi.string().required().messages({
        "any.required": "id参数缺失",
        "string.empty": "id不能为空",
      }),
      Joi.number().required().messages({
        "any.required": "id参数缺失",
        "number.empty": "id不能为空",
      }),
    ],
  },
  add() {
    return Joi.object({ ...this.name });
  },
  edit() {
    return Joi.object({ ...this.id, ...this.name });
  },
  del() {
    return Joi.object({ ...this.id });
  },
};
const categorySchema = {
  name: {
    name: Joi.string().max(10).required().messages({
      "any.required": "name参数缺失",
      "string.empty": "name不能为空",
      "string.max": "用户名太长",
    }),
  },
  id: {
    id: [
      Joi.string().required().messages({
        "any.required": "id参数缺失",
        "string.empty": "id不能为空",
      }),
      Joi.number().required().messages({
        "any.required": "id参数缺失",
        "number.empty": "id不能为空",
      }),
    ],
  },
  add() {
    return Joi.object({ ...this.name });
  },
  edit() {
    return Joi.object({ ...this.id, ...this.name });
  },
  del() {
    return Joi.object({ ...this.id });
  },
};
const specGroupSchema = {
  name: {
    name: Joi.string().max(10).required().messages({
      "any.required": "name参数缺失",
      "string.empty": "name不能为空",
      "string.max": "用户名太长",
    }),
  },
  category_id: {
    category_id: Joi.number().required().messages({
      "any.required": "category_id参数缺失",
      "number.empty": "category_id不能为空",
    }),
  },
  id: {
    id: [
      Joi.string().required().messages({
        "any.required": "id参数缺失",
        "string.empty": "id不能为空",
      }),
      Joi.number().required().messages({
        "any.required": "id参数缺失",
        "number.empty": "id不能为空",
      }),
    ],
  },
  add() {
    return Joi.object({ ...this.name, ...this.category_id });
  },
  edit() {
    return Joi.object({ ...this.id, ...this.name });
  },
  del() {
    return Joi.object({ ...this.id });
  },
};
const specSchema = Joi.object({
  name: Joi.string().max(10).required().error(new Error("name参数有误")),
  type_id: Joi.number().required().error(new Error("type_id参数有误")),
});
const specListSchema = Joi.object({
  generic: Joi.number().valid(0, 1).error(new Error("generic参数有误")),
  typeId: Joi.number().error(new Error("type_id参数有误")),
});
const spuSchema = Joi.object({
  spu: Joi.object().keys({
    spu_sn: Joi.string().required().messages({
      "any.required": "spu_sn商品编号参数缺失",
      "string.empty": "spu_sn商品编号不能为空",
    }),
    name: Joi.string().max(30).required().messages({
      "any.required": "name参数缺失",
      "string.empty": "name不能为空",
      "string.max": "用户名太长",
    }),
    category_id: Joi.number().required().messages({
      "any.required": "category_id参数缺失",
      "number.empty": "category_id不能为空",
    }),
    brand_id: Joi.number().required().messages({
      "any.required": "brand_id参数缺失",
      "number.empty": "brand_id不能为空",
    }),
    price: Joi.number().required().messages({
      "any.required": "price参数缺失",
      "number.empty": "price不能为空",
    }),
  }),
  detail: Joi.object().keys({
    generic_spec: Joi.object()
      .required()
      .error(new Error("generic_spec参数有误")),
    special_spec: Joi.object()
      .required()
      .error(new Error("special_spec参数有误")),
    description: Joi.string()
      .required()
      .error(new Error("description参数有误")),
  }),
  item: Joi.array().items(
    Joi.object().keys({
      name: Joi.string().required().error(new Error("name参数有误")),
      price: Joi.number().required().error(new Error("price参数有误")),
      indexs: Joi.string().required().error(new Error("indexs参数有误")),
      own_spec: Joi.object().required().error(new Error("own_spec参数有误")),
    })
  ),
});
const brandNewSchema = Joi.object({
  name: Joi.required().messages({
    "any.required": "name参数缺失",
    "string.empty": "name不能为空",
    "string.max": "用户名太长",
  }),
});
const userSchema = Joi.object({
  username: Joi.string().min(2).max(16).required().messages({
    "string.empty": "用户名不能为空",
    "string.min": "用户名太短",
    "string.max": "用户名太长",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "邮箱格式不对",
    "string.empty": "邮箱必填",
  }),
  sex: Joi.number().valid(0, 1).required().messages({
    "any.only": "参数不对",
    "any.required": "性别必填",
  }),
});
const loginSchema = Joi.object({
  username: Joi.string().min(2).max(16).required().messages({
    "string.empty": "用户名不能为空",
    "string.min": "用户名太短",
    "string.max": "用户名太长",
  }),
});
const typeSchema = Joi.object({
  name: Joi.string().min(2).max(10).required().error(new Error("name参数有误")),
});
const isShowSchema = Joi.object({
  modelId: Joi.number()
    .valid(...allModelIds)
    .required()
    .error(new Error("modelId参数有误")),
  showTag: Joi.boolean().error(new Error("showTag参数有误")),
});
const likeSchema = Joi.object({
  uid: Joi.number().required().messages({
    "any.required": "用户id必须",
    "number.base": "参数不对",
  }),
  artId: Joi.number().required().messages({
    "any.required": "参数id必须",
    "number.base": "参数不对",
  }),
  type: Joi.number().required().messages({
    "any.required": "type类型必须",
    "number.base": "参数不对",
  }),
});
module.exports = {
  ParamValitator,
  typeSchema,
  commonIdSchema,
  spuSchema,
  specGroupSchema,
  specSchema,
  brandSchema,
  categorySchema,
  userSchema,
  loginSchema,
  likeSchema,
  isShowSchema,
  deleteCommmonSchema,
  specListSchema
};
