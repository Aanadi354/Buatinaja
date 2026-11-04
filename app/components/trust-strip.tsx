import styles from "./trust-strip.module.css";

type Brand = {
  name: string;
  wordmarkClass: string;
  mark: "none" | "notion" | "slack" | "loom" | "monday";
};

const brands: Brand[] = [
  { name: "PayPal", wordmarkClass: styles.paypal, mark: "none" },
  { name: "Notion", wordmarkClass: styles.notion, mark: "notion" },
  { name: "Slack", wordmarkClass: styles.slack, mark: "slack" },
  { name: "Loom", wordmarkClass: styles.loom, mark: "loom" },
  { name: "monday.com", wordmarkClass: styles.monday, mark: "monday" },
  { name: "Afterpay", wordmarkClass: styles.afterpay, mark: "none" },
];

function BrandWordmark({ brand }: { brand: Brand }) {
  return (
    <li className={styles.pill}>
      <span className={`${styles.wordmark} ${brand.wordmarkClass}`}>
        {brand.mark === "notion" && <span className={styles.notionMark} aria-hidden="true">N</span>}
        {brand.mark === "slack" && (
          <span className={styles.slackMark} aria-hidden="true">
            <i /><i /><i /><i />
          </span>
        )}
        {brand.mark === "loom" && <span className={styles.loomMark} aria-hidden="true"><i /></span>}
        {brand.mark === "monday" && (
          <span className={styles.mondayMark} aria-hidden="true">
            <i /><i /><i />
          </span>
        )}
        <span>{brand.name}</span>
      </span>
    </li>
  );
}

function BrandGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={styles.logoGroup}
      aria-label={duplicate ? undefined : "Example brand wordmarks, not client endorsements"}
      aria-hidden={duplicate || undefined}
    >
      {brands.map((brand) => <BrandWordmark brand={brand} key={brand.name} />)}
    </ul>
  );
}

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-labelledby="trust-strip-title">
      <h2 className={styles.title} id="trust-strip-title">
        Trusted By More Than <span>+10</span> Users
      </h2>
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          <BrandGroup />
          <BrandGroup duplicate />
        </div>
      </div>
    </section>
  );
}