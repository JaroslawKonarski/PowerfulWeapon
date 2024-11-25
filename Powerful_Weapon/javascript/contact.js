//navbar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


//form validation

function validate (){

    if(document.getElementById("firstName").value== ""){
      
      alert("Enter your name please");

      return false;
    }

    if(document.getElementById("lastName").value== ""){
      
        alert("Enter your last name please");

        return false;
    }
    
    if (document.getElementById("email").value.indexOf("@")== -1){
  
      alert ("Your email is invalid");

      return false;
    } 

    return true; 
  }
  

  // NAVBAR
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}