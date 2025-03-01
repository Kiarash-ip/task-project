import useProduct from "@/features/products/hooks/useProduct";
import { useOutletContext, useParams } from "react-router";

import styles from "./product-detail.module.css";
import Loading from "@/components/loading/loading";
import clsx from "clsx";
import StarIcon from "@/icons/star-icon";
import DiscountPriceIcon from "@/icons/discount-price-icon";
import { Button } from "@/components/ui/button/button";
import Tabs from "@/components/ui/tabs/tabs";
import { useEffect, useState } from "react";

const TABS = [
  {
    id: 0,
    label: "Technical Details",
  },
  {
    id: 1,
    label: "Similar Products",
  },
  {
    id: 2,
    label: "Comments",
  },
];

export default function ProductDetail() {
  const [tab, setTab] = useState(TABS[0].id);
  const { id } = useParams();
  const { data, isLoading } = useProduct(id);
  const setTitle = useOutletContext();

  useEffect(() => {
    // @ts-ignore
    if (data) setTitle(data.category);
    // @ts-ignore
    else setTitle(" ");
  }, [JSON.stringify(data)]);

  function onChange(id: number) {
    setTab(id);
  }

  if (isLoading) {
    return (
      <div className={clsx("full-width", styles.loadingContainer)}>
        <Loading />
      </div>
    );
  }

  if (data)
    return (
      <>
        <div className={styles.thumbnailContainer}>
          <img src={data.image} alt={`${data.title} picture`} height={338} />
        </div>
        <div className={styles.productSummary}>
          <h1>{data.title}</h1>
          <div className={styles.rate}>
            <StarIcon />
            4.9
          </div>
          <div className={styles.summary}>
            <span>Brand</span>
            <span>{data.brand}</span>
            <span>Model Name </span>
            <span>{data.model}</span>
            <span>Color</span>
            <span>{data.color}</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.pricing}>
            <span>$ {data.price.toFixed(2)}</span>
            <div className={styles.discount}>
              <DiscountPriceIcon />
              <span>-{data.discount}%</span>
            </div>
          </div>
          <Button variant="primary" shape="solid" className={styles.button}>
            Buy Now
          </Button>
          <Button variant="primary" shape="outlined" className={styles.button}>
            Add to cart
          </Button>
        </div>
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <Tabs>
              {TABS.map((tabItem) => (
                <Tabs.TabItem
                  key={tabItem.id}
                  id={tabItem.id}
                  label={tabItem.label}
                  isActive={tab === tabItem.id}
                  onChange={onChange}
                />
              ))}
            </Tabs>
          </div>
          <div className={styles.tabContent}>
            {tab === TABS[0].id && (
              <div className={styles.technicalTab}>
                <h4>Technical Details</h4>
                <div className={styles.details}>
                  <span>Display</span>
                  <span>
                    13.3-inch (diagonal) LED-backlit display with IPS technology
                  </span>
                  <span>Graphics</span>
                  <span>Apple 10-core GPU</span>
                  <span>Processor</span>
                  <span>Apple M2 chip</span>
                </div>
              </div>
            )}
            {tab === TABS[1].id && (
              <div className={styles.technicalTab}>
                <h4>Similar Products</h4>
                <p className={styles.emptyText}>No data available!</p>
              </div>
            )}
            {tab === TABS[2].id && (
              <div className={styles.technicalTab}>
                <h4>Comments</h4>
                <p className={styles.emptyText}>No data available!</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
}
