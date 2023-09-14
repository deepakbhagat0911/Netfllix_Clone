import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Dialog, Box, Typography, Button, styled } from "@mui/material";

const Component = styled(Box)`
  height: 450px;
  width: 300px;
  background: rgb(0, 0, 0);
  color: #fff;
`;
const Wraper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const InputBox = styled("input")`
  margin-top: 30px;
  padding: 7px;
  outline: none;
  border: none;
`;

const LoginDialog = ({ open, setOpen }) => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const logIn = async (e) => {
    if (!values.email || !values.password) {
      setError("Fill all Details");
      return;
    }
    setError("");
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        handleClose();
        navigate("/main");
        window.location.reload();
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setError("Invalid Email");
          return;
        } else if (err.code === "auth/wrong-password") {
          setError("Invalid Password");
          return;
        } else if (err.code === "auth/user-not-found") {
          setError("user not found");
          return;
        }
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Wraper>
          <Typography style={{ fontSize: "1.3rem", color: "#fff" }}>
            Sign In
          </Typography>
          <InputBox
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <InputBox
            type="text" // Toggle between "text" and "password"
            name="password"
            placeholder="password"
            onChange={(e) =>
              setValue((prev) => ({ ...prev, password: e.target.value }))
            }
          ></InputBox>

          <b
            style={{
              fontSize: "13px",
              color: "crimson",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            {error}
          </b>
          <button
            className="btn-header"
            style={{ marginTop: "3rem", width: "100%" }}
            onClick={logIn}
          >
            Sign In
          </button>
          <p>
            New to Netflix?
            <Link to={"/subscription"}>
              <span style={{ color: "#e50914", cursor: "pointer" }}>
                {" "}
                Join Now
              </span>
            </Link>
          </p>
        </Wraper>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
