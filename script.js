// console.log(MyObj);
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function myFnc() {
  fetch(
    "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=5009a1053060435f9e45cfb0900e38c3"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let mycard = "";
      let row = document.getElementById("getid");
      data.articles.forEach((element) => {
        mycard += `<div class="col-md-3 mt-4">
                <div class="card">
                    <div class="card-header text-center">
                        <img src="${element.urlToImage}" alt="" width="200px" height="150px">
                    </div>
                    <div class="card-body">
                        <h5>${element.title}</h5>
                    </div>
                    
                </div>
            </div>`;
      });
      row.innerHTML = mycard;
    });
});
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((mydata) => {
      let mycard1 = "";
      let myhead = document.getElementById("head");
      //  myhead.innerHTML = temp(mydata);
      // myhead.innerHTML=mycard1;
      mydata.forEach((res) => {
        mycard1 += `
            <div class="col-md-4 mt-3">
                <div class="card">
                    <div class="card-body" id="head" text-center>
                    <table class="">
                    <tr>
                        <td><h6> Id: </h6></td>
                        <td><span> ${res.id}</span></td>
                    </tr>
                    <tr>
                        <td><h6> Name: </h6></td>
                        <td><span> ${res.name}</span></td>
                    </tr>
                    <tr>
                        <td><h6> UserName: </h6></td>
                        <td><span> ${res.username}</span></td>
                    </tr>
                    <tr>
                        <td><h6> Email: </h6></td>
                        <td><span> ${res.email}</span></td>
                    </tr>
                    </table>
                    
                    
                    
                        
                    </div>
                    
                </div>
            </div>
            `;
      });
      myhead.innerHTML = mycard1;
    });

  //  const temp = (data)=>{
  //      return  `
  //             <div class="col-md-4">
  //                 <div class="card text-center">
  //                     <div class="card-body" >
  //                         <h4>${data[Math.floor(Math.random()*9)].name}</h4>
  //                     </div>
  //                     <div class="card-header">

  //                     </div>
  //                 </div>
  //             </div>`

  //  }
});

// featch aurangabad

let abs=document.getElementById("ab");
abs.addEventListener('click', function(){
  fetch("./aurangabad.json").then((res) =>{
          return res.json();
  }).then((data) =>{
  
    console.log(data);

      let mycard2="";
      let cityss=document.getElementById("mwr");
      data.forEach(elem =>{
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
                            <li>Christion: ${elem.relegion[0].Christion}</li>
                            <li>Sikh: ${elem.relegion[0].Sikh}</li>
                            <li>Jain: ${elem.relegion[0].Jain}</li>
                            <li>Others: ${elem.relegion[0].Others}</li>
                            <li>Not Stated: ${elem.relegion[0].Not_Stated}</li>
                          </ul>
                        </p>
                    </div>
                    
                </div>
            </div>`;

  })
    cityss.innerHTML=mycard2;
})

    
    
});

// fetch nanded data

let nded = document.getElementById("nd");
nded.addEventListener("click", function () {
  fetch("./nanded.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let mycard2 = "";
      let cityss = document.getElementById("mwr");
      data.forEach((elem) => {
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
                  
                </div>
            </div>`;
      });
      cityss.innerHTML = mycard2;
    });
});




// fetch parbhani data

let pbh = document.getElementById("pb");
pbh.addEventListener("click", function () {
  fetch("./parbhani.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let mycard2 = "";
      let cityss = document.getElementById("mwr");
      data.forEach((elem) => {
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
                            <li>Jainism: ${elem.relegion[0].Jainism}</li>
                            <li>Christianity: ${elem.relegion[0].Christianity}</li>
                            <li>Others: ${elem.relegion[0].Others}</li>
                            <li>Not Stated: ${elem.relegion[0].Not_Stated}</li>
                          </ul>
                        </p>
                  
                </div>
            </div>`;
      });
      cityss.innerHTML = mycard2;
    });
});

//fetch hyderabad

let hder = document.getElementById("hb");
hder.addEventListener("click", function () {
  fetch("./hyderabad.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let mycard2 = "";
      let cityss = document.getElementById("mwr");
      data.forEach((elem) => {
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
                            <li>Christianity: ${elem.relegion[0].Christianity}</li>
                            
                            <li>Others: ${elem.relegion[0].Others}</li>
                          </ul>
                        </p>
                    </div>
                    
                </div>
            </div>`;
      });
      cityss.innerHTML = mycard2;
    });
});

//fetch Mumbai

let mbi = document.getElementById("mb");
mbi.addEventListener("click", function () {
  fetch("./mumbai.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let mycard2 = "";
      let cityss = document.getElementById("mwr");
      data.forEach((elem) => {
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
                            <li>Jainism: ${elem.relegion[0].Jainism}</li>
                            <li>Christianity: ${elem.relegion[0].Christianity}</li>
                            
                            <li>Others: ${elem.relegion[0].Others}</li>
                          </ul>
                        </p>
                    </div>
                    
                </div>
            </div>`;
      });
      cityss.innerHTML = mycard2;
    });
});




// fetch marathwada 

let mw = document.getElementById("mw");
mw.addEventListener('click', function(){
  fetch("./text1.json").then((res) =>{
  return res.json();
  }).then((data) =>{
    // console.log(data);

    let mycard3="";
    let mwr=document.getElementById("mwr");
    data.forEach(elem =>{
      console.log(elem.languages[0].marathi);
      mycard3 = `<div class="col">
          <div class="card">
            <div class="card-header text-center">
              <img src="${elem.img_url}" alt="" width="250px" height="200px">
            </div>
            <div class="card-body">
              <p><b>District: </b>
              <ul>
              <li class="btn" >${elem.district[0]}</li>
              <li class="btn" >${elem.district[1]}</li>
              <li class="btn" >${elem.district[2]}</li>
              <li class="btn" >${elem.district[3]}</li>
              <li class="btn" >${elem.district[4]}</li>
              <li class="btn" >${elem.district[5]}</li>
              <li class="btn" >${elem.district[6]}</li>
              <li class="btn" >${elem.district[7]}</li>
              </ul>
              </p>
              <p><b>Largest City: </b> ${elem.largest_city} </p>
              <p><b>Division: </b> ${elem.Division}</p>
              <p><b>Area: </b> ${elem.Area}</p>
              <p><b>Population(2011): </b> ${elem.population_2011}</p>
              <p><b>Literacy: </b> ${elem.literacy}</p>
              <p><b>Sex Ratio: </b> ${elem.sex_ratio}</p>
              <p><b>Languages: </b>
              <ul>
              <li>Marathi: ${elem.languages[0].marathi}</li>
              <li>Urdu: ${elem.languages[0].urdu}</li>
              <li>Hindi: ${elem.languages[0].hindi}</li>
              <li>Lambadi: ${elem.languages[0].lambadi}</li>
              <li>Others: ${elem.languages[0].others}</li>
              </ul>
              </p>
            </div>
          </div>
        </div>`;
    })
    mwr.innerHTML=mycard3;
  })
})
