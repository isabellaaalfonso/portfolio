document.addEventListener('DOMContentLoaded', function () {
    // Cursor trail droplets
    let lastDropletTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastDropletTime > 100) {
            const droplet = document.createElement('div');
            droplet.className = 'cursor-droplet';
            droplet.style.left = e.clientX + 'px';
            droplet.style.top = e.clientY + 'px';
            document.body.appendChild(droplet);

            setTimeout(() => droplet.remove(), 800);
            lastDropletTime = now;
        }
    });

    // Floating particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        const duration = Math.random() * 5 + 5;
        particle.style.animationDuration = duration + 's';
        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), duration * 1000);
    }

    for (let i = 0; i < 15; i++) {
        createParticle();
    }
    
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < 15) {
            createParticle();
        }
    }, 2000);
});
