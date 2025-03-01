import { Product } from "@/features/types/types";
import styles from "./product-card.module.css";
import StarIcon from "@/icons/star-icon";
import { percentageAmount } from "@/components/utils/utils";
import { Button } from "@/components/ui/button/button";
import ShoppingCart from "@/icons/shopping-cart";
import HeartIcon from "@/icons/heart-icon";
import { Link } from "react-router";

export default function ProductCard({
  image,
  title,
  discount,
  price,
  id,
}: Pick<Product, "image" | "title" | "price" | "discount" | "id">) {
  return (
    <div className={styles.card}>
      {discount && (
        <div className={styles.discountPercentage}>-{discount}%</div>
      )}

      <Link className={styles.thumbnail} to={`/products/${id}`}>
        <img src={image} alt={`${title} picture`} height={190} />
      </Link>
      <div className={styles.gradientLine} />
      <h4>
        <Link to={`/products/${id}`}>{title}</Link>
      </h4>
      <div className={styles.footer}>
        <div className={styles.price}>
          {discount && (
            <span className={styles.discounted}>
              $ {(price - percentageAmount(discount, price)).toFixed(2)}
            </span>
          )}
          <span>$ {price.toFixed(2)}</span>
        </div>
        <div className={styles.rate}>
          <StarIcon />
          4.9
        </div>
      </div>
      <div className={styles.actionButtons}>
        <Button shape="outlined" variant="primary" className={styles.addToCart}>
          <ShoppingCart />
          Add to cart
        </Button>
        <HeartIcon className={styles.likeButton} />
      </div>
    </div>
  );
}
