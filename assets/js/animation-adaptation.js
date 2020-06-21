function setViewBox () {
  var viewBox = ($('#line svg').attr('viewBox')).split(' ');
  if(window.innerWidth < 1500 && window.innerWidth >= 1300) {
    viewBox[1] = '580';
    $('#line svg').attr('viewBox', viewBox.join(' '));
  } else if (window.innerWidth < 1300 && window.innerWidth >= 1200) {
    viewBox[1] = '640';
    $('#line svg').attr('viewBox', viewBox.join(' '));
  } else if (window.innerWidth < 1200 && window.innerWidth >= 1100) {
    viewBox[1] = '450';
  } else if (window.innerWidth < 1100 && window.innerWidth >= 900) {
    viewBox[0] = '240';
    viewBox[1] = '450';
    $('#line svg').attr('viewBox', viewBox.join(' '));
  } else if (window.innerWidth < 900 && window.innerWidth > 767) {
    viewBox[0] = '280';
    viewBox[1] = '800';
    viewBox[2] = 1350;
    viewBox[3] = 1950;
    $('#line svg').attr('viewBox', viewBox.join(' '));
  }
}

function setViewBoxCatalog () {
  var viewBoxCatalog = ($('#catalog-lines svg').attr('viewBox')).split(' ');
  if(window.innerWidth < 1500 && window.innerWidth >= 1300) {
    viewBoxCatalog[1] = '580';
    $('#catalog-lines svg').attr('viewBox', viewBoxCatalog.join(' '));
  } else if (window.innerWidth < 1300 && window.innerWidth >= 1200) {
    viewBoxCatalog[1] = '580';
    $('#catalog-lines svg').attr('viewBox', viewBoxCatalog.join(' '));
  } else if (window.innerWidth < 1200 && window.innerWidth >= 1100) {
    viewBoxCatalog[1] = '450';
    $('#catalog-lines svg').attr('viewBox', viewBoxCatalog.join(' '));
  } else if (window.innerWidth < 1100 && window.innerWidth >= 767) {
    viewBoxCatalog[0] = '600';
    $('#catalog-lines svg').attr('viewBox', viewBoxCatalog.join(' '));
  }
}
function setViewBoxPreimushestvo () {
  var viewBoxCatalog = ($('#preimushestvo-line svg').attr('viewBox')).split(' ');
  if(window.innerWidth > 1920) {
    viewBoxCatalog[2] = '1430';
    viewBoxCatalog[3] = '2200';
    $('#preimushestvo-line svg').attr('viewBox', viewBoxCatalog.join(' '));
  } else if (window.innerWidth < 1720 && window.innerWidth > 1500) {
    viewBoxCatalog[2] = '1330';
    viewBoxCatalog[3] = '2100';
    $('#preimushestvo-line svg').attr('viewBox', viewBoxCatalog.join(' '));
  } else if (window.innerWidth < 1500) {
    viewBoxCatalog[0] = '250';
    viewBoxCatalog[1] = '500';
    viewBoxCatalog[2] = '1150';
    viewBoxCatalog[3] = '1850';
    $('#preimushestvo-line svg').attr('viewBox', viewBoxCatalog.join(' '));
  }
}

function setViewBoxPreimushestvoMap () {
  var viewBoxCatalog = ($('#map svg').attr('viewBox')).split(' ');
  if(window.innerWidth < 1200) {
    viewBoxCatalog[0] = '650';
    viewBoxCatalog[2] = '600';
    viewBoxCatalog[3] = '570';
    $('#map svg').attr('viewBox', viewBoxCatalog.join(' '));
  } 
}


if ($('#map svg').length) {
  setViewBoxPreimushestvoMap();
  window.addEventListener('resize', setViewBoxPreimushestvoMap);
}

if ($('#preimushestvo-line svg').length) {
  setViewBoxPreimushestvo();
  window.addEventListener('resize', setViewBoxPreimushestvo);
}