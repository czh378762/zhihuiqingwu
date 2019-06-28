import service from "./service";
import QS from "qs";

const enforcementService = {};

/*
    执勤执法监督
*/

// 获取违法列表
enforcementService.getIllegalList = params => {
  return service({
    method: "post",
    url: "/enforcement/findIllegalPage",
    data: QS.stringify(params)
  });
};

// 获取违法详情1
enforcementService.getIllegalDetail1 = params => {
  return service({
    method: "post",
    url: "/enforcement/findIllegalFines",
    data: QS.stringify(params)
  });
};

// 获取违法详情2
enforcementService.getIllegalDetail2 = params => {
  return service({
    method: "post",
    url: "/enforcement/findIllegalObliges",
    data: QS.stringify(params)
  });
};

// 获取事故列表
enforcementService.getAccidentList = params => {
  return service({
    method: "post",
    url: "/enforcement/findAccidentPage",
    data: QS.stringify(params)
  });
};

// 获取事故详情
enforcementService.getAccidentDetail = params => {
  return service({
    method: "post",
    url: "/enforcement/findAccidentInfo",
    data: QS.stringify(params)
  });
};

// 获取检查核录列表
enforcementService.getCheckList = params => {
  return service({
    method: "post",
    url: "/enforcement/findKkjc",
    data: QS.stringify(params)
  });
};

export default enforcementService;
