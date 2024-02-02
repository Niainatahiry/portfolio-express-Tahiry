document.addEventListener('DOMContentLoaded', function () {
    const facebookIcon = document.getElementById('facebook-icon');
    const githubIcon = document.getElementById('github-icon');
  
    if (facebookIcon) {
      facebookIcon.addEventListener('click', function () {
        window.open('https://www.facebook.com/niainatahiry.sarobidy.1', '_blank');
      });
    }
    if (githubIcon) {
      githubIcon.addEventListener('click', function () {
        window.open('https://github.com/Niainatahiry');
      });
    }
  });