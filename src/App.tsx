import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CalendarRouter from "./components/CalendarRouter";
import { store } from "./redux/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <CalendarRouter/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
