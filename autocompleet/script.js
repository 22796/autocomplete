var landen = [
  // Afrika
    "Algerije",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Fasso",
    "Burundi",
    "Centraal Afrikaanse Republiek",
    "Chaad",
    "De Comoren",
    "Djibouti",
    "Egypte",
    "Equatoriaal Guinea",
    "Eritrea",
    "Ethiopië",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "IvoorKust",
    "Kaap Verdië",
    "Kameroen",
    "Kenia",
    "Kongo",
    "Lesotho",
    "Liberia",
    "Libië",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritanië",
    "Mauritius",
    "Marokko",
    "Mozambique",
    "Namibië",
    "Niger",
    "Nigeria",
    "Oeganda",
    "Rwanda",
    "Sao Tomë© en Principe",
    "Senegal",
    "Seychellen",
    "Sierra Leone",
    "Somalië",
    "Soedan",
    "Swaziland",
    "Tanzania",
    "Togo",
    "Tunesië",
    "Zambia",
    "Zimbabwe",
    "Zuid Afrika",
    "Zuid Soedan",
    // Azië
    "Afghanistan",
    "Bahrein",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Burma (Myanmar)",
    "Cambodia",
    "China",
    "India",
    "Indonesië",
    "Iran",
    "Irak",
    "Israël",
    "Japan",
    "Jordanië",
    "Kazakhstan",
    "Koeweit",
    "Kyrgyzstan",
    "Laos",
    "Libanon",
    "Maleisië",
    "Malediven",
    "Mongolië",
    "Nepal",
    "Noord Korea",
    "Oezbekistan",
    "Oman",
    "Oost Timor",
    "Pakistan",
    "Philippijnen",
    "Qatar",
    "Rusland",
    "Saudi Arabië",
    "Singapoor",
    "Sri Lanka",
    "Syrië",
    "Tajikistan",
    "Thailand",
    "Turkije",
    "Turkmenistan",
    "Verenigde Arabische Emiraten",
    "Vietnam",
    "Yemen",
    "Zuid Korea",
    // Europa
    "Albanië",
    "Andorra",
    "Armenië",
    "Azerbaijan",
    "België",
    "Bosnië en Herzegovina",
    "Bulgarië",
    "Cyprus",
    "Denemarken",
    "Estland",
    "Finland",
    "Frankrijk",
    "Georgië",
    "Duitsland",
    "Griekenland",
    "Hongarije",
    "IJsland",
    "Ierland",
    "Italë",
    "Kroatië",
    "Letland",
    "Liechtenstein",
    "Litouwen",
    "Luxemburg",
    "Macedonië",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Nederland",
    "Noorwegen",
    "Oekraëne",
    "Oostenrijk",
    "Polen",
    "Portugal",
    "Romanië",
    "San Marino",
    "Servië",
    "Slovakije",
    "Slovenenië",
    "Spanje",
    "Tsechië",
    "Vaticaanstad",
    "Verenigd Koninkrijk",
    "Wit Rusland",
    "Zweden",
    "Zwitzerland",
    // Noord Amerika
    "Antigua en Barbuda",
    "Bahama's",
    "Barbados",
    "Belize",
    "Canada",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominicaanse Republiek",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Haïti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "St. Kitts & Nevis",
    "St. Lucia",
    "St. Vincent en de Grenadines",
    "Trinidad & Tobago",
    "Verenigde Staten",
    // Oceanië
    "Australië",
    "Fiji eilanden",
    "Kiribati",
    "Marshall Eilanden",
    "Micronesië",
    "Nauru",
    "Nieuw Zeeland",
    "Palau",
    "Papua Nieuw Guinea",
    "Samoa",
    "Solomon Eilanden",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
    // Zuid Amerika
    "Argentinië",
    "Bolivia",
    "Brazilië",
    "Chili",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
    //Fictionlands
    "badlands",
    "Ashfeld",
    "Tamriel",
    "Los santos",

];

// een class

AutoVuller = function() {
  this.minimAantalKar = 2;
  this.veld           = 0; //het inputveld waar de autocomplete meot werken
  this.helper = document.createElement('div'); //dit geeft de suggesties weer
  document.body.appendChild(this.helper);
};

AutoVuller.prototype = {
  volgInvoer: (invoer, self) => {
    if (invoer.length >= self.minimAantalKar) {
      self.helper.style.display = 'block';
      self.vergelijk(invoer,self)
      console.log(invoer); // om direct te testen
    } else {
      console.log('verbergen');
      self.verbergHelper(self);
    }

},
vergelijk: (inv,self) => {
  let lijst = [];
  self.helper.innerHTML = ''; // alsff er al sugesties waren.
  for(let i=0; i<landen.length; i++) {
    if(inv.toLowerCase() == landen[i].substr(0, inv.length).toLowerCase()) {
      lijst.push(landen[i]);
    }
  }
  if(lijst.length>=1) {
    self.toon(lijst,self);
  }
},
toon: (arrLijst, self) => {
    console.log(arrLijst);
    // eerdere exemplaren
    self.helper.innerHTML = '';
    for (let i = 0; i < arrLijst.length; i++) {
        let linkje = document.createElement('span');
        linkje.id = "span";
        linkje.innerHTML = arrLijst[i];
        self.helper.appendChild(linkje);
        linkje.addEventListener('click', ()=> {
            self.voerWaardeIn(arrLijst[i],self);
        });
    }
    self.positioneerHelper(self.helper,self);
},

positioneerHelper: (el,self) => {
    let elem = self.veld;
    el.style.width = elem.offsetWidth - 42 + 'px';
    el.style.width = elem.offsetLeft + 11 + 'px';
    el.style.top = elem.offsetHeight + elem.offsetTop + 'px';
},
voerWaardeIn: (land, self) => {
    self.veld.value = land;
    self.verbergHelper(self);
},

verbergHelper: (self) => {
  self.helper.style.display = 'none';

},
init: function(idVanHetVeld){
  this.veld = document.getElementById(idVanHetVeld);
  if( !this.veld) {
    alert('Verkeerde invoer!');
  } else {
    //maak een variable om telkens binnen de class naar te verwijzen
    var self = this;
    this.veld.onkeyup = () => {
      self.volgInvoer(this.veld.value, self);
     }
         this.veld.onblur = () => {
             setTimeout(() => {
                 self.verbergHelper(self);
             }, 1000);
         }
   }
  }
}

let AV = new AutoVuller();

// opstarten
AV.init('landen');
document.getElementById('landen').focus();
