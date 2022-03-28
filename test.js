let data8 = [];
let pb = document.getElementById("pb");
ab.addEventListener("click", function btn3Fnc() {
  let url = "./parbhani.json";
  fetch(url)
    .then((res_s) => res_s.json())
    .then((data4) => {
      data8 = data4;
      console.log(data4);

      let mycard2 = "";
      let cityss = document.getElementById("mwr");
      data4.forEach((elem) => {
        mycard2 += `<div class="col">
                <div class="card">
                    <div class="card-header text-center">
                        <img src="${elem.img_url}" alt="" width="250px" height="200px">
                    </div>
                    <div class="card-body">
                        <p><b>Country: </b> ${elem.country}</p>
                        <p><b>State: </b> ${elem.state}</p>
                        <p><b>Region: </b> ${elem.region}</p>
                        <p><b>District: </b> ${elem.district}</p>
                        <hr>
                        <p><b>Type: </b> ${elem.type}</p>
                        <p><b>Body: </b> ${elem.body}</p>
                        <hr>
                        <p><b>Area: </b> ${elem.area}</p>
                        <p><b>Population: </b> ${elem.population}</p>
                        <p><b>Relegion: </b>
                        <ul>
                            <li>Hindu: ${elem.relegion[0].Hindu}</li>
                            <li>Muslim: ${elem.relegion[0].Muslim}</li>
                            <li>Budhist: ${elem.relegion[0].Budhist}</li>
                            <li>Sikh: ${elem.relegion[0].Sikh}</li>
                            <li>Others: ${elem.relegion[0].Others}</li>
                          </ul>
                        </p>
                    </div>
                    <div class="card-footer">
                    <button class="btn btn-success btn-block">Next City</button>
                    </div>
                </div>
            </div>`;
      });
      cityss.innerHTML = mycard2;
    });
});

// fetch hyderabad data

let data9 = [];
let hd = document.getElementById("hd");
ab.addEventListener("click", function btn3Fnc() {
  let url = "./hyderabad.json";
  fetch(url)
    .then((res_s) => res_s.json())
    .then((data4) => {
      data9 = data4;
      console.log(data4);

      let mycard2 = "";
      let cityss = document.getElementById("mwr");
      data4.forEach((elem) => {
        mycard2 += `<div class="col">
                <div class="card">
                    <div class="card-header text-center">
                        <img src="${elem.img_url}" alt="" width="250px" height="200px">
                    </div>
                    <div class="card-body">
                        <p><b>Country: </b> ${elem.country}</p>
                        <p><b>State: </b> ${elem.state}</p>
                        <p><b>Region: </b> ${elem.region}</p>
                        <p><b>District: </b> ${elem.district}</p>
                        <hr>
                        <p><b>Type: </b> ${elem.type}</p>
                        <p><b>Body: </b> ${elem.body}</p>
                        <hr>
                        <p><b>Area: </b> ${elem.area}</p>
                        <p><b>Population: </b> ${elem.population}</p>
                        <p><b>Relegion: </b>
                        <ul>
                            <li>Hindu: ${elem.relegion[0].Hindu}</li>
                            <li>Muslim: ${elem.relegion[0].Muslim}</li>
                            <li>Budhist: ${elem.relegion[0].Budhist}</li>
                            <li>Sikh: ${elem.relegion[0].Sikh}</li>
                            <li>Others: ${elem.relegion[0].Others}</li>
                          </ul>
                        </p>
                    </div>
                    <div class="card-footer">
                    <button class="btn btn-success btn-block">Next City</button>
                    </div>
                </div>
            </div>`;
      });
      cityss.innerHTML = mycard2;
    });
});
