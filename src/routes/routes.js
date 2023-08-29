import Home from "./HOME/Home";
import HomePage from "./HOMEPAGE/HomePage";
import LoginPage from "./HOMEPAGE/LoginPage";
import SignUpPage from "./HOMEPAGE/SignUpPage";
import MyPage from "./MYPAGE/MyPage";
import Search from "./SEARCH/Search";
import DiaryWrite from "../components/diary/DiaryWrite";
import DiaryView from "../components/diary/DiaryView";
import UserInfoPage from "./MYPAGE/UserInfoPage/UserInfoPage"; 
import ProfilePage from "./MYPAGE/UserInfoPage/ProfilePage/ProfilePage";
import WithdrawPage from "./MYPAGE/UserInfoPage/WithdrawPage/WithdrawPage"

export const ROUTE = {
  HOMEPAGE: {
    path: "/",
    link: "/",
    element: HomePage,
  },
  HOME: {
    path: "/home",
    link: "/home",
    element: Home,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: LoginPage,
  },
  SIGNUP: {
    path: "/signup",
    link: "/signup",
    element: SignUpPage,
  },
  SEARCH: {
    path: "/search",
    link: "/search",
    element: Search,
  },
  MYPAGE: {
    path: "/mypage",
    link: "/mypage",
    element: MyPage,
  },
  DIARYWRITE: {
    path: "/DiaryWrite",
    link: "/DiaryWrite",
    element: DiaryWrite,
  },
  DIARYVIEW: {
    path: "/DiaryView",
    link: "/DiaryView",
    element: DiaryView,
  },
  USERINFO : {
    path: "/mypage/userinfo",
    link: "/mypage/userinfo",
    element: UserInfoPage,
  },
  PROFILE: {
    path: "/mypage/userinfo/profile",
    link: "/mypage/userinfo//profile",
    element: ProfilePage,
  },
  WITHDRAW: {
    path: "/mypage/userinfo/withdraw",
    link: "/mypage/userinfo/withdraw",
    element: WithdrawPage,
  }
};

export const ROUTE_ARR = Object.values(ROUTE);
