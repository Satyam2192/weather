<div  style={{ backgroundImage: url(${bg}) }}>
  <div ">
    <div >
      <input
        type="text"
        id="city-input"
        name="city"
        placeholder="Enter city..."
        className="flex-grow px-2 py-1 mr-4 text-white bg-opacity-30 border border-gray-300 rounded-lg focus:outline-none bg-gradient-to-r from-purple-500 to-blue-600 to-pink-500"
      />
      <div className="flex items-center">
        <button
          onClick={(e) => handleUnitsClick(e)}
          className={w-12 h-12 mr-4 text-3xl font-bold text-white hover:text-yellow-400 transition duration-500 ease-in-out transform ${
            isAnimating ? "animate-bounce" : ""
          }}
        >
          {units === "metric" ? "°c" : "°f"}
        </button>
        <button
          onClick={handleSearch}
          className="inline-block px-4 py-2 text-lg font-bold text-white rounded bg-gradient-to-r from-purple-600 to-blue-600 to-pink-600 transition-all duration-300 transform hover:scale-110"
        >
          Search
        </button>
      </div>
    </div>
    {weather && (
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="flex items-center space-x-2 md:space-x-4">
          <h3 className="font-medium text-white text-base md:text-lg">
            {weather.name}, {weather.country}
          </h3>
          <img
            src={weather.iconURL}
            alt="weatherIcon"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <h3 className="font-medium text-white text-base md:text-lg">
            {weather.description}
          </h3>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold text-5xl text-white md:text-{weather.temp.toFixed()}°{units === "metric" ? "C" : "F"}
          </h1>
        </div>
      </div>
    )}
    {/* bottom description */}
    {weather && <Descriptions weather={weather} units={units} />}
  </div>
</div>