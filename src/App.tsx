import React, { useEffect, useState } from "react";
import "./App.scss";
import "./assets/styles/Content.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { Provider } from "react-redux";
import store from "./saga/store";
import UserModalCard from "./components/UserDisplay/UserModalCard";
import { UserData } from "./@types/interfaces";
import { ConfigProvider } from "antd";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const [isModalUserVisible, setIsModalUserVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>();
  const tab: string = searchParams.get("tab") || "table";
  const page: string = searchParams.get("page") || "0";

  useEffect(() => {
    if (!page || Number(page) < 1 || Number(page) > 500) {
      navigate(`/?page=1&tab=${tab}`);
    }
  }, []);

  const changeVisibility = () => setIsModalUserVisible(!isModalUserVisible);
  const setModalUserData = (user: UserData) => setUserData(user);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "GolosUIWebRegular",
        },
      }}
    >
      <Provider store={store}>
        <div className="App">
          {userData && (
            <UserModalCard
              user={userData}
              visible={isModalUserVisible}
              onClose={changeVisibility}
            />
          )}
          <Header />
          <Content
            visible={isModalUserVisible}
            changeVisibility={changeVisibility}
            setModalUserData={setModalUserData}
          />
          <div className="footerInApp">
            <Footer />
          </div>
        </div>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
