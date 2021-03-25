import React, { useEffect, useState, useRef } from "react";
import "./Table2.style.scss";

const Table2 = () => {
  const [sate, setState] = useState(0);
  const data = [
    { value: Math.floor(Math.random() * 80), color: "" },
    { value: Math.floor(Math.random() * 70), color: "" },
    { value: Math.floor(Math.random() * 90), color: "" },
  ];

  const counter = useRef(data);
  useEffect(() => {
    const inter = setInterval(() => {
      let value1 = Math.floor(Math.random() * 90);
      let value2 = Math.floor(Math.random() * 80);
      let value3 = Math.floor(Math.random() * 70);
      let newData = [
        {
          value: value1,
          color: value1 >= counter.current[0].value ? "#28B463" : "#E74C3C",
        },
        {
          value: value2,
          color: value2 >= counter.current[1].value ? "#28B463" : "#E74C3C",
        },
        {
          value: value3,
          color: value3 >= counter.current[2].value ? "#28B463" : "#E74C3C",
        },
      ];
      counter.current = newData;
      setState(value1);
    }, 2000);
    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <div className="table2">
      <table className="customer">
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Alfreds</td>
          <td>Maria </td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds </td>
          <td>Christina </td>
          <td style={{ backgroundColor: counter.current[0].color }}>
            {counter.current[0].value}
          </td>
        </tr>
        <tr>
          <td>Centro </td>
          <td style={{ backgroundColor: counter.current[1].color }}>
            {counter.current[1].value}
          </td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td style={{ backgroundColor: counter.current[2].color }}>
            {counter.current[2].value}
          </td>
          <td>Roland </td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island </td>
          <td>Helen </td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Königlich </td>
          <td>232</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Laughing </td>
          <td>Yoshi </td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini </td>
          <td>Giovanni </td>
          <td style={{ backgroundColor: counter.current[0].color }}>
            {counter.current[0].value}
          </td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon </td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris </td>
          <td>Marie </td>
          <td>France</td>
        </tr>
        </tbody>
      </table>
      <table className="customer">
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Alfreds </td>
          <td>Maria </td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds </td>
          <td> Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td> Moctezuma</td>
          <td>Francisco </td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td> Handel</td>
          <td> Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td> Trading</td>
          <td> Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td> Essen</td>
          <td style={{ backgroundColor: counter.current[2].color }}>
            {counter.current[2].value}
          </td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing </td>
          <td>Yoshi</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini </td>
          <td>Giovanni</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris </td>
          <td>Marie</td>
          <td style={{ backgroundColor: counter.current[0].color }}>
            {counter.current[0].value}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
