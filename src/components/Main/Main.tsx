import React from "react";
import styles from "./Main.module.css";
import classNames from "classnames";

const Main = () => {
  return (
    <div className={styles.mainCenterblock}>
      <div className={styles.centerblockSearch} >
        <svg className={styles.searchSvg}>
          <use xlinkHref="icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles.btnText)}>
          исполнителю
        </div>
        <div className={classNames(styles.filterButton, styles.btnText)}>году выпуска</div>
        <div className={classNames(styles.filterButton, styles.btnText)}>жанру</div>
      </div>
      <div className={styles.centerblockContent}>
        <div className={styles.contentTitle}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use xlinkHref="icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.contentPlaylist}>
          <div className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
              <div className={styles.trackTitle}>
                <div className={styles.trackTitleImage}>
                  <svg className={styles.trackTitleSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div>
                  <a className={styles.trackTitleLink} href="http://">
                    Guilt <span className={styles.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={styles.trackAuthor}>
                <a className={styles.trackAuthorLink} href="http://">
                  Nero
                </a>
              </div>
              <div className={styles.trackAlbum}>
                <a className={styles.trackAlbumLink} href="http://">
                  Welcome Reality
                </a>
              </div>
              <div>
                <svg className={styles.trackTimeSvg}>
                  <use xlinkHref="icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles.trackTimeText}>4:44</span>
              </div>
            </div>
          </div>
{/* 
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Elektro <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Dynoro, Outwork, Mr. Gee
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Elektro
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    I’m Fire <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Ali Bakgor
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  I’m Fire
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Non Stop
                    <span className="track__title-span">(Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Стоункат, Psychopath
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Non Stop
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">4:12</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Run Run
                    <span className="track__title-span">(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Jaded, Will Clarke, AR/CO
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Run Run
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:54</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Eyes on Fire
                    <span className="track__title-span">(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Blue Foundation, Zeds Dead
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Eyes on Fire
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">5:20</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Mucho Bien
                    <span className="track__title-span">
                      (Hi Profile Remix)
                    </span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Mucho Bien
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:41</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    How Deep Is Your Love
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Calvin Harris, Disciples
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  How Deep Is Your Love
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Morena <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Tom Boxer
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Soundz Made in Romania
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://"></a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://"></a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text"></span>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
