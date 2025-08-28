window.onload = function() {
    loadHome();
}

async function loadHome() {
    const home = await cockpit.getSingleton("testModel");
    
    document.getElementById("flip-card-2-name").innerText = home["flip-card-2-name"]; 
}

