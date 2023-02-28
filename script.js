let API_KEY = "d94f4fa4cee34c6e218cc8a659d632ee"

async function showWeather(){
    // let latitude = 15.3333;
    // let longitude = 74.0833;

        let city = "gorakhpur"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await response.json()
        console.log("data" , data)

        let new_para = document.createElement('p');
        new_para.innerText = data.main.temp;
        console.log(new_para.innerText)
        document.querySelector('body').appendChild(new_para)
}

showWeather();

// async function get