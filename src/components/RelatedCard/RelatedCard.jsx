import styles from "./RelatedCard.module.scss";

import Button from "../Button/Button";

function RelatedCard({ card }) {
  const {
    image,
    name,
    description,
    originalPrice,
    finalPrice,
    discountPercentage,
    tag,
  } = card;

  return (
    <div className={styles.related}>
      <figure className={styles["related__image--container"]}>
        <img src={image} alt={name} className={styles.related__image} />
      </figure>
      <div className={styles.related__info}>
        <div className={styles.related__offer}>
          <span>{discountPercentage}% Off</span>
          <span>{tag}</span>
        </div>
        <div className={styles.related__details}>
          <strong className="strong">{name}</strong>
          <p className={styles.related__description}>{description}</p>
          <p className={styles.related__discount}>
            <strong className={styles["related__discount--finalPrice"]}>
              ${finalPrice}
            </strong>
            <span className={styles["related__discount--originalPrice"]}>
              ${originalPrice}
            </span>
            <span className={styles["related__discount--discountPercentage"]}>
              ({discountPercentage}% Off)
            </span>
          </p>
        </div>
        <Button variation="primary" type="full">
          View Deal
        </Button>
      </div>
    </div>
  );
}

export default RelatedCard;
