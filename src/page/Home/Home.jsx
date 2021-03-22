import React from "react";
import FlexLayout from "flexlayout-react";
import { useState } from "react";
import "flexlayout-react/style/light.css";
import './Home.style.scss'
import Candlestick from '../../components/Charts/Candlestick/Candlestick'
const json = {
    global: {},
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                weight: 30,
                selected: 0,
                children: [
                    {
                        type: "tab",
                        name: "Tab 1",
                        component: "tab1",
                    },
                ],
            },
            {
                type: "tabset",
                weight: 30,
                selected: 0,
                children: [
                    {
                        type: "tab",
                        name: "Tab 2",
                        component: 'tab2',
                    },
                ],
            },
            {
                type: "tabset",
                weight: 30,
                selected: 0,
                children: [
                    {
                        type: "tab",
                        name: "Tab 3",
                        component: "tab3",
                    },
                ],
            },
        ],
    },
};

const factory = (node) => {
    var component = node.getComponent();
    if (component === "tab3") {
        return (<Candlestick/>);
    }
};

function Home() {
    const [model] = useState(FlexLayout.Model.fromJson(json));

    return (
        <div className="home-app">
            <FlexLayout.Layout model={model} factory={factory} />
        </div>
    );
}

export default Home;
