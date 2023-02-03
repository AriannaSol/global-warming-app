const cardMenu = {
  temperature: {
    id: 1,
    title: "Temperature anomalies",
    img: "./images/temperature.jpg",
    desc: (
      <p className="text-gray-300 text-center">
        The current global warming rate is not natural. From 1880 to 1981 was
        (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to
        (0.18°C / 0.32°F) . Some of the past sudden increase on global
        temperature present in this graph, correspond to the Roman Warm Period
        and the Medieval Warm Period. These events were at regional and not
        global scale. The total average global temperature rise since the
        industrial revolution is around (1.0 °C / 1.8 °F). Earth northern
        hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6
        °F) and (4 °C / 7.2 °F). Earth temperature and the proportion of gases
        such as Co2, methane, and nitrous oxide in the atmosphere is strictly
        correlated. For more information visit:{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature"
        >
          Climate Change: Global Temperature
        </a>
        .
      </p>
    ),
    path: "/temperature",
  },
  co2: {
    id: 2,
    title: "Carbon dioxide levels",
    img: "./images/CO2.jpg",
    desc: (
      <p className="text-gray-300 text-center">
        For thousands of years, the natural concentration of CO2 in earth
        atmosphere was around 280 ppm. From the beginning of the industrial
        revolution, human activities like the burning of fossil fuels,
        deforestation, and livestock have increased this amount by more than
        30%. For more information about prehistoric CO2 concentration, current
        and future consequences please visit:{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide"
        >
          Climate Change: Atmospheric Carbon Dioxide
        </a>
        and{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://climate.nasa.gov/climate_resources/24/graphic-the-relentless-rise-of-carbon-dioxide/"
        >
          The relentless rise of carbon dioxide
        </a>
        .
      </p>
    ),
    path: "/co2",
  },
  "nitrous-oxide": {
    id: 3,
    title: "Nitrous oxide levels",
    img: "./images/NO2.jpg",
    desc: (
      <p className="text-gray-300 text-center">
        Nitrous oxide is a gas that is produced by the combustion of fossil fuel
        and solid waste, nitrogen-base fertilizers, sewage treatment plants,
        natural processes, and other agricultural and industrial activities. It
        is the third largest heat-trapping gas in the atmosphere and the biggest
        ozone-destroying compound emitted by human activities. For more detailed
        information please visit:{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3306630/"
        >
          Stratospheric ozone depletion due to nitrous oxide: influences of
          other gases
        </a>{" "}
        and{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide"
        >
          EPA: Nitrous Oxide Emissions
        </a>
        .
      </p>
    ),
    path: "/nitrous-oxide",
  },
  methane: {
    id: 4,
    title: "Methane levels",
    img: "./images/metano.jpg",
    desc: (
      <p className="text-gray-300 text-center">
        Methane is a flammable gas formed by geological and biological
        processes. Some of the natural ones are leaks from natural gas systems
        and wetlands. 50-65% of total global methane emissions come from human
        activities. These include livestock, agriculture, oil and gas systems,
        waste from homes and businesses, landfills, and so on. Methane is a gas
        with a global warming potential several times stronger than of CO2. For
        more than 650,000 years, methane concentration in the atmosphere was
        between 350 - 800 ppb. From the beginning of the industrial revolution,
        human activities have increased this amount by around 150%. For more
        information about the methane situation please visit:{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#methane"
        >
          EPA: Methane Emissions
        </a>{" "}
        and{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://earthobservatory.nasa.gov/images/146978/methane-emissions-continue-to-rise"
        >
          NASA: Methane Emissions Continue to Rise.
        </a>
      </p>
    ),
    path: "/methane",
  },
  arctic: {
    id: 5,
    title: "Melted polar ice caps",
    img: "./images/ghiacciai.jpg",
    desc: (
      <p className="text-gray-300 text-center">
        The arctic is warming around twice as fast as global average. Some of
        the reasons for this are: The arctic amplification, the albedo effect,
        and black carbon. From 1979 to 1996, we lost 2.2 - 3% of the arctic ice
        cover. From 2010 to present we are losing 12.85% per decade! Another
        consequence is permafrost thawing. This is a process in which large
        amounts of methane is released to the atmosphere, fueling more the
        process of global warming. For more details please visit:{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.npolar.no/en/themes/climate-change-in-the-arctic/#toggle-id-8"
        >
          Climate change in the Arctic
        </a>{" "}
        and{" "}
        <a
          className="no-underline text-green-700 font-medium hover:underline hover:text-green-400 duration-1000 active:text-green-400"
          href="https://www.igsoc.org/annals/46/a46a005.pdf"
        >
          Recent air-temperature changes in the Arctic
        </a>
        .
      </p>
    ),
    path: "/arctic",
  },
};
export default cardMenu;
