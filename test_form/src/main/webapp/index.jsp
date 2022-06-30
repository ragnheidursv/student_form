<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="main.css" />
</head>

<body>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="http://code.jquery.com/jquery.min.js?a"></script>
<script src="app.js?a"></script>

<h1 align="center">Student Form</h1>

<!--
This is a form for users to enter scores
-->
<table align="center" class="table">
    <tr>
        <td>Name:</td>
        <td colspan="4"><input name="name" id="name" type="text" maxlength="30" /></td>
    </tr>

    <tr>
        <td>Email:</td>
        <td colspan="4"><input name="email" id="email" type="email" maxlength="50" /></td>
    </tr>

    <tr>
        <td>Gender:</td>
        <td>
            <input name="gender" id="gender" type="radio" value="Female" />Female
        </td>
        <td>
            <input name="gender" id="gender" type="radio" value="Male" />Male
        </td>
        <td colspan="2">
            <input name="gender" id="gender" type="radio" value="Other" />Other
        </td>
    </tr>

    <tr>
        <td>Student Type:</td>
        <td>
            <input name="type" id="type" type="radio" value="Freshman" />Freshman
        </td>
        <td>
            <input name="type" id="type" type="radio" value="Junior" />Junior
        </td>
        <td>
            <input name="type" id="type" type="radio" value="Sophomore" />Sophomore
        </td>
        <td>
            <input name="type" id="type" type="radio" value="Senior" />Senior
        </td>
    </tr>

    <tr>
        <td>Phonenumber:</td>
        <td colspan="4"><input name="phonenumber" id="phonenumber" type="number" required /></td>
    </tr>

    <tr>
        <td>Birthday:</td>
        <td colspan="4"><input name="birthday" id="birthday" type="date" required /></td>
    </tr>

    <tr>
        <td>Math Grade:</td>
        <td colspan="4"><input name="math" id="math" type="number" /></td>
    </tr>

    <tr>
        <td>Physics Grade:</td>
        <td colspan="4"><input name="physics" id="physics" type="number" /></td>
    </tr>

    <tr>
        <td>Chemistry Grade:</td>
        <td colspan="4"><input name="chemistry" id="chemistry" type="number" /></td>
    </tr>

    <td colspan="5" >
        <button type="submit" onclick="return validate_form()">Submit</button>
    </td>
</table>

<!--
This table below must not show when user access the browser,
it only show after user enter score and click the "Submit" button with 2 button below
-->
<div id="divTable">
    <table id="tableScore" border="2" class="table">
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Birthday</th>
        <th>Phonenumber</th>
        <th>Student Type</th>
        <th>Math</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Average Score</th>
    </table>

    <button onclick="showBest()">Best student</button>
    <!--Determine if any average score >= 8 hightlight all the text into red-->
</div>
</body>
</html>
