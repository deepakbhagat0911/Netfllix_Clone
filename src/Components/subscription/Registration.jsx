import { useState, useEffect } from "react";
import PlansHead from "./PlansHead";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
const Registration = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signIn = async (e) => {
    if (!values.name || !values.email || !values.password) {
      setError("Fill all Details");
      return;
    }
    setError("");

    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
        alert("Account registered successfully. Please login here");
      })
      .catch((err) => {
        setError(err.message);
        console.log("error-", err.message);
      });
  };
  return (
    <div>
      <PlansHead />
      <div className="register-container">
        <div className="register-wraper">
          <div className="personal-detail flex">
            <h3>Register</h3>
            <div className="inputBox">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>{" "}
            <div className="inputBox">
              <label htmlFor="">Phone:</label>
              <input type="number" name="phone" id="" />
            </div>{" "}
            <div className="inputBox">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="paymet-detail flex">
            <h3>Payment</h3>
            <div className="inputBox">
              <label htmlFor="">Card Accepted:</label>
              <img src="./logo/card_img.png" alt="" />
            </div>
            <div className="inputBox">
              <label htmlFor="">Card No:</label>
              <input type="number" maxLength={16} />
            </div>
            <div className="inputBox">
              <label htmlFor="">Cvv :</label>
              <input type="number" maxLength={3} />
            </div>
            <div className="inputBox">
              <label htmlFor="">Exp :</label>
              <input type="month" name="" id="" />
            </div>
          </div>
        </div>
        <div
          className="error-massage"
          style={{ textAlign: "center", paddingBottom: "5px" }}
        >
          <b
            style={{
              fontSize: "13px",
              color: "crimson",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {error}
          </b>
        </div>

        <div className="payBtn">
          <button onClick={signIn}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
