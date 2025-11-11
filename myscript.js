function showCourses() {
    fetch("http://localhost:8081/courses")
        .then((response) => response.json())
        .then((courses) => {
            const dataTable = document.getElementById("coursetable");
            dataTable.innerHTML = ""; 

            courses.forEach(course => {
                const row = `
                    <tr>
                        <td>${course.courseId}</td>
                        <td>${course.coursename}</td>
                        <td>${course.traineer}</td>
                        <td>${course.courseduration_in_weeks}</td>
                    </tr>`;
                dataTable.innerHTML += row;
            });
        })
}

function showenrolledstudents(){
    fetch("http://localhost:8081/courses/enrolled")
        .then((response) => response.json())  
        .then((students) => {
            const dataTable = document.getElementById("enrolledtable");
            dataTable.innerHTML = ""; 

            students.forEach(student => {
                const row = `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.emailid}</td>
                        <td>${student.coursename}</td>
                    </tr>`;
                dataTable.innerHTML += row;
            });
        })
}