import service from "./service";
import QS from "qs";

const abnormalDataService = {};

/*
    异常数据
*/

// 获取民警排班信息
abnormalDataService.getSchedulingMsg = params => {
  return service({
    method: "post",
    url: "/duty/finddutyPage",
    data: QS.stringify(params)
  });
};

// 获取处理违法列表
abnormalDataService.getIllegalList = params => {
  return service({
    method: "post",
    url: "/duty/finEmforCementPage",
    data: QS.stringify(params)
  });
};

// 获取处理事故列表
abnormalDataService.getAccidentList = params => {
  return service({
    method: "post",
    url: "/accident/finaccidentPage",
    data: QS.stringify(params)
  });
};

// 获取处理核查检录列表
abnormalDataService.getCheckList = params => {
  return service({
    method: "post",
    url: "/inspect/fininspectPage",
    data: QS.stringify(params)
  });
};

// 获取异常处理人列表
abnormalDataService.getHandlePersonList = params => {
  return service({
    method: "post",
    url: "/tblCjgVioViolation/getycclrList",
    data: QS.stringify(params)
  });
};

// 获取异常处理详情
abnormalDataService.getHandleDetail = params => {
  return service({
    method: "post",
    url: "/tblCjgVioViolation/queryAll",
    data: QS.stringify(params)
  });
};

// 获取处理人信息
abnormalDataService.getPersonDetail = params => {
  return service({
    method: "post",
    url: "/tblCjgVioViolation/queryAllSixinone",
    data: QS.stringify(params)
  });
};

// 获取异常处理车列表
abnormalDataService.getHandleCarList = params => {
  return service({
    method: "post",
    url: "/tblCjgVioViolation/getycclcList",
    data: QS.stringify(params)
  });
};

// 获取异常免积分列表
abnormalDataService.getHandlePointsList = params => {
  return service({
    method: "post",
    url: "/tblCjgVioViolation/getycmjfList",
    data: QS.stringify(params)
  });
};

export default abnormalDataService;
