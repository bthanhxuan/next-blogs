import { Button } from '../shared/Button';
import styles from './Comments.module.css';

export default function CommentItem() {
  return (
    <li className={styles["item"]}>
      <div className={styles["comments__section"]}>
        <div className={styles["comments__section--avatar"]}>
          <a href="#">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <div className={styles["comments__section--content"]}>
          <a href="#" className={styles["comments__section--user"]}>
            John Smith
          </a>
          <p className={styles["comments__section--time"]}>2 minutes ago</p>
          <p className={styles["comments__section--text"]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            sequi odit exercitationem maiores, iusto unde quibusdam! Ullam nisi
            iste reprehenderit, expedita nam ad. Nisi hic at voluptate sint
            incidunt aut?
          </p>
          {/* <i class="ion-reply comments__section--reply"></i> */}
        </div>
      </div>
      {/* Reply Comments */}
      <ul className={styles["comments"]}>
        <li className={styles["item"]}>
          <div className={styles["comments__section"]}>
            <div className={styles["comments__section--avatar"]}>
              <a href="#">
                <img src="/assets/images/avatar3.jpg" alt="" />
              </a>
            </div>
            <div className={styles["comments__section--content"]}>
              <a href="#" className={styles["comments__section--user"]}>
                John Smith
              </a>
              <p className={styles["comments__section--time"]}>2 minutes ago</p>
              <p className={styles["comments__section--text"]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit?
              </p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
        </li>
        <li className={styles["item"]}>
          <div className={styles["comments__section"]}>
            <div className={styles["comments__section--avatar"]}>
              <a href="#">
                <img src="/assets/images/avatar4.jpg" alt="" />
              </a>
            </div>
            <div className={styles["comments__section--content"]}>
              <a href="#" className={styles["comments__section--user"]}>
                John Smith
              </a>
              <p className={styles["comments__section--time"]}>2 minutes ago</p>
              <p className={styles["comments__section--text"]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt sequi odit exercitationem ma?
              </p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
        </li>
      </ul>
      {/* Reply form */}
      <div className={styles["comments__form"]}>
        <div className={styles["comments__form--control"]}>
          <div className={styles["comments__section--avatar"]}>
            <a href="#">
              <img src="/assets/images/avatar1.jpg" alt="" />
            </a>
          </div>
          <textarea name="" defaultValue={""} />
        </div>
        <div className={styles["text-right"]}>
          <Button className="btn btn-default">Submit</Button>
        </div>
      </div>
    </li>
  );
}
