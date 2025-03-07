document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    
    const applicationInfo = `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nNiveau d'études: ${education}`;
    
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = '<h3 class="qr-title">Votre QR Code d\'inscription</h3>'; // Reset QR code container
    
    const qrcode = new QRCode(qrcodeContainer, {
        text: applicationInfo,
        width: 256,
        height: 256,
        colorDark : "#000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    alert('Merci pour votre candidature ! Nous l\'examinerons attentivement et vous contacterons prochainement. Votre QR Code d\'inscription a été généré ci-dessous.');
});