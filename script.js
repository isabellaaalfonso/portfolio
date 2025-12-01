document.addEventListener('DOMContentLoaded', function () {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Cursor trail droplets - only on desktop
    if (!isMobile) {
        let lastDropletTime = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastDropletTime > 150) { // Increased delay
                const droplet = document.createElement('div');
                droplet.className = 'cursor-droplet';
                droplet.style.left = e.clientX + 'px';
                droplet.style.top = e.clientY + 'px';
                document.body.appendChild(droplet);

                setTimeout(() => droplet.remove(), 800);
                lastDropletTime = now;
            }
        });
    }

    // Floating particles - reduced count on mobile
    const particleCount = isMobile ? 5 : 10; // Reduced from 15
    
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

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
    
    // Maintain particle count - longer interval
    setInterval(() => {
        const currentParticles = document.querySelectorAll('.particle').length;
        if (currentParticles < particleCount) {
            createParticle();
        }
    }, 3000); // Increased from 2000ms
});
