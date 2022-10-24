import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="app">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="7878978998789"
            title="Harry Potter-The Philosphers Stone part one of the Harry Potter series
          written by author J K Rownling"
            price={29}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSD2c1bz9
          x3ogunbqj43GkdLCC7aDSgy0-q70hXjrZZARV4o_pcpzRmX1_BfgLafN9WRB3XoQKRcySGwg
          hSzWWck6QnYmwobPbtk3vA1jAA6jn9x70VUsZr&usqp=CAY"
            rating={5}
          />
          <Product
            id="97878789"
            title="Apple - iphone 14 pro"
            price={29}
            image="https://media.wired.com/photos/631a469e40fe1e8870aa39c8/master/w_2560%2Cc_limit/How-to-Preorder-iPhone-14-and-iPhone-14-Pro-Gear.png"
            rating={5}
          />
          {/*Product*/}
        </div>
        <div className="home_row">
          <Product
            id="7893247823479"
            title="Harry Potter-The Philosphers Stone part one of the Harry Potter series
          written by author J K Rownling"
            price={29}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSD2c1bz9
          x3ogunbqj43GkdLCC7aDSgy0-q70hXjrZZARV4o_pcpzRmX1_BfgLafN9WRB3XoQKRcySGwg
          hSzWWck6QnYmwobPbtk3vA1jAA6jn9x70VUsZr&usqp=CAY"
            rating={5}
          />
          <Product
            id="782347837924"
            title="Harry Potter-The Philosphers Stone part one of the Harry Potter series
          written by author J K Rownling"
            price={29}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSD2c1bz9
          x3ogunbqj43GkdLCC7aDSgy0-q70hXjrZZARV4o_pcpzRmX1_BfgLafN9WRB3XoQKRcySGwg
          hSzWWck6QnYmwobPbtk3vA1jAA6jn9x70VUsZr&usqp=CAY"
            rating={5}
          />
          <Product
            id="6734678324"
            title="Harry Potter-The Philosphers Stone part one of the Harry Potter series
          written by author J K Rownling"
            price={29}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSD2c1bz9
          x3ogunbqj43GkdLCC7aDSgy0-q70hXjrZZARV4o_pcpzRmX1_BfgLafN9WRB3XoQKRcySGwg
          hSzWWck6QnYmwobPbtk3vA1jAA6jn9x70VUsZr&usqp=CAY"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="62345634"
            title="Harry Potter-The Philosphers Stone part one of the Harry Potter series
          written by author J K Rownling"
            price={29}
            image="https://toshibatv-in.com/wp-content/uploads/2020/08/TO-L50-WB-AD-02.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
