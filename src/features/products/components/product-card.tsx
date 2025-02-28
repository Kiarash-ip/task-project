import { Product } from "@/features/types/types";
import styles from "./product-card.module.css";
import StarIcon from "@/icons/star-icon";

export default function ProductCard({
  image,
  title,
  discount,
  price,
}: Pick<Product, "image" | "title" | "price" | "discount">) {
  return (
    <div className={styles.card}>
      <div className={styles.discountPercentage}>-12%</div>
      <div className={styles.thumbnail}>
        <img src={image} alt={`${title} picture`} height={190} />
      </div>
      <div className={styles.gradientLine} />
      <h4>{title}</h4>
      <div className={styles.footer}>
        <div className={styles.price}>
          <span>$ {price.toFixed(2)}</span>
          <span>$ {(price - discount).toFixed(2)}</span>
        </div>
        <div className={styles.rate}>
          <StarIcon />
          4.9
        </div>
      </div>
    </div>
  );
}
