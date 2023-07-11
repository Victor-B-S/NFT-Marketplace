import RegisterForm from "./RegisterForm";

import bgRegister from "../../images/Register/Image Placeholder.svg";

import classes from "./Register.module.css";
import ImageRC from "../UI/ImageRC";

function Register() {
  
    return (
    <div className={classes.registerGrid}>
      <ImageRC img={bgRegister}/>
      <div className={classes.registerForm}>
        <h2>Create Account</h2>
        <p>
          Welcome! enter your details and start
          <br /> creating, collecting and selling NFTs.
        </p>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
