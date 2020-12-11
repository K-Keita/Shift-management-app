import React from "react";
import {useSelector} from 'react-redux';
import { Route, Switch } from "react-router";
import {CreateGroupPage, EnterGroupPage, Home, ManagementPage, Members, MyInfomation, RegistShift, ShiftList, SignIn, SignUp} from "./templates/index";
import Auth from "./Auth";
import {getUserGroupId} from './reducks/users/selectors';

const Router = () => {
  const selector = useSelector(state => state)
  const groupId = getUserGroupId(selector);
  console.log(groupId)

  return (
    <Switch>
      <Route exact path={"/create"} component={CreateGroupPage} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signup"} component={SignUp} />
      <Auth>
        {groupId !== "" && (
          <>
            <Route exact path={"/shift"} component={ShiftList} />
            <Route exact path={"/regist"} component={RegistShift} />
            <Route exact path={"/info"} component={MyInfomation} />
            <Route exact path={"/management"} component={ManagementPage} />
            <Route exact path={"/list"} component={Members} />
            <Route exact path={"(/)?"} component={Home} />
          </>
        )}
        <Route exact path={"/enter"} component={EnterGroupPage} />
      </Auth>
    </Switch>
  );
};

export default Router;