<!DOCTYPE html>
<html lang="en"/>
<head>
    <title>User Edit</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">
</head>
<body>
<div class="container">
    <?php include_once 'myNavBar.php'; ?>
    <form>
        <table class="table">
            <caption>User Edit</caption>
            <thead>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>First Name:</td>
                <td>
                    <input type="text" name="first_name" class="form-control">
                </td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td>
                    <input type="text" name="last_name" class="form-control">
                </td>
            </tr>
            <tr>
                <td>Birthdate:</td>
                <td>
                    <input type="date" name="birthdate" class="form-control">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit" class="btn btn-primary">Save</button>
                </td>
            </tr>
            </tbody>
        </table>
    </form>
</div>
</body>
</html>
