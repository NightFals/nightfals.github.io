// Toggle Side Menu
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.style.display = (sideMenu.style.display === 'block') ? 'none' : 'block';
}

// Show the Selected Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-buttons button');

    sections.forEach(section => {
        section.style.display = (section.id === sectionId) ? 'block' : 'none';
    });

    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase() === sectionId);
    });
}
