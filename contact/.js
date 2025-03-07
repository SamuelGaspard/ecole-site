<script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault()
            }'var prenom = document.getElementById('prenom').value;
            var nom = document.getElementById('nom').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            
            alert('Merci ' + prenom + ' ' + nom + ' ! Votre message a été envoyé. Nous vous contacterons bientôt à l\'adresse ' + email + '.');
            this.reset();
        
    </script>

