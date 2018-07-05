var btns = document.querySelectorAll('.btn-container a');
var btns_active = document.querySelector('.active');

displayer('patient');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var btns_active = document.querySelector('.active');

    this.preventDefault;
    if (this.classList.contains('active')) {
      return
    }else {
      this.classList.toggle('active');
      btns_active.classList.remove('active');
    }
    var current_display = this.getAttribute('id');

    displayer(current_display)
  })
}


function displayer(to) {
  var display = to;

  var patient_displays = document.querySelectorAll('.display_patient');
  var medecin_displays = document.querySelectorAll('.display_medecin');

  if (display === 'patient') {
    console.log("is-patient");

    for (let i = 0; i < medecin_displays.length; i++) {
      medecin_displays[i].classList.add('hidden');
    }

    for (var i = 0; i < patient_displays.length; i++) {
      patient_displays[i].classList.remove('hidden');
    }

  }else if (display === 'medecin') {

    console.log("is-medecin");

    for (let i = 0; i < patient_displays.length; i++) {
      patient_displays[i].classList.add('hidden');
    }
    for (var i = 0; i < medecin_displays.length; i++) {
      medecin_displays[i].classList.remove('hidden');
    }
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  // gutter: 80,
  nav: true,
  controls: false
});
