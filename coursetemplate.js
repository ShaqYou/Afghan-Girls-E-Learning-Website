document.addEventListener('DOMContentLoaded', function() {
    
    const courseId = new URLSearchParams(window.location.search).get('id');
    const courses = {
        '1': {
            name: 'دوره جاوا اسکریپت',
            instructor: 'علی رضایی',
            description: 'این دوره شما را با مبانی جاوا اسکریپت آشنا می‌کند.'
        },
        '2': {
            name: 'دوره HTML و CSS',
            instructor: 'مریم قاسمی',
            description: 'این دوره به شما کمک می‌کند تا طراحی وب سایت را با HTML و CSS بیاموزید.'
        },
        '3': {
            name: 'دوره React',
            instructor: 'سارا احمدی',
            description: 'در این دوره، شما یاد خواهید گرفت که چگونه برنامه‌های وب با React ایجاد کنید.'
        },
        
    };

    const course = courses[courseId];

    if (course) {
        document.getElementById('course-name').textContent = course.name;
        document.getElementById('course-instructor').textContent = `مدرس: ${course.instructor}`;
        document.getElementById('course-description').textContent = course.description;
    } else {
        document.querySelector('.course-details').innerHTML = '<p>دوره مورد نظر یافت نشد.</p>';
    }
});
