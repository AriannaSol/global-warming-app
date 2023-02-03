import cardMenu from "../../data";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./card.css";

function Card() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-h1-white pb-8 text-center text-2xl font-bold">
          Global Warming and Climate Change
        </h1>
      </div>
      <Slide
        nextArrow={
          <button
            style={{
              background: "none",
              border: "0px",
              width: "30px",
            }}
          >
            <svg
              fill="#fff"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
          </button>
        }
        prevArrow={
          <button
            style={{
              background: "none",
              border: "0px",
              width: "30px",
            }}
          >
            <svg
              fill="#fff"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            </svg>
          </button>
        }
      >
        {Object.keys(cardMenu).map((item) => {
          return (
            <div key={cardMenu[item].id} className="each-slide-effect">
              <div style={{ backgroundImage: `url(${cardMenu[item].img})` }}>
                <div className="link-container">
                  <Link
                    className="text-black text-xl no-underline hover:text-gray-800 hover:underline"
                    to={`${cardMenu[item].path}`}
                  >
                    {cardMenu[item].title}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

export default Card;
