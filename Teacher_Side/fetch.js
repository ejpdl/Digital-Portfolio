loadStudentData('A22-0092');
async function loadStudentData(Student_ID){

    try{

        const response = await fetch(`http://localhost:5000/student_user/view/${Student_ID}`);
        const data = await response.json();

        if(!data) {

            throw new Error("No data found");

        }

        document.querySelector("#Name").textContent = data.First_Name;

    }catch(e){

        console.error(e);

    }

}