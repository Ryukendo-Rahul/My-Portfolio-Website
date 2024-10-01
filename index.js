


// Tab switching of my skills
var tabButtons = document.querySelectorAll(".content_right .btn_box button");
var tabPanels = document.querySelectorAll(".content_right .content_lists");

// Add event listener to tab buttons
tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to current button
    button.classList.add("active");
    // Show corresponding tab panel
    showPanel(index);
  });
});

function showPanel(panelIndex) {
  tabPanels.forEach((tabs) => {
    tabs.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
}

// Initialize first tab
tabButtons[0].classList.add("active");
showPanel(0);






// GOogle forms

const scriptURL = 'https://script.google.com/macros/s/AKfycbzVDxj9uURzqP96rZUtVHO5H1Kifu8WI1KMIwfe4sjevCwpxCzKderOUIQuJArPQc-P/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 5000)

        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// google form submitted message

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}



// Social Media logos

function openLink(url) {
    // window.location.href = url ;
    window.open(url, '_blank');
}

const social_1 = document.querySelector(".image_logo1" );
const social_2 = document.querySelector(".image_logo2" );
const social_3 = document.querySelector(".image_logo3" );
const social_4 = document.querySelector(".image_logo4" );
const social_5 = document.querySelector(".image_logo5" );
const social_6 = document.querySelector(".image_logo6" );


social_1.addEventListener('click', function() {
    openLink('https://www.linkedin.com/in/rahul-mandal-ryukendo/');
});
social_2.addEventListener('click', function() {
    openLink('https://x.com/rahulmandal7231');
});
social_3.addEventListener('click', function() {
    openLink('https://www.instagram.com/r_a_h_u_l______23/');
});
social_4.addEventListener('click', function() {
    openLink('http://t.me/R_y_u_k_e_n_d_o');
});
social_5.addEventListener('click', function() {
    openLink('https://facebook.com');
});
social_6.addEventListener('click', function() {
    openLink('https://github.com/Ryukendo-Rahul');
});



//My services js

