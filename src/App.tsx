import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Header } from "./components/Header";
import bg from "./assets/images/decor/bg.svg";
import img1 from "./assets/images/decor/img1.png";
import img2 from "./assets/images/decor/img2.png";
import phone from "./assets/images/decor/phone.png";
import bg2 from "./assets/images/decor/bg2.svg";

import phone2 from "./assets/images/decor/phone2.png";
import Union2 from "./assets/images/decor/Union2.png";
import googlePlay from "./assets/images/decor/google_play.png";
import appStore from "./assets/images/decor/app_store.png";

import IPen from "./assets/images/icons/pen.svg";
import IStar from "./assets/images/icons/star.svg";
import IArrowWhite from "./assets/images/icons/arrowRightWhite.svg";
import ILove from "./assets/images/icons/like.svg";
import ITime from "./assets/images/icons/time.svg";
import ILogo2 from "./assets/images/icons/logo2.svg";
import IArrowLeft from "./assets/images/icons/arrowLeftBlack.svg";
import IArrowRight from "./assets/images/icons/arrowRightBlack.svg";
import IArrowRight2 from "./assets/images/icons/arrowRightBlack2.svg";

// import IInternet from "./assets/images/icons/internet.svg";
// import IArrowDown from "./assets/images/icons/arrowDown.svg";
// import ISetting from "./assets/images/icons/settings.svg";
// import IVisa from "./assets/images/icons/visa.svg";
// import IMenu from "./assets/images/icons/menu.svg";
// import IChart from "./assets/images/decor/chart.png";

import photo1 from "./assets/images/photos/photo1.png";
import photo2 from "./assets/images/photos/photo2.png";
import photo3 from "./assets/images/photos/photo3.png";

import classNames from "classnames";
import { Link } from "./components/UI/Link";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: IPen,
    title: "Modern & Trendy Design",
    text: "Dictas scaevola democritum cu his, magna abhorreant dissentias ut",
    active: false,
  },
  {
    icon: ITime,
    title: "Save your Time",
    text: "oporte petrioque sit et, eum ne prima nemore perfecto. Eu cibo quidam eleifend per.",
    active: true,
  },
  {
    icon: ILove,
    title: "Made with Love",
    text: "Inimicus hendrerit an duo, feugiat adipiscing everti nostrum id.",
    active: false,
  },
];

const profiles = [
  {
    image: photo1,
    name: "Roberto Rowe",
    status: "Licensed Embalmer ",
    range: 5,
    active: false,
    descripts:
      "As part of the classes I teach, I task my students with preparing a lot of presentation. To save time & reduce boredom, I occasionally have only a pick who presents the good work!",
  },
  {
    image: photo2,
    name: "Roberto Rowe",
    status: "Licensed Embalmer ",
    range: 5,
    active: true,
    descripts:
      "As part of the classes I teach, I task my students with preparing a lot of presentation. To save time & reduce boredom, I occasionally have only a pick who presents the good work!",
  },
  {
    image: photo3,
    name: "Roberto Rowe",
    status: "Licensed Embalmer ",
    range: 5,
    active: false,
    descripts:
      "As part of the classes I teach, I task my students with preparing a lot of presentation. To save time & reduce boredom, I occasionally have only a pick who presents the good work!",
  },
];

const propositions = [
  {
    title: "Starter Plan",
    price: "Free",
    during: "Forever",
    active: false,
    text: "Dictas scaevola democritum cu his magna abhorreant .",
  },
  {
    title: "Enterprise Plan",
    price: "$18.00",
    during: "Month",
    active: true,
    text: "Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.",
  },
  {
    title: "Unlimited Plan",
    price: "$42.00",
    during: "Month",
    active: false,
    text: "Dictas scaevola democritum cu his magna abhorreant .",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // Инициализируем текущий индекс состояния

  const splideRef = useRef(null); // Создаем ссылку на Splide

  const nextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("+1"); // Перемещаемся на следующий слайд
    }
  };

  const prevSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("-1"); // Перемещаемся на предыдущий слайд
    }
  };

  const handleMoved = (splide, newIndex) => {
    console.log(newIndex, splide);
    setCurrentIndex(newIndex); // Обновляем текущий индекс при перемещении слайдера
  };

  return (
    <div>
      <section className="section-1">
        <img src={bg} alt="bg" className="section-1__bg" />
        <img src={img1} alt="img-1" className="section-1__img-1" />
        <img src={img2} alt="img-2" className="section-1__img-2" />

        <div className="section-1__container">
          <Header />

          <div className="section-1__content">
            <div className="section-1__content__item">
              <div className="main-block">
                <h1 className="main-block__title">
                  <span>Introducing</span> <strong>Abstract</strong>
                  <br />
                  <span>App landing page.</span>
                </h1>

                <p className="main-block__text">
                  A perfect landing page to showcase your new App.
                </p>
              </div>
            </div>
            <div className="section-1__content__item">
              <img src={phone} alt="phone" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="section-2__shadow">
          <div className="bg-shadow"></div>
        </div>

        <div className="section-2__content">
          {cards.map((card) => (
            <div
              key={card.title}
              className={classNames("card", { "card--active": card.active })}
            >
              <div className="card__icon">
                <img src={card.icon} alt="icon" />
              </div>

              <div>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__text">{card.text}</p>
              </div>

              {card.active && <Link />}
            </div>
          ))}
        </div>
      </section>

      <section className="section-3">
        <img className="section-3__bg" src={bg2} alt="bg" />

        <div className="section-3__container">
          <div className="section-3__content">
            <div className="section-3__content__item-first">
              <div className="block-2">
                <div className="block-2__title">
                  Modern &<br /> Trendy Design
                </div>
                <div className="block-2__text">
                  Dictas scaevola democritum cu his, magna abhorreant dissentias
                  utDictas scaevola democritum cu his.
                </div>
                <Link />
              </div>
            </div>
            <div className="section-3__content__item-second">
              <img src={Union2} alt="" />
            </div>
          </div>
          <div className="section-3__content">
            <div className="section-3__content__item-third">
              <img src={phone2} alt="" />
            </div>
            <div className="section-3__content__item-fourth">
              <div className="block-2">
                <div className="block-2__title">
                  Save <br /> your time
                </div>
                <div className="block-2__text">
                  Dictas scaevola democritum cu his, magna abhorreant dissentias
                  utDictas scaevola democritum cu his.
                </div>
                <button className="button-arrow">
                  <span>Download App</span>
                  <img src={IArrowWhite} alt="-->" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="section-4__header">
          <h2 className="section-4__title">
            <span>What 400+ resiews</span>
            <br />
            <span>say about us</span>
          </h2>

          <div className="section-4__buttons">
            <button onClick={prevSlide}>
              <img src={IArrowLeft} alt="arrow left" />
            </button>
            <button onClick={nextSlide}>
              <img src={IArrowRight} alt="arrow right" />
            </button>
          </div>
        </div>

        <div className="section-4__content">
          <div className="section-4__bg">
            <div className="section-4__bg__decor"></div>
          </div>

          <Splide
            ref={splideRef}
            options={{
              wheel: true,
              pagination: false,
              arrows: false,
              type: "loop",
              focus: "center",
              perPage: 3,
              gap: 18,
              padding: 14,
              breakpoints: {
                768: {
                  perPage: 1,
                },
                992: {
                  perPage: 2,
                },
              },
            }}
            hasTrack={false}
            aria-label="..."
            onMoved={handleMoved}
          >
            <SplideTrack>
              {profiles.map((profile, index) => (
                <SplideSlide key={index}>
                  <div
                    className={classNames("card-profile", {
                      "card-profile--disabled": index !== currentIndex,
                    })}
                  >
                    <div className="card-profile__image">
                      <img src={profile.image} alt="photo" />
                    </div>

                    <div className="card-profile__container">
                      <div>
                        <div className="card-profile__name">{profile.name}</div>
                        <div className="card-profile__status">
                          {profile.status}
                        </div>
                      </div>

                      <div className="card-profile__range">
                        {Array(profile.range).fill(
                          <img src={IStar} alt="star" />
                        )}
                      </div>
                    </div>

                    <p className="card-profile__descripts">
                      {profile.descripts}
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </section>

      <section className="section-5">
        <div className="block-2">
          <div className="block-2__title">Pricing</div>

          <div className="block-2__text">
            Dictas scaevola democritum cu his, magna abhorreant dissentias
            utDictas scaevola democritum cu his.
          </div>
        </div>
      </section>

      <section className="section-6">
        <div className="section-6__bg">
          <div className="bg-shadow"></div>
        </div>

        <div className="section-6__cards">
          {propositions.map((proposition) => (
            <div
              key={proposition.title}
              className={classNames("card-proposition", {
                "card-proposition--active": proposition.active,
              })}
            >
              <div className="card-proposition__title">{proposition.title}</div>
              <div className="card-proposition__price">{proposition.price}</div>
              <div className="card-proposition__during">
                {proposition.during}
              </div>
              <div className="card-proposition__text">{proposition.text}</div>
              <button className="card-proposition__button">Start Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-7">
        <div className="section-7__container">
          <div className="section-7__title">
            Start using <strong>Abstract</strong> app now!
          </div>

          <div className="section-7__text">
            Dictas scaevola democritum cu his, magna abhorreant dissentias .
          </div>

          <button type="button" className="section-7__button">
            <span>Download App</span>
            <img src={IArrowRight2} alt="-->" />
          </button>
        </div>
      </section>

      <footer className="footer">
        <hr className="footer__hr" />

        <div className="footer__container">
          <div className="footer__block">
            <div>
              <img className="footer__logo" src={ILogo2} alt="logo2" />

              <div className="footer__buttons">
                <img src={googlePlay} alt="google play" />
                <img src={appStore} alt="app store" />
              </div>
            </div>

            <div className="footer__rules">
              2018 Copyrights, All rights reserved.
            </div>
          </div>

          <div className="footer__lists">
            <div>
              <h4 className="footer__list-title">About us</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer__list-title">Features</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Online Shop</a>
                </li>
                <li>
                  <a href="#">Influences</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Brands</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer__list-title">Blog</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Terms & conditions</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>

            {/* <div className="select">
              <span className="select__item">English</span>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
