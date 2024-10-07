import styles from "./HomeStyles.module.css";
// import temp1 from "../../assets/icon-1.svg";
// import temp2 from "../../assets/icon-2.svg";
// import temp3 from "../../assets/icon-3.svg";
// import temp4 from "../../assets/icon-4.svg";
// import temp5 from "../../assets/icon-5.svg";
// import temp6 from "../../assets/icon-6.svg";
// import temp7 from "../../assets/icon-7.svg";
import compass from "../../assets/icon-compass.png";
import umberella from "../../assets/icon-umberella.png";
import liveCamera1 from "../../assets/live-camera-1.jpg";
import liveCamera2 from "../../assets/live-camera-2.jpg";
import liveCamera3 from "../../assets/live-camera-3.jpg";
import liveCamera4 from "../../assets/live-camera-4.jpg";
import wind from "../../assets/icon-wind.png";
import arrow from "../../assets/arrow.png";
import thumb1 from "../../assets/thumb-1.jpg";
import thumb2 from "../../assets/thumb-2.jpg";
import thumb3 from "../../assets/thumb-3.jpg";
import thumb4 from "../../assets/thumb-4.jpg";
import thumb5 from "../../assets/thumb-5.jpg";
import thumb6 from "../../assets/thumb-6.jpg";
import thumb7 from "../../assets/thumb-7.jpg";
import thumb8 from "../../assets/thumb-8.jpg";
import thumb9 from "../../assets/thumb-9.jpg";
import playBtn from "../../assets/play-button.png";
import { useEffect, useState, useRef } from "react";
const apiKey = "2817644f73dcb66f9c1f2e404f5db53a";

const Home = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const cityInputRef = useRef(null); // Reference for the input box
  const [city, setCity] = useState("Abuja"); // Default city
  const [showWeather, setShowWeather] = useState(true);

  // Fetch 5-day forecast using city name
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await res.json();
        if (data.cod !== "200") {
          alert("City not found");
          throw new Error("City not found");
        }
        console.log(data);
        console.log(data.list);
        setForecast(groupByDay(data.list));
        setShowWeather(true);
        setError("");
      } catch (err) {
        setShowWeather(false);
        setError(err.message);
      }
    };

    fetchForecast();
  }, [city, apiKey]);

  // Group forecast data by day
  const groupByDay = (list) => {
    const days = {};
    list.forEach((item) => {
      const weekday = new Date(item.dt_txt).toLocaleDateString("en-US", {
        weekday: "long",
      });

      const monthDay = new Date(item.dt_txt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      if (!days[weekday]) {
        days[weekday] = {
          day: weekday,
          date: monthDay,
          temp: Math.floor(item.main.temp),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          windDeg: item.wind.deg,
        };
      }
    });
    return Object.values(days).slice(0, 5); // Return 5 days
  };

  const handleSearch = () => {
    const inputCity = cityInputRef.current.value; // Get value from input
    if (inputCity) {
      setCity(inputCity); // Update the city and trigger re-fetch
    } else {
      alert("Please enter a valid city name.");
    }
  };

  // if (error) {
  //   return <div className={styles.error}>{error}</div>;
  // }

  // if (forecast.length === 0) {
  //   return <div className={styles.loading}>Loading...</div>;
  // }
  console.log(forecast);
  return (
    <section className={styles.container}>
      <div className={styles.weatherForecast}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Find your location..."
            ref={cityInputRef}
          />
          <button onClick={handleSearch}>Find</button>
        </div>

        {/* Conditional rendering based on valid city */}
        {error && <div className={styles.error}>{error}</div>}
        {showWeather && forecast.length > 0 && (
          <div className={styles.weather}>
            <div className={styles.monday}>
              <div className={styles.first}>
                <p>{forecast[0].day}</p>
                <p>{forecast[0].date}</p>
              </div>
              <div className={styles.content}>
                <p>{city}</p>
                <div className={styles.degree}>
                  <span>
                    {forecast[0].temp}
                    <sup>°</sup>C
                  </span>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast[0].icon}@2x.png`}
                    alt={forecast[0].description}
                  />
                </div>
                <div className={styles.temp}>
                  <span className={styles.umberella}>
                    <img src={umberella} alt="" />
                    <span>{forecast[0].humidity}%</span>
                  </span>
                  <span className={styles.wind}>
                    <img src={wind} alt="" />
                    <span>{forecast[0].windSpeed} km/h</span>
                  </span>
                  <span className={styles.compass}>
                    <img src={compass} alt="" />
                    <span>{forecast[0].windDeg}°</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.days}>
              <div className={styles.tuesday}>
                <div className={styles.day}>
                  <p>{forecast[1].day}</p>
                </div>
                <div className={styles.temp}>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast[1].icon}@2x.png`}
                    alt={forecast[1].description}
                  />
                  <h4>
                    {forecast[1].temp}
                    <sup>°</sup>C
                  </h4>
                  <p>
                    {forecast[1].windDeg}
                    <sup>°</sup>
                  </p>
                </div>
              </div>
              <div className={styles.wednesday}>
                <div className={styles.day}>
                  <p>{forecast[2].day}</p>
                </div>
                <div className={styles.temp}>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast[2].icon}@2x.png`}
                    alt={forecast[2].description}
                  />
                  <h4>
                    {forecast[2].temp}
                    <sup>°</sup>C
                  </h4>
                  <p>
                    {forecast[2].windDeg}
                    <sup>°</sup>
                  </p>
                </div>
              </div>
              <div className={styles.thursday}>
                <div className={styles.day}>
                  <p>{forecast[3].day}</p>
                </div>
                <div className={styles.temp}>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast[3].icon}@2x.png`}
                    alt={forecast[3].description}
                  />
                  <h4>
                    {forecast[3].temp}
                    <sup>°</sup>C
                  </h4>
                  <p>
                    {forecast[3].windDeg}
                    <sup>°</sup>
                  </p>
                </div>
              </div>
              <div className={styles.friday}>
                <div className={styles.day}>
                  <p>{forecast[4].day}</p>
                </div>
                <div className={styles.temp}>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast[4].icon}@2x.png`}
                    alt={forecast[4].description}
                  />
                  <h4>
                    {forecast[4].temp}
                    <sup>°</sup>C
                  </h4>
                  <p>
                    {forecast[4].windDeg}
                    <sup>°</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.live}>
        <h3>Live cameras</h3>
        <div className={styles.liveCameras}>
          <div className={styles.liveCamera}>
            <div className={styles.imageWrapper}>
              <img src={playBtn} alt="" />
            </div>
            <img src={liveCamera1} alt="" />
            <p>New York</p>
            <span>8 oct, 8:00AM</span>
          </div>
          <div className={styles.liveCamera}>
            <div className={styles.imageWrapper}>
              <img src={playBtn} alt="" />
            </div>
            <img src={liveCamera2} alt="" />
            <p>Los Angeles</p>
            <span>8 oct, 8:00AM</span>
          </div>
          <div className={styles.liveCamera}>
            <div className={styles.imageWrapper}>
              <img src={playBtn} alt="" />
            </div>
            <img src={liveCamera3} alt="" />

            <p>Chicago</p>
            <span>8 oct, 8:00AM</span>
          </div>
          <div className={styles.liveCamera}>
            <div className={styles.imageWrapper}>
              <img src={playBtn} alt="" />
            </div>
            <img src={liveCamera4} alt="" />
            <p>London</p>
            <span>8 oct, 8:00AM</span>
          </div>
        </div>
      </div>

      <div className={styles.articles}>
        <div className={styles.article}>
          <div className={styles.time}>
            <h3>06:10</h3>
          </div>
          <article>
            <h4>Doloremque laudantium totam sequi</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              saepe assumenda dolorem modi, expedita voluptatum ducimus
              necessitatibus. Asperiores quod reprehenderit necessitatibus
              harum, mollitia, odit et consequatur maxime nisi amet doloremque.
            </p>
            <img src={arrow} alt="" />
          </article>
        </div>
        <div className={styles.article}>
          <h3>06:10</h3>
          <article>
            <h4>Doloremque laudantium totam sequi</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              saepe assumenda dolorem modi, expedita voluptatum ducimus
              necessitatibus. Asperiores quod reprehenderit necessitatibus
              harum, mollitia, odit et consequatur maxime nisi amet doloremque.
            </p>
            <img src={arrow} alt="" />
          </article>
        </div>
        <div className={styles.article}>
          <h3>06:10</h3>
          <article>
            <h4>Doloremque laudantium totam sequi</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              saepe assumenda dolorem modi, expedita voluptatum ducimus
              necessitatibus. Asperiores quod reprehenderit necessitatibus
              harum, mollitia, odit et consequatur maxime nisi amet doloremque.
            </p>
            <img src={arrow} alt="" />
          </article>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.appFeatures}>
          <h2>Application features</h2>
          <div className={styles.appFeature}>
            <div className={styles.imageWrapper}>
              <img src={arrow} alt="" />
            </div>
            <div className={styles.content}>
              <h4>Natus error sit voluptatem accusantium</h4>
              <p>
                Doloremque laudantium totam rem aperiam Inventore veritatis et
                quasi architecto beatae vitae.
              </p>
            </div>
          </div>
          <div className={styles.appFeature}>
            <div className={styles.imageWrapper}>
              <img src={arrow} alt="" />
            </div>
            <div className={styles.content}>
              <h4> Natus error sit voluptatem accusantium</h4>
              <p>
                Doloremque laudantium totam rem aperiam Inventore veritatis et
                quasi architecto beatae vitae.
              </p>
            </div>
          </div>
          <div className={styles.appFeature}>
            <div className={styles.imageWrapper}>
              <img src={arrow} alt="" />
            </div>
            <div className={styles.content}>
              <h4>Natus error sit voluptatem accusantium</h4>
              <p>
                Doloremque laudantium totam rem aperiam Inventore veritatis et
                quasi architecto beatae vitae.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.weatherAnalysis}>
          <h2>Weather analysis</h2>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Accusantium doloremque laudantium rem aperiam
            </span>
            <hr />
          </div>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Eaque ipsa quae ab illo inventore veritatis quasi
            </span>
            <hr />
          </div>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Architecto beatae vitae dicta sunt explicabo
            </span>
            <hr />
          </div>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Nemo enim ipsam voluptatem quia voluptas
            </span>
            <hr />
          </div>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Aspernatur aut odit aut fugit, sed quia consequuntur
            </span>
            <hr />
          </div>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Magni dolores eos qui ratione voluptatem sequi
            </span>
            <hr />
          </div>
          <div className={styles.forecast}>
            <span>
              <img src={arrow} alt="" />
              Neque porro quisquam est qui dolorem ipsum quia
            </span>
          </div>
        </div>

        <div className={styles.photos}>
          <h2>Awesome Photos</h2>
          <div className={styles.images}>
            <img src={thumb1} alt="" />
            <img src={thumb2} alt="" />
            <img src={thumb3} alt="" />
            <img src={thumb4} alt="" />
            <img src={thumb5} alt="" />
            <img src={thumb6} alt="" />
            <img src={thumb7} alt="" />
            <img src={thumb8} alt="" />
            <img src={thumb9} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
