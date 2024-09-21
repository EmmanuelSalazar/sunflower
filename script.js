document.addEventListener('DOMContentLoaded', () => {
    const sunflower = document.getElementById('sunflower');
    let rotation = 0;

    function animate() {
        rotation += 0.5;
        sunflower.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
    }

    animate();
});