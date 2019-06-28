import service from "./service";
import QS from "qs";

const locusService = {};

/*
    轨迹监督
*/

// 获取机构列表
locusService.getOrgList = params => {
  return service({
    method: "post",
    url: "/org/findOrgPage",
    data: QS.stringify(params)
  });
};

export default locusService;
