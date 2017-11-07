import "babel-polyfill";

import React from "react";

import {render} from "react-dom";

import {Provider} from "react-redux";

import Routes from "./app/Routes";

import store from "./app/store";

render(<Provider store={store}>
        <Routes >
       </Routes>
       </Provider>
       ,
       document.getElementById("root"));
