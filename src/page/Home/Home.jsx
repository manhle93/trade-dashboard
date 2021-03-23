import React, { useImperativeHandle } from "react";
import FlexLayout from "flexlayout-react";
import "flexlayout-react/style/light.css";
import "./Home.style.scss";
import { createStructuredSelector } from "reselect";
import { selectLayoutComponents } from "../../redux/layout/layout.selector";
import { connect } from "react-redux";
var json = {
  global: {},
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: 'row',
        weight: 50,
        children: [
          {
            type: 'tabset',
            weight: 50,
            selected: 0,
            children: [
              {
                type: 'tab',
                name: 'Đồ thị nến',
              },
            ]
          },
          {
            type: 'tabset',
            weight: 50,
            selected: 0,
            children: [
              {
                type: 'tab',
                name: 'Đồ thị vùng',
              }
            ]
          }
        ]
      },

      {
        type: 'row',
        weight: 50,
        children: [
          {
            type: 'tabset',
            weight: 50,
            selected: 0,
            children: [
              {
                type: 'tab',
                name: 'FI',
              },
            ]
          },
          {
            type: 'tabset',
            weight: 50,
            selected: 0,
            children: [
              {
                type: 'tab',
                name: 'grid 77',
              }
            ]
          }
        ]
      },

    ],
  },
};

const Home = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return ({
      onAddLayout
    })
  }, [])

  const data = props.data;
  const state = { model: FlexLayout.Model.fromJson(json) };
  const homeRef = React.createRef();

  const factory = (node) => {
    console.log(node)
    var name = node.getName();
    console.log(name)
    let component = data.find((el) => el.name === name);
    return component ? component.component : "View khong ton tai";
  };

  const onAddLayout = (tabName) => {
    homeRef.current.addTabWithDragAndDrop(
      "Thêm vùng hiển thị<br>(Di chuột đến khu vực cần thêm)",
      {
        name: tabName,
      },
      null
    );
  };

  return (
    <div className="home-app">
      <FlexLayout.Layout model={state.model} factory={factory} ref={homeRef} />
    </div>
  );
});

const mapStateToProps = createStructuredSelector({
  data: selectLayoutComponents,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(Home);
