let url = "http://api.weatherapi.com/v1/forecast.json?key=453d266db65048fea5a13049230310&q=Surabaya&days=7&aqi=no&alerts=yes";

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let JSONDoc = JSON.parse(xhttp.responseText);

      let cityName = JSONDoc.location.name;
      let countryName = JSONDoc.location.country;
      let tempNow = JSONDoc.current.temp_c;
      let location = `${cityName}, ${countryName}`;
      let iconNow = JSONDoc.current.condition.icon;
      let imagealt = "weatherIcon";

      let currenttemp = document.getElementById("temp-now");
      let currentlocation = document.getElementById("location");
      let imagenow = document.getElementById("icon-now");
      currenttemp.innerHTML = tempNow + "°C";
      currentlocation.innerHTML = location;
      imagenow.src = iconNow;
      imagenow.alt = imagealt;

      let time1temp = JSONDoc.forecast.forecastday[0].hour[0].temp_c;
      let time2temp = JSONDoc.forecast.forecastday[0].hour[5].temp_c;
      let time3temp = JSONDoc.forecast.forecastday[0].hour[10].temp_c;
      let time4temp = JSONDoc.forecast.forecastday[0].hour[15].temp_c;
      let time5temp = JSONDoc.forecast.forecastday[0].hour[20].temp_c;
      let time1 = JSONDoc.forecast.forecastday[0].hour[0].time;
      let time2 = JSONDoc.forecast.forecastday[0].hour[5].time;
      let time3 = JSONDoc.forecast.forecastday[0].hour[10].time;
      let time4 = JSONDoc.forecast.forecastday[0].hour[15].time;
      let time5 = JSONDoc.forecast.forecastday[0].hour[20].time;
      let icontime1 = JSONDoc.forecast.forecastday[0].hour[0].condition.icon;
      let icontime2 = JSONDoc.forecast.forecastday[0].hour[5].condition.icon;
      let icontime3 = JSONDoc.forecast.forecastday[0].hour[10].condition.icon;
      let icontime4 = JSONDoc.forecast.forecastday[0].hour[15].condition.icon;
      let icontime5 = JSONDoc.forecast.forecastday[0].hour[20].condition.icon;

      let tempclock1 = document.getElementById("temp-time-1");
      let tempclock2 = document.getElementById("temp-time-2");
      let tempclock3 = document.getElementById("temp-time-3");
      let tempclock4 = document.getElementById("temp-time-4");
      let tempclock5 = document.getElementById("temp-time-5");
      let clock1 = document.getElementById("clock1");
      let clock2 = document.getElementById("clock2");
      let clock3 = document.getElementById("clock3");
      let clock4 = document.getElementById("clock4");
      let clock5 = document.getElementById("clock5");
      let hticon1 = document.getElementById("icon-time-1");
      let hticon2 = document.getElementById("icon-time-2");
      let hticon3 = document.getElementById("icon-time-3");
      let hticon4 = document.getElementById("icon-time-4");
      let hticon5 = document.getElementById("icon-time-5");

      tempclock1.innerHTML = time1temp + "°C";
      tempclock2.innerHTML = time2temp + "°C";
      tempclock3.innerHTML = time3temp + "°C";
      tempclock4.innerHTML = time4temp + "°C";
      tempclock5.innerHTML = time5temp + "°C";
      clock1.innerHTML = time1;
      clock2.innerHTML = time2;
      clock3.innerHTML = time3;
      clock4.innerHTML = time4;
      clock5.innerHTML = time5;
      hticon1.src = icontime1;
      hticon2.src = icontime2;
      hticon3.src = icontime3;
      hticon4.src = icontime4;
      hticon5.src = icontime5;

      let tempday1 = JSONDoc.forecast.forecastday[0].day.avgtemp_c;
      let tempday2 = JSONDoc.forecast.forecastday[1].day.avgtemp_c;
      let tempday3 = JSONDoc.forecast.forecastday[2].day.avgtemp_c;
      let iconday1 = JSONDoc.forecast.forecastday[0].day.condition.icon;
      let iconday2 = JSONDoc.forecast.forecastday[1].day.condition.icon;
      let iconday3 = JSONDoc.forecast.forecastday[2].day.condition.icon;

      let day1temp = document.getElementById("temp-day-1");
      let day2temp = document.getElementById("temp-day-2");
      let day3temp = document.getElementById("temp-day-3");
      let day1 = document.getElementById("day1");
      let day2 = document.getElementById("day2");
      let day3 = document.getElementById("day3");
      let htdicon1 = document.getElementById("icon-day-1");
      let htdicon2 = document.getElementById("icon-day-2");
      let htdicon3 = document.getElementById("icon-day-3");

      day1temp.innerHTML = tempday1 + "°C";
      day2temp.innerHTML = tempday2 + "°C";
      day3temp.innerHTML = tempday3 + "°C";
      day1.innerHTML = "Today";
      day2.innerHTML = "In 1 day";
      day3.innerHTML = "In 2 days";
      htdicon1.src = iconday1;
      htdicon2.src = iconday2;
      htdicon3.src = iconday3;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

loadXMLDoc();