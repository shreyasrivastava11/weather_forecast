document.querySelector(".weather").style.display = "none";

const value = async function (textValue) {
  try {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${textValue}?unitGroup=us&key=3N3VCQKSCHW2PE43XRFP8DT8M&contentType=json`
    );

    const data = await res.json();
    console.log(data);

    // Conversion of fahrenheit to celsius
    const temperature = (data.currentConditions.temp - 32) * 0.55;
    document.querySelector(".temp").textContent =
      Math.round(temperature) + "°C";
    document.querySelector(".city").textContent = data.address;
    document.querySelector(".humidity").textContent =
      data.currentConditions.humidity + "%";
    document.querySelector(".wind").textContent =
      data.currentConditions.windspeed + "km/h";

    if (data.currentConditions.conditions === "cloudy") {
      document.querySelector(".img2").src = "images/clouds.png";
    } else if (data.currentConditions.conditions === "Clear") {
      document.querySelector(".img2").src = "images/clear.png";
    } else if (data.currentConditions.conditions === "Partially cloudy") {
      document.querySelector(".img2").src = "images/mist.png";
    } else if (data.currentConditions.conditions === "rainy") {
      document.querySelector(".img2").src = "images/rain.png";
    }

    console.log(temperature);

    document.querySelector(".weather").style.display = "";
  } catch (err) {
    console.error("Error 400 Country not found!");
    alert("Country not found!");
  }
};

document.querySelector(".img").addEventListener("click", function () {
  const textValue = document.getElementById("text").value;

  value(textValue);
});
