import { Layout } from "antd";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CalendarRouter from "./components/CalendarRouter";
import Navbar from "./components/Navbar";
import { store } from "./redux/store";
import "./App.css"

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Layout.Content>
            <CalendarRouter />
          </Layout.Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
