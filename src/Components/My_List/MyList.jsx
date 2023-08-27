import { DataState } from "../Context/Context";
import { Link } from "react-router-dom";
import NavBar from "../Main/NavBar";
import "./MyList.css";
const MyList = () => {
  const { state } = DataState();
  const product = state.cart;

  return (
    <>
      <NavBar />
      <div style={{ background: "#181818" }} className="MY-LIST-DIV">
        <h2>My List</h2>
        <div className="my-list-box">
          {product.map((item) => {
            return (
              <div className="my-list-item" key={item._id}>
                <Link to={`/${item._id}`}>
                  <img src={item.thumbnail} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyList;
