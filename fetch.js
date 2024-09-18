// To view student_user from HOME PAGE and ABOUT PAGE
loadStudentData('A21-0398');
function loadStudentData(Student_ID){

    fetch(`https://api-08m2.onrender.com/student_user/view/${Student_ID}`)
    .then(response => response.json())
    .then(data => {

        if(data){

            // For typed.js
            const fullName = `${data.First_Name} ${data.Last_Name}`;
            const age = `${data.Age} Years Old`;
            const gender = `Male`;

            var typed = new Typed(".auto-typed", {

                strings: [fullName, age, gender],
                typeSpeed: 60,
                backSpeed: 60,
                loop: true

            });

            // To view the grade and section from the HOME PAGE
            document.querySelector("#gradesection").textContent = data.Grade_Section;

            // To view the About me in the ABOUT PAGE
            document.querySelector("#aboutme").textContent = data.About_Me;

            // To view the demographics from the ABOUT PAGE
            const demographicsSpans = document.querySelectorAll(".demographics span");
            demographicsSpans[0].textContent = `${data.Age} Years Old`;
            demographicsSpans[1].textContent = new Date(data.Birthday).toLocaleDateString();
            demographicsSpans[2].textContent = data.Phone_Number;
            demographicsSpans[3].textContent = data.Email;

        }else{

            console.log("No data huhu");

        }

    })

    .catch(error => console.log(`Error fetching: ${error}`));

}

// <=========================== TO UPDATE THE INFORMATION OF THE USER ===========================>
function updateMember(Student_ID){

    fetch(`https://api-08m2.onrender.com/student_user/view/${Student_ID}`)
    .then(response => response.json())
    .then(data => {

        if(data){

            document.querySelector("#fname").value = data.First_Name;
            document.querySelector("#mname").value = data.Middle_Name;
            document.querySelector("#lname").value = data.Last_Name;
            document.querySelector("#gradeSection").value = data.Grade_Section;
            document.querySelector("#bio").value = data.About_Me;
            document.querySelector("#age").value = data.Age;

            const formattedDate = new Date(data.Birthday).toISOString().split('T')[0];
            document.querySelector("#bday").value = formattedDate;

            document.querySelector("#phone").value = data.Phone_Number;
            document.querySelector("#email").value = data.Email;

            showEditDialog(true);

        }else{

            console.log("No data na naman huhu");

        }

    })

    .catch(error => console.log(`Error fetching: ${error}`));

    const updateButton = document.querySelector("#updateButton");

    if(updateButton){

        updateButton.addEventListener("click", () => {

            const fname = document.querySelector("#fname").value;
            const mname = document.querySelector("#mname").value;
            const lname = document.querySelector("#lname").value;
            const grade_section = document.querySelector("#gradeSection").value;
            const about = document.querySelector("#bio").value;
            const age = document.querySelector("#age").value;
            const bday = document.querySelector("#bday").value;
            const phone = document.querySelector("#phone").value;
            const email = document.querySelector("#email").value;
                      
            const formData = { fname, mname, lname, grade_section, about, age, bday, phone, email, student_id: Student_ID };

            fetch("https://api-08m2.onrender.com/student_user/update", {

                method: "PUT",
                body: JSON.stringify(formData),
                headers: {

                    "Content-Type" : "application/json",

                },

            })

            .then(response => response.json())
            .then(() => {

                alert("Successfully Updated!");
                showEditDialog(false);
                location.reload();

            })
 
            .catch(error => console.log(error));

        });

    }

}
