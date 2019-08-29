import service from "./service";
import QS from "qs";

const commonService = {};

/*
   公共接口
*/

// 获取机构列表
commonService.getOrgList = params => {
  return service({
    method: "post",
    url: "/org/findOrgPage",
    data: QS.stringify(params)
  });
};

// 根据id查询机构名称
commonService.getOrgById = params => {
  return service({
    method: "post",
    url: "/org/findOrgByCode",
    data: QS.stringify(params)
  });
};

export default commonService;
