document.addEventListener('DOMContentLoaded', function() {
    const modules = document.querySelectorAll('.modules-list li');
    const moduleContents = document.querySelectorAll('.module-content');

    modules.forEach(module => {
        module.addEventListener('click', function() {
            const moduleId = this.getAttribute('onclick').split("'")[1];

            moduleContents.forEach(content => {
                content.style.display = 'none';
            });

            document.getElementById(moduleId).style.display = 'block';
        });
    });

    // Display the first module by default
    if (moduleContents.length > 0) {
        moduleContents[0].style.display = 'block';
    }
});
