import shops from "../styles/LiveShopping.module.css";
import data from "../utils/data.json";

interface DataType {
  id: number;
  componentName?: string;
  title?: string;
  text?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  downtext1?: string;
  downtext2?: string;
  downtext3?: string;
  img1?: string;
  img2?: string;
  img3?: string;
}
const dataItem: DataType = data[2]; // specify the expected shape of the data object

export default function LiveShopping() {
  return (
    <section className={shops.Third_Section} key={dataItem.id}>
      <section className={shops.Third_Section1}>
        <p className={shops.Section1_p1}>{dataItem.componentName}</p>
        <h2>{dataItem.title}</h2>
        <p className={shops.Section1_p2}>{dataItem.text}</p>
      </section>
      <section className={shops.Third_Section2}>
        <article className={shops.Third_Card1}>
          <img className={shops.Card1_Img1} src={dataItem.img1} alt="selected img" />
          <section className={shops.Card_Section}>
            <h3>{dataItem.heading1}</h3>
            <p>{dataItem.content1}</p>
            <div className={shops.Card_btn}>{dataItem.downtext1}</div>
          </section>
        </article>
        <article className={shops.Third_Card2}>
          <section className={shops.Card2_sect2}>
            <h3>{dataItem.heading2}</h3>
            <p>{dataItem.content2}</p>
            <div className={shops.Card_btn}>{dataItem.downtext2}</div>
          </section>

          <img className={shops.Card2_img} src={dataItem.img2} alt="img" />
        </article>
        <article className={shops.Third_Card3}>
          <img src={dataItem.img3} alt="img" />
          <section className={shops.Card3_sect3}>
            <h3>{dataItem.heading3}</h3>
            <p>{dataItem.content3}</p>
            <div className={shops.Card_btn}>{dataItem.downtext3}</div>
          </section>
        </article>
      </section>
    </section>
  );
}
