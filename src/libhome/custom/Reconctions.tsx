import {create} from "zustand";
import styles from "../../HomeStyles/custom/PricingSlider.module.css";

type State = {
  count1: number;
  count2: number;
  count3: number;
  setCount1: (count: number) => void;
  setCount2: (count: number) => void;
  setCount3: (count: number) => void;
};

const useStore = create<State>((set) => ({
  count1: 1,
  count2: 1/2,
  count3: 300,
  setCount1: (count: number) => set({ count1: count }),
  setCount2: (count: number) => set({ count2: count }),
  setCount3: (count: number) => set({ count3: count }),
}));

function CounterDisplay() {
  const count1 = useStore((state) => state.count1);
  const count2 = useStore((state) => state.count2);
  const count3 = useStore((state) => state.count3);
  const setCount1 = useStore((state) => state.setCount1);
  const setCount2 = useStore((state) => state.setCount2);
  const setCount3 = useStore((state) => state.setCount3);
  return (
    <article className={styles.Pricing_Slider}>
      <section>
        <p className={styles.PricingSlider_Number}>{count1}</p>
        <p className={styles.PricingSlider_Discription}>sessions a month</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          min={3}
          max={25}
          value={count1}
          onChange={(e) => setCount1(Number(e.target.value))}
        />
      </section>
      <section>
        <p className={styles.PricingSlider_Number}>{count2}</p>
        <p className={styles.PricingSlider_Discription}>hours per session</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          step={1}
          min={1/2}
          max={45}
          value={count2}
          onChange={(e) => setCount2(Number(e.target.value))}
        />
      </section>
      <section>
        <p className={styles.PricingSlider_Number}>{count3}</p>
        <p className={styles.PricingSlider_Discription}>users per session</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          step={1}
          min={300}
          max={100000}
          value={count3}
          onChange={(e) => setCount3(Number(e.target.value))}
        />
      </section>
    </article>
  );
}

// Second compnent
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
        <p className={styles.PricingSlider_Number}>{count1}</p>
        <p className={styles.PricingSlider_Discription}>sessions a month</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          min={3}
          max={25}
          value={count1}
          onChange={(e) => setCount1(Number(e.target.value))}
        />
      </section>
      <section>
        <p className={styles.PricingSlider_Number}>{count2}</p>
        <p className={styles.PricingSlider_Discription}>hours per session</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          step={1}
          min={1/2}
          max={45}
          value={count2}
          onChange={(e) => setCount2(Number(e.target.value))}
        />
      </section>
      <section>
        <p className={styles.PricingSlider_Number}>{count3}</p>
        <p className={styles.PricingSlider_Discription}>users per session</p>
        <input
          className={styles.PricingSlider_Range}
          type="range"
          step={1}
          min={300}
          max={100000}
          value={count3}
          onChange={(e) => setCount3(Number(e.target.value))}
        />
      </section>
    </article>
  );
}

export { CounterDisplay, CounterButton };

