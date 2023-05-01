import useStore from "./store";
import styles from "./PricingSlider.module.css";

function CounterButton() {
  const count1 = useStore((state) => state.count1);
  const count2 = useStore((state) => state.count2);
  const count3 = useStore((state) => state.count3);
  const setCount1 = useStore((state) => state.setCount1);
  const setCount2 = useStore((state) => state.setCount2);
  const setCount3 = useStore((state) => state.setCount3);

  return (
    <article className={styles.Pricing_Slider}>
      <section>
        {/* <p className={styles.PricingSlider_Number}>{count1}</p> */}
        <p className={styles.PricingSlider_Number}>
          {count1 === 50 ? "50+" : count1}
        </p>
        <p className={styles.PricingSlider_Discription}>sessions a month</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          min={1}
          max={50}
          value={count1}
          aria-label="range"
          onChange={(e) => setCount1(Number(e.target.value))}
        />
      </section>
      <section>
        {/* <p className={styles.PricingSlider_Number}>{count2}</p> */}
        <p className={styles.PricingSlider_Number}>
          {count2 === 1 ? "1/2" : count2 === 24 ? "24+" : count2}
        </p>
        <p className={styles.PricingSlider_Discription}>hours per session</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          step={0.5}
          min={1}
          max={24}
          value={count2}
          aria-label="range"
          onChange={(e) => setCount2(Number(e.target.value))}
        />
      </section>
      <section>
        {/* <p className={styles.PricingSlider_Number}>{count3}</p> */}
        <p className={styles.PricingSlider_Number}>
          {count3 === 100
            ? "100"
            : count3 === 100000
            ? "100,000+"
            : formatNumberWithCommas(count3)}
        </p>
        <p className={styles.PricingSlider_Discription}>users per session</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          step={1}
          min={100}
          max={100000}
          value={count3}
          aria-label="range"
          onChange={(e) => setCount3(Number(e.target.value))}
        />
      </section>
    </article>
  );
}
export { CounterButton };
function formatNumberWithCommas(number: number) {
  if (number >= 1000) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return number.toString();
  }
}
