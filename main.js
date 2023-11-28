// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

window.onload = function() {
    var monthSelect = document.getElementById("CardMonth");
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.value = months[i];
        option.text = months[i];
        monthSelect.appendChild(option);
    }

    var yearSelect = document.getElementById("CardYear");
    var currentYear = new Date().getFullYear();
    
    for (var j = 0; j < 10; j++) { // Adjust the range as needed
        var yearOption = document.createElement("option");
        yearOption.value = currentYear + j;
        yearOption.text = currentYear + j;
        yearSelect.appendChild(yearOption);
    }
};
