// To view student_user from HOME PAGE and ABOUT PAGE
loadStudentData('A21-0398');
async function loadStudentData(Student_ID){

    try{

        const response = await fetch(`http://localhost:5000/student_user/view/${Student_ID}`);
        const data = await response.json();

        if(!data) {

            throw new Error("No data found");

        }

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


    }catch(error){

        console.error(`Error fetching: ${error}`);
        alert("An error occurred while loading student data.");

    }
        
}


// <=========================== TO UPDATE THE INFORMATION OF THE USER ===========================>
async function updateMember(Student_ID){

    try{

        const response = await fetch(`http://localhost:5000/student_user/view/${Student_ID}`);
        const data = await response.json();

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

    } catch(error){

        console.log(`Error fetching: ${error}`);

    }

    const updateButton = document.querySelector("#updateButton");

    if (updateButton){

        updateButton.onclick = async (e) => {

            e.preventDefault();

            const formData = new FormData();
            formData.append('fname', document.querySelector("#fname").value);
            formData.append('mname', document.querySelector("#mname").value);
            formData.append('lname', document.querySelector("#lname").value);
            formData.append('grade_section', document.querySelector("#gradeSection").value);
            formData.append('about', document.querySelector("#bio").value);
            formData.append('age', document.querySelector("#age").value);
            formData.append('bday', document.querySelector("#bday").value);
            formData.append('phone', document.querySelector("#phone").value);
            formData.append('email', document.querySelector("#email").value);
            formData.append('student_id', Student_ID);
            formData.append('image', document.querySelector("#profilePicture").files[0]);

            try {

                const updateResponse = await fetch("http://localhost:5000/student_user/update",{

                    method: "PUT",
                    body: formData

                });

                const result = await updateResponse.json();

                if (updateResponse.ok){

                    alert("Successfully Updated!");
                    showEditDialog(false);
                    location.reload();

                }else{

                    console.log(result.error);

                }

            }catch(error){

                console.log(error);

            }
        };
    }

}