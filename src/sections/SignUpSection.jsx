import SignUpForm from "../components/SignUpForm/SignUpForm";
import styles from "./SignUpSection.module.scss";

function SignUpSection() {
  return (
    <section id="signup-section" className="section">
      <div className={styles.signup}>
        <h3 className="tertiary-heading">
          Sign up and get exclusive special deals
        </h3>

        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUpSection;
