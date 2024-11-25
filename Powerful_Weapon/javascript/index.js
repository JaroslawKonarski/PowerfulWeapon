//navbar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}



// NAVBAR
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}






// //hide/show button
// var mainDiv = document.querySelector('.main');
// var mainDisplay = 0;

// function hideShow() {
//     if (mainDisplay == 1) {
//         mainDiv.style.display = 'block';
//         mainDisplay = 0;
//     } else {
//         mainDiv.style.display = 'none';
//         mainDisplay = 1;
//     }
// }


// const button = document.getElementById('Btn');
// let isTextChanged = false;

// button.addEventListener('click', () => {
//     if (isTextChanged) {
//         button.textContent = "Less info";
//     } else {
//         button.textContent = "More info";
//     }
//     isTextChanged = !isTextChanged;
// });


// var secDiv = document.querySelector('.sectext');
// var secDisplay = 0;

// function SecText() {
//     if (secDisplay == 1) {
//         secDiv.style.display = 'block';
//         secDisplay = 0;
//     } else {
//         secDiv.style.display = 'none';
//         secDisplay = 1;
//     }
// }


// const button2 = document.getElementById('Btn2');
// let TextChanged = false;
// button2.addEventListener('click', () => {
//     if (TextChanged) {
//         button2.textContent = "Less info";
//     } else {
//         button2.textContent = "More info";
//     }
//     TextChanged = !TextChanged;
// });


// var thirdDiv = document.querySelector('.thirdtext');
// var thirdDisplay = 0;
// function ThirdText() {
//     if (thirdDisplay == 1) {
//         thirdDiv.style.display = 'block';
//         thirdDisplay = 0;
//     } else {
//         thirdDiv.style.display = 'none';
//         thirdDisplay = 1;
//     }
// }

// const button3 = document.getElementById('Btn3');
// let ThirdChanged = false;
// button3.addEventListener('click', () => {
//     if (ThirdChanged) {
//         button3.textContent = "Less info";
//     } else {
//         button3.textContent = "More info";
//     }
//     ThirdChanged = !ThirdChanged;
// });




//change image (cast)

// function changeImage1() {
//     var image = document.getElementById('cast1');
//     if (image.src.match("images/cast-img.png")) {
//         image.src = "images/secondimg.jpg"
//         image.style.height = '300px'
//         image.style.width = '450px';
//     } 
//     else{
//         image.src = "images/cast-img.png";
//     }
// }


// function changeImage2() {
//     var image = document.getElementById('cast2');
//         if (image.src.match("images/cast-img.png")) {
//             image.src = "images/secondimg.jpg"
//             image.style.height = '300px'
//             image.style.width = '450px';
//         } else{
//             image.src = "images/cast-img.png";
//             }
// }


// function changeImage3() {
//     var image = document.getElementById('cast3');
//         if (image.src.match("images/cast-img.png")) {
//             image.src = "images/secondimg.jpg"
//             image.style.height = '300px'
//             image.style.width = '450px';
//         } 
//         else {
//             image.src = "images/cast-img.png";
//         }
// }


// function changeImage4() {
//     var image = document.getElementById('cast4');
//         if (image.src.match("images/cast-img.png")) {
//             image.src = "images/secondimg.jpg"
//             image.style.height = '300px'
//             image.style.width = '450px';
//         } else {
//             image.src = "images/cast-img.png";
//         }
// }




//gallery

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;

}

function closeFullImg() {
    fullImgBox.style.display = "none";

}


//Behind The Scenes

let scrollContainer = document.querySelector('.scenes');
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});


//scroll effect

const { ScrollObserver, valueAtPercentage } = aat

const castContainer = document.querySelector('.cast')
const cast = document.querySelectorAll('.section_3')
castContainer.style.setProperty('--cast-count', cast.length)
castContainer.style.setProperty(
    '--cast-height',
    `${cast[0].clientHeight}px`
)
Array.from(cast).forEach((cast, index) => {
    const offsetTop = 20 + index * 20
    cast.style.paddingTop = `${offsetTop}px`
    if (index === cast.length - 1) {
        return
    }
    const toScale = 1 - (cast.length - 1 - index) * 0.1
    const nextcast = cast[index + 1]
    const castInner = cast.querySelector('.cast__inner')
    ScrollObserver.Element(nextcast, {
        offsetTop,
        offsetBottom: window.innerHeight - cast.clientHeight
    }).onScroll(({ percentageY }) => {
        castInner.style.scale = valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY
        })
        castInner.style.filter = `brightness(${valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY
        })})`
    })
})
