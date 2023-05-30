window.onload = function() {
  var fbLink = document.getElementById('fb-link');
  var urlMobile = "fb://profile/100093188703570";
  var urlDesktop = "https://www.facebook.com/profile.php?id=100093188703570"; // Replace this with the correct URL for your Facebook Page

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    fbLink.href = urlMobile;
  } else {
    fbLink.href = urlDesktop;
  }
}

