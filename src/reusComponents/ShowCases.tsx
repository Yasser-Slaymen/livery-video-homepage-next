import showStyles from "../styles/ShowCases.module.css";
import data from "../utils/data.json";
import ShowIcon_a from "../icons/Vector.svg";
import ShowIcon_b from "../images/Headericon_arrowRight.png";

interface DataType {
  id: number;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
  icon7?: string;
  icon8?: string;
  icon9?: string;
}
const dataItem: DataType = data[14];

export default function ShowCases() {
  return (
    <div>
      <section className={showStyles.ShowCases_Section} key={dataItem.id}>
        <a
          className={showStyles.ShowCases_LinkTitle}
          href="https://www.liveryvideo.com/showcase/"
        >
          SHOWCASES
        </a>

        <section className={showStyles.ShowCases_ContainerMain}>
          <h3>INDUSTRY</h3>

          <section className={showStyles.ShowCases_Content}>
            {/*articl_1  */}
            <article className={showStyles.ShowCases_article}>
              {/* img1 */}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_1}
                  src={dataItem.icon1}
                  alt="icon"
                />
                <a href="/">
                  E-commerce
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
              {/* img2 */}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_2}
                  src={dataItem.icon2}
                  alt="icon"
                />
                <a href="/">
                  Live gameshow & trivia
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
              {/* img3 */}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_3}
                  src={dataItem.icon3}
                  alt="icon"
                />
                <a href="/">
                  Business events
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
            </article>

            {/*articl_2  */}
            <article className={showStyles.ShowCases_article}>
              {/* img 4*/}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_4}
                  src={dataItem.icon4}
                  alt="icon"
                />
                <a href="/">
                  Live entertainment & events
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
              {/* img5 */}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_5}
                  src={dataItem.icon5}
                  alt="icon"
                />
                <a href="/">
                  OTT & social video
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
              {/* img 6*/}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_6}
                  src={dataItem.icon6}
                  alt="icon"
                />
                <a href="/">
                  News & finance
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
            </article>

            {/*articl_3  */}
            <article className={showStyles.ShowCases_article}>
              {/* img 7*/}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_7}
                  src={dataItem.icon7}
                  alt="icon"
                />
                <a href="/">
                  Betting & gambling
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
              {/* img8 */}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_8}
                  src={dataItem.icon8}
                  alt="icon"
                />
                <a href="/">
                  Sports & e-Sports
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
              {/* img 9*/}
              <figure className={showStyles.ShowCases_imgsContainer}>
                <img
                  className={showStyles.ShowCases_img_9}
                  src={dataItem.icon9}
                  alt="icon"
                />
                <a href="/">
                  Learning & development
                  <img
                    className={showStyles.ShowCases_ShowIconA}
                    src={ShowIcon_a}
                    alt="icon"
                  />
                  <img
                    className={showStyles.ShowCases_ShowIconB}
                    src={ShowIcon_b}
                    alt="icon"
                  />
                </a>
              </figure>
            </article>
          </section>
        </section>
      </section>
    </div>
  );
}
