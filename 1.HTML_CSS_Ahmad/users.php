<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <title>Users</title>
</head>
<body>
<div class="container">
    <?php include 'myNavBar.php'; ?>
    <table class="table">
        <caption>List of users</caption>
        <thead>
        <tr>
            <th>User #</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Birthdate</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>01/01/1980</td>
            <td>
                <a href="#">
                    <i class="fas fa-edit"></i>
                </a>
                <a href="#">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Doe</td>
            <td>02/01/1985</td>
            <td>
                <a href="#">
                    <i class="fas fa-edit"></i>
                </a>
                <a href="#">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <a href="#">
                    <i class="fas fa-plus"></i>
                </a>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
