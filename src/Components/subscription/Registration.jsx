import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlansHead from "./PlansHead";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
const Registration = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [cvv, setCVV] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const handlecardNoChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 16);
    setCardNo(numericValue);
  };
  const handlephoneNoChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setPhoneNo(numericValue);
  };
  const handleCVVChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 3);
    setCVV(numericValue);
  };
  const handleExpiryChange = (e) => {
    const { value } = e.target;
    let formattedValue = value.replace(/\D/g, "");

    if (formattedValue.length > 4) {
      // Limit the length to 4 characters
      formattedValue = formattedValue.slice(0, 4);
    }

    if (formattedValue.length >= 2) {
      const month = parseInt(formattedValue.slice(0, 2));
      formattedValue = `${Math.min(Math.max(month, 1), 12)
        .toString()
        .padStart(2, "0")}${formattedValue.slice(2)}`;
    }

    if (formattedValue.length >= 4) {
      const year = parseInt(formattedValue.slice(2));
      formattedValue = `${formattedValue.slice(0, 2)}/${Math.min(
        Math.max(year, 0),
        99
      )
        .toString()
        .padStart(2, "0")}`;
    }

    setCardExpiry(formattedValue);
  };
  const navigate = useNavigate();
  const signIn = async (e) => {
    if (
      !values.name ||
      !values.email ||
      !values.password ||
      !cardNo ||
      !phoneNo ||
      !cvv ||
      !cardExpiry
    ) {
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
        if (err.code === "auth/invalid-email") {
          setError("Enter Valid Email");
          return;
        } else if (err.code === "auth/weak-password") {
          setError("Password should be at least 6 characters ");
          return;
        }
      });
  };
  return (
    <div>
      <PlansHead />
      <div className="register-container">
        <div className="register-wraper">
          <div className="personal-detail flex">
            <h3>REGISTRATION</h3>
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
              <input
                type="text"
                id="phone"
                maxLength={10}
                value={phoneNo}
                onChange={handlephoneNoChange}
                placeholder=""
              />
            </div>{" "}
            <div className="inputBox">
              <label htmlFor="">Password:</label>
              <input
                type="text"
                name="password"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="paymet-detail flex">
            <h3>PAYMENT DETAILS</h3>
            <div className="inputBox">
              <label htmlFor="">card accepted:</label>
              <img src="./logo/card_img.png" alt="" />
            </div>
            <div className="inputBox">
              <label htmlFor="">card number:</label>
              <input
                type="text"
                id="cardInput"
                maxLength={16}
                value={cardNo}
                onChange={handlecardNoChange}
                placeholder="card number"
              />
            </div>

            <div className="inputBox">
              <label htmlFor="">exp date :</label>
              <input
                type="text"
                id="card-expiry"
                value={cardExpiry}
                onChange={handleExpiryChange}
                placeholder="MM/YY"
                maxLength="5" // Limit the input length to 7 characters (including slashes)
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">cvv :</label>
              <input
                type="text"
                id="cvvInput"
                maxLength={3}
                value={cvv}
                onChange={handleCVVChange}
                placeholder="cvv"
              />
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
