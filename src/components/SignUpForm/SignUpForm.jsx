import styles from "./SignUpForm.module.scss";

function SignUpForm() {
  return (
    <form>
      <div className={styles.signup}>
        <input type="text" required className={styles.signup__input} />
        <button className={styles.signup__btn}>Sign Up</button>
      </div>
    </form>
  );
}

export default SignUpForm;
