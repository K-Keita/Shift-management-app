export const GROUP_IN = "GROUP_IN";
export const groupInAction = (groupState) => {
  return {
    type: "GROUP_IN",
    payload: {
      groupIcon: groupState.groupIcon,
      groupId: groupState.groupId,
      groupName: groupState.groupName,
      groupPassword: groupState.groupPassword,
      groupMembers: groupState.groupMembers,
    },
  };
};

export const GROUP_OUT = "GROUP_OUT";
export const groupOutAction = () => {
  return {
    type: "GROUP_OUT",
    payload: {
      groupIcon: "",
      groupId: "",
      groupName: "",
      groupPassword: "",
      groupMembers: "",
    },
  };
};

export const FETCH_SHIFTLIST = "FETCH_SHIFTLIST";
export const fetchShiftsListAction = (shiftState) => {
  return {
    type: "FETCH_SHIFTLIST",
    payload: {
      prevShiftList: shiftState.prevShiftList,
      shiftList: shiftState.shiftList,
    },
  };
};
