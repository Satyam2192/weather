import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Animation duration in milliseconds
  };

  const hotBg = "https://source.unsplash.com/1920x1080/?summer";

  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const coldBg = "https://source.unsplash.com/1920x1080/?ice";
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      // dynamic bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div
      className="justify-center bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-screen flex justify-center items-center ">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="flex justify-center content-center mx-auto sm:px-6 lg:px-8 relative max-w-[600px] w-full rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 to-pink-600 pb-6">
          {weather && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <input
                  onKeyDown={enterKeyPressed}
                  type="text"
                  name="city"
                  placeholder="Enter City..."
                  className="border border-gray-300 px-2 py-1 rounded-lg w-full md:w-3/4 focus:outline-none focus:border-blue-400"
                />
                <button
                  onClick={(e) => handleUnitsClick(e)}
                  className={` px-4 py-2 mr-4 text-white text-[40px] font-bold hover:text-yellow-400 transition duration-500 ease-in-out transform ${
                    isAnimating ? "animate-bounce" : ""
                  }`}
                >
                  {units === "metric" ? "°C" : "°F"}
                </button>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="flex items-center space-x-4">
                  <h3 className="font-medium text-gray-700 text-lg">
                    {weather.name}, {weather.country}
                  </h3>
                  <img
                    src={weather.iconURL}
                    alt="weatherIcon"
                    className="w-12 h-12"
                  />
                  <h3 className="font-medium text-gray-700 text-lg">
                    {weather.description}
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <h1 className="font-bold text-4xl text-gray-700">
                    {weather.temp.toFixed()}°{units === "metric" ? "C" : "F"}
                  </h1>
                </div>
              </div>

              {/* bottom description */}
              <Descriptions weather={weather} units={units} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
