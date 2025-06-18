const bgimg = document.querySelector("#background-img");
const imgList = ['0.jpg', '1.jpeg', '2.jpeg'];

function paintBackground(imgList){
    const randomNumber = Math.floor(Math.random()*imgList.length);
    bgimg.src = `img./${imgList[randomNumber]}`;
}

paintBackground(imgList);
