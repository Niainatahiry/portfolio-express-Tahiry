document.addEventListener('DOMContentLoaded', function() {
    const nom = document.getElementById('nom-famille');
    const prenom = document.getElementById('prenom');
    const biographieP = document.getElementById('bio-p');
    const lignereseau = document.getElementById('ligne-reseau');
    const reseaux = document.querySelector('.reseau-sociaux-container');
    const picture = document.querySelector('.picture');
  
    const acceuilTimeline = gsap.timeline();



        acceuilTimeline.set(nom, { visibility: 'visible' });
        acceuilTimeline.to(nom, { opacity: '1', duration: 1 , ease: Power1});
        acceuilTimeline.to(nom, { y: '0', duration: 1 , ease: Power1},'<');
        acceuilTimeline.set(prenom, {visibility: 'visible'},'-=0.5');
        acceuilTimeline.to(prenom, { opacity:'1', duration: 1 },'-=0.5');
        acceuilTimeline.to(prenom, { y: '0', duration: 1 , ease: Power1},'<');
        acceuilTimeline.to(biographieP, { y:'0', duration:1, ease: Power1},'-=0.3');
        acceuilTimeline.to(reseaux, { opacity: '1', duration: 1, ease: Power1});
        acceuilTimeline.to(picture, { x: '-10%', y: '-10%', duration: 1, ease: Power1});
        acceuilTimeline.to(lignereseau, { opacity:'1',duration: 0.5, ease: Power1});
        acceuilTimeline.to(lignereseau, { width:'35%',duration: 0.5, ease: Power1},'<');

});
