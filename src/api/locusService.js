import service from "./service";
import QS from "qs";

const locusService = {};

/*
    轨迹监督
*/

// 获取轨迹列表
locusService.getLocusList = params => {
  return service({
    method: "post",
    url: "/tblPoliceCarIllegalInfo/getWfjcByTimeCount",
    data: QS.stringify(params)
  });
};

// 获取轨迹详情
locusService.getLocusDetail = params => {
  return service({
    method: "post",
    url: "/tblPoliceCarIllegalInfo/getWfjcByIdTime",
    data: QS.stringify(params)
  });
};

// 获取实时列表
locusService.getCurrentList = params => {
  return service({
    method: "post",
    url: "/tblPoliceCarIllegalInfo/getWfjcRealTime",
    data: QS.stringify(params)
  });
};

// 获取公里桩
locusService.getPiles = params => {
  return service({
    method: "post",
    url: "/tdlGpsJc/getglz",
    data: QS.stringify(params)
  });
};

// 导出
locusService.toExport = params => {
  return service({
    method: "post",
    url: "/tblPoliceCarIllegalInfo/export",
    data: QS.stringify(params)
  });
};

export default locusService;
