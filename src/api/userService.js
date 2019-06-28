import service from "./service";
import QS from "qs"

const userService = {};

/*
    现场执法
*/
userService.enforcementLive = params => {
  return service({
    method: "post",
    url: "/enforcement/findIllegalPage",
    data: QS.stringify(params)
  });
};
userService.enforcementLive2 = params => {
  return service({
    method: "post",
    url: "/enforcement/findAccidentInfo",
    data: QS.stringify(params)
  });
};

export default userService;
