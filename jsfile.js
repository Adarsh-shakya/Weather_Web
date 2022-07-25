const searchinpute=document.getElementById("searchInput");
const searchButton=document.getElementById("searchButton");
let loca=document.getElementById("loca");
let tempValue=document.getElementById("temp-value");
let tempIcon=document.getElementById("tempIcon");
let climate=document.getElementById("climate");
let pic=document.getElementById("pic");
let iconFile;

searchButton.addEventListener('click',(e)=>
{
e.preventDefault
getWeather(searchinpute.value);
searchinpute.value='';


});

const getWeather=async(city)=>
{
try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=ef4acb7709a3357ff340b449b9685f73`,{mode:'cors'});
    const weatherDate=await response.json();
    console.log(weatherDate);
    const{name}=weatherDate;
    const{feels_like}=weatherDate.main;
    const{id,main}=weatherDate.weather[0];
    loca.textContent=name;
    climate.textContent=main;
    tempValue.textContent=Math.round(feels_like-273);

    if(id>=200 && id<=232)
                   {
                       tempIcon.src="./images/thunderstorm.png"
                       pic.src="./images/pexels-dmitry-zvolskiy-1576369.jpg"
                   }
                   else if(id>=801 && id<=804)
                   {
                       tempIcon.src="./images/clouds.png"
                       pic.src="./images/pexels-pixabay-209831.jpg"
                   }
                   else if(id>=300 && id<=531)
                   {
                       tempIcon.src="./images/rain.png"
                       pic.src="./images/rain-g3e8acb84e_1920.jpg"
                   }
                   else if(id>=600 && id<=622)
                   {
                       tempIcon.src="./images/snowman.png"
                       pic.src="./images/pexels-jill-wellington-259583 - Copy.jpg"
                   }
                   else if(id>=701 && id<=781)
                   {
                       tempIcon.src="./images/mist.png"
                       pic.src="./images/pexels-karol-wiśniewski-845619.jpg"
                   }
                   else if(id==800)
                   {
                       tempIcon.src="./images/sunny.png"
                       pic.src="./images/tree-gc80535bfe_1920.jpg"
                   }
}

catch(error)
{
    alert('city not found');
}

}




window.addEventListener("load" , ()=>
{
    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            //const proxy="https://cors-anywhere.herokuapp.com/";

             const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ef4acb7709a3357ff340b449b9685f73`
             //const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ef4acb7709a3357ff340b449b9685f73`
             fetch(api,{mode:'cors'}).then((response)=>{

                return response.json();

             })

             .then(data =>
                {
                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];
                    
                    console.log(data);

                    loca.textContent=name;
                    climate.textContent=main;
                   tempValue.textContent=Math.round(feels_like-273);
                   
                   
                   if(id>=200 && id<=232)
                   {
                       tempIcon.src="./images/thunderstorm.png"
                       pic.src="./images/pexels-dmitry-zvolskiy-1576369.jpg"
                   }
                   else if(id>=801 && id<=804)
                   {
                       tempIcon.src="./images/clouds.png"
                       pic.src="./images/pexels-pixabay-209831.jpg"
                   }
                   else if(id>=300 && id<=531)
                   {
                       tempIcon.src="./images/rain.png"
                       pic.src="./images/rain-g3e8acb84e_1920.jpg"
                   }
                   else if(id>=600 && id<=622)
                   {
                       tempIcon.src="./images/snowman.png"
                       pic.src="./images/pexels-jill-wellington-259583 - Copy.jpg"
                   }
                   else if(id>=701 && id<=781)
                   {
                       tempIcon.src="./images/mist.png"
                       pic.src="./images/pexels-karol-wiśniewski-845619.jpg"
                   }
                   else if(id==800)
                   {
                       tempIcon.src="./images/sunny.png"
                       pic.src="./images/tree-gc80535bfe_1920.jpg"
                       
                   }
                })
        })
    }
})
