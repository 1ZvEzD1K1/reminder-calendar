import { Layout } from "antd";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CalendarRouter from "./components/CalendarRouter";
import Navbar from "./components/Navbar";
import store, { persistor } from "./redux/store";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Layout.Content>
              <CalendarRouter />
            </Layout.Content>
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
