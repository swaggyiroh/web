<script>
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;

    star.style.animationDuration = `${Math.random() * 3 + 2}s`;

}

function generateStars() {
    setInterval(createStar, 100);
}

</script>

<style>
body {
    margin: 0;
    overflow: hidden;
    background: black;
}

.star {
    position: absolute;
    background: white;
    width: 2px;
    height: 2px;
    opacity: 0;
    border-radius: 50%;
    animation: twinkle 3s ;
}

@keyframes twinkle {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>