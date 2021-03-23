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
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "ma",
          },
        ],
      },
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "Tab 2",
          },
        ],
      },
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "Tab 3",
          },
        ],
      },
    ],
  },
};

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = props.data
//     this.state = { model: FlexLayout.Model.fromJson(json) };
//     this.homeRef = React.createRef();
//   }
//   factory = (node) => {
//     var name = node.getName();
//     let component = this.data.find(el=>el.name === name)
//     return component ? component.view : 'View khong ton tai'
//   };

//   onAdd = (tabName) => {
//     this.homeRef.current.addTabWithDragAndDrop(
//       "Thêm vùng hiển thị<br>(Di chuột đến khu vực cần thêm)",
//       {
//         component: "addNew",
//         name: "added",
//       },
//       null
//     );
//   };

//   render() {
//     return (
//       <div className="home-app">
//         <FlexLayout.Layout
//           model={this.state.model}
//           factory={this.factory}
//           ref={this.homeRef}
//         />
//       </div>
//     );
//   }
// }
const Home = React.forwardRef((props,ref) => {
  useImperativeHandle(ref,()=>{
    return({
      onAddLayout
    })
  },[])

  const data = props.data;
  const state = { model: FlexLayout.Model.fromJson(json) };
  const homeRef = React.createRef();

  const factory = (node) => {
    var name = node.getName();
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

export default connect(mapStateToProps,null,null, { forwardRef: true })(Home);
