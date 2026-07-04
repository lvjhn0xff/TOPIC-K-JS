import m from "mithril" 
import "./style.scss"

import { Home } from "./pages/HomePage/HomePage";

m.route(document.body, "/", {
    "/": Home
});