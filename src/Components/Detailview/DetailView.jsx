import { useState, useEffect } from "react";
import "./DetailView.css";
import { useParams } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DataState } from "../Context/Context";
import NavBar from "../Main/NavBar";
import { Link } from "react-router-dom";
const DetailView = () => {
  const { state, dispatch } = DataState();

  const { id } = useParams();
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    (async () => {
      const headers = {
        projectId: "f104bi07c490",
      };
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
          {
            headers,
          }
        );
        const data = await res.json();
        setproductData(data.data);
      } catch (e) {
        return;
      }
    })();
  }, [id]);
  if (!productData.keywords) {
    return;
  }
  console.log(productData);
  return (
    <>
      <NavBar />
      <div className="Detail">
        <div className="detail-box">
          <div className="detail-left">
            <img src={productData.thumbnail} alt="" />
          </div>
          <div className="detail-right">
            <div className="detail-content">
              <div className="detail-title">
                <h3>{productData.title}</h3>
              </div>
              <div className="detail-top">
                <span>{productData.type}</span>
                <span className="span-bar">|</span>
                <span>{productData.director}</span>
                <span className="span-bar">|</span>
                <span>{productData.keywords[0]}</span>
              </div>
              <div className="detail-disc">
                <p>{productData.description}</p>
              </div>
              <div className="detailBtn">
                <Link to={`/video/${productData._id}`}>
                  <div className="detail-Btn play">
                    <PlayArrowIcon />
                    <button>Play</button>
                  </div>
                </Link>
                {state.cart.some((pro) => pro._id === productData._id) ? (
                  <div
                    className="detail-Btn MyListBtn"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_TO_LIST",
                        payload: productData,
                      })
                    }
                  >
                    <RemoveIcon />
                    <button>My List</button>
                  </div>
                ) : (
                  <div
                    className="detail-Btn MyListBtn"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_LIST", payload: productData })
                    }
                  >
                    <AddIcon />
                    <button>My List</button>
                  </div>
                )}
              </div>
              <div className="detail-cast">
                <span style={{ color: "#b5b5b5" }}>Starring:</span>
                <span className="span-bar"></span>

                {productData.cast.map((c) => {
                  return (
                    <>
                      <span>{c},</span>
                      <span className="span-bar"></span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailView;
