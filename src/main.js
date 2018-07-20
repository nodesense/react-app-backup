// To support, async and await keywords, that includes
//regenerator runtime, not supported by browsers yet
import "babel-polyfill";

import React from "react";

import ReactDOM from "react-dom";

import {Provider} from "react-redux";

import Routes from "./app/Routes";

import store from "./app/store";

ReactDOM.render(<Provider store={store}>
        <Routes >
       </Routes>
       </Provider>
       ,
       document.getElementById("root"));
