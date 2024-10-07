window.onload = function() {
    const marker = document.querySelector("a-marker");
    const model = document.querySelector("[gltf-model]");

    console.log("Script loaded");

    marker.addEventListener("markerFound", (e) => {
        console.log("Marker Found");
        model.setAttribute("visible", true);
    });

    marker.addEventListener("markerLost", (e) => {
        console.log("Marker Lost");
        model.setAttribute("visible", false);
    });

    // Remove the loader when the experience is ready
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', function () {
        console.log("Scene loaded");
        const loader = document.querySelector('.arjs-loader');
        loader.style.display = 'none';
    });

    // Log any asset loading errors
    const assets = document.querySelector('a-assets');
    assets.addEventListener('error', function(e) {
        console.error('Error loading asset:', e);
    });
};

