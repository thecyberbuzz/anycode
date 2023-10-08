document.addEventListener('DOMContentLoaded', function () {
    const contributeBtn = document.getElementById('contributeBtn');
    const contributeSection = document.getElementById('contributeSection');
    const projectsSection = document.getElementById('projectsSection');

    // Show the "How to Contribute" section when the button is clicked
    contributeBtn.addEventListener('click', function () {
        contributeSection.classList.remove('hidden');
        projectsSection.classList.add('hidden');
    });

    // Simulate loading projects (you can replace this with actual data)
    setTimeout(function () {
        const projectList = document.getElementById('projectList');
        projectList.innerHTML = `
            <li><a href="https://github.com/project4">Project 4</a></li>
            <li><a href="https://github.com/project5">Project 5</a></li>
            <li><a href="https://github.com/project6">Project 6</a></li>
        `;
        projectsSection.classList.remove('hidden');
    }, 3000);
});