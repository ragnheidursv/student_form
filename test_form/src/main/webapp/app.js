
/* This variable is incremented by 1 every time the user clicks the "Submit" button. Display the "No" column, and the position of rows when added to the table
 */
var id = 1;

// Show a table after submit
function score_table() {
    document.getElementById("divTable").style.display = "block";

    // Gathering the data after submit
    let form_data = get_form_data()

    // Clear form for next input
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("math").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
    $("input:radio[name=type]:checked")[0].checked = false;
    $("input:radio[name=gender]:checked")[0].checked = false;

    // Insert row
    var table = document.getElementById("tableScore");
    var row = table.insertRow(id);
    var number = row.insertCell(0);
    var name = row.insertCell(1);
    var email = row.insertCell(2);
    var gender = row.insertCell(3);
    var birthday = row.insertCell(4);
    var phonenumber = row.insertCell(5);
    var type = row.insertCell(6);
    var math = row.insertCell(7);
    var physics = row.insertCell(8);
    var chemistry = row.insertCell(9);
    var avg = row.insertCell(10);

    number.innerHTML = id;
    name.innerHTML = form_data["name"];
    email.innerHTML = form_data["name"];
    gender.innerHTML = form_data["gender"];
    birthday.innerHTML = form_data["birthday"];
    phonenumber.innerHTML = form_data["phonenumber"];
    type.innerHTML = form_data["type"];
    math.innerHTML = form_data["math"];
    physics.innerHTML = form_data["physics"];
    chemistry.innerHTML = form_data["chemistry"];
    avg.innerHTML = form_data["avg"];

    id++;
}

function validate_form() {
    let email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (document.getElementById("name").value==null || document.getElementById("name").value=="") {
        alert("Name can't be blank");
    }
    else if (!(document.getElementById("email").value).match(email_regex)) {
        alert("Email not valid");
    }

    // guarantee that radio button has been checked
    else if ($('input[name=type]:checked').length == 0) {
        alert("Student type must be selected");
    }

    else if (document.getElementById("birthday").value==null || document.getElementById("birthday").value=="") {
        alert("Birthday can't be blank");
    }
    else if (document.getElementById("math").value==null || document.getElementById("math").value=="") {
        alert("Math Grade can't be blank");
    }
    else if (document.getElementById("chemistry").value==null || document.getElementById("chemistry").value=="") {
        alert("Chemistry Grade can't be blank");
    }
    else if (document.getElementById("physics").value==null || document.getElementById("physics").value=="") {
        alert("Physics Grade can't be blank");
    }

    else {
        score_table();
    }


}

function get_form_data() {
    let form_data = {}
    form_data["name"] = document.getElementById("name").value;
    form_data["email"] = document.getElementById("email").value;
    form_data["gender"] = document.querySelector('input[name="gender"]:checked').value;
    form_data["birthday"] = document.getElementById("birthday").value;
    form_data["phonenumber"] = document.getElementById("phonenumber").value;
    form_data["type"] = document.querySelector('input[name="type"]:checked').value;
    form_data["math"] = document.getElementById("math").value;
    form_data["physics"] = document.getElementById("physics").value;
    form_data["chemistry"] = document.getElementById("chemistry").value;

    form_data["avg"] =
        (parseFloat(form_data["math"]) +
            parseFloat(form_data["physics"]) +
            parseFloat(form_data["chemistry"])) /
        4;

    return form_data
}
function useless_function(){
    /* This function
    is completely useless and should therefore
    be removed completely.
    Thank you!
    :)
     */
    return
}

function showBest() {
    var colAvg = document
        .getElementById("tableScore")
        .querySelectorAll("td:nth-child(11n)");
    var rowAvg = document
        .getElementById("tableScore")
        .querySelectorAll("tr:nth-child(1n)");

    for (var i = 0; i < colAvg.length; i++) {
        var avg = parseFloat(colAvg[i].innerText);
        if (avg >= 8) {
            rowAvg[i + 1].style.background = "yellow";
        } else {
        }
    }
}
