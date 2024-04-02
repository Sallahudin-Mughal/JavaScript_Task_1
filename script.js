let countryStateCity ={
    Pakistan: {
        Punjab: {Lahore: [],Multan: [],Faisalabad: []},
        Sindh: {Karachi: [],Hyderabad: [],Sukkur: []},
        Khyber_Pakhtunkhwa: {Peshawar: [],Abbottabad: [],Swat: []
        }
    },
    India: {
        Uttar_Pradesh: {Lucknow: [],Kanpur: [],Varanasi: []},
        Maharashtra: {Mumbai: [],Pune: [],Nagpur: []},
        Rajasthan: {Jaipur: [],Udaipur: [],Jodhpur: []},
        Patna : {Janpur:[], Khagual:[]}
    },
    UK: {
        England: {London: [],Manchester: [],Birmingham: []},
        Scotland: {Edinburgh: [],Glasgow: [],Aberdeen: []},
    }
}


window.onload = function(){
    const selectCountry =document.getElementById("country")
    const selectCity =document.getElementById("city")
    const selectState =document.getElementById("state")
    const select = document.querySelectorAll("select");


    selectState.disabled= true;
    selectCity.disabled = true


    for(let country in countryStateCity){
    
        selectCountry.options[selectCountry.options.length] = new Option(country, country)
    }


    // Change Country

    selectCountry.onchange = (e)=> {
        selectState.disabled =false;
        selectCity.disabled = true;


        selectState.length =1
        selectCity.length =1

        for( let state in countryStateCity[e.target.value]){
            // console.log(state)
            selectState.options[selectState.options.length] = new Option(state, state)

        }
    }

    selectState.onchange = (e) => {
        selectCity.disabled = false;

        selectCity.length = 1;

        for(let city in countryStateCity[selectCountry.value][e.target.value]){
            selectCity.options[selectCity.options.length] = new Option(city, city);
        }
    };
}