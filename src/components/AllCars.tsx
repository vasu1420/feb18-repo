import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "./Navbar";

export default function AllCars() {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/arun-show-room/car/get/all")
      .then((res) => {
        setCarData(res.data);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ImgUrl</th>

            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((eachRec) => (
            <tr>
              <th>
                <img src={eachRec.imgUrl} />
              </th>

              <th>{eachRec.brand}</th>
              <td>{eachRec.model}</td>
              <td>{eachRec.year}</td>
              <td>{eachRec.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}