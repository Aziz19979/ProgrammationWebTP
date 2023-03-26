<!DOCTYPE html>
<html lang="en"/>
<head>
    <title>Book Edit</title>
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
            <caption>Book Edit</caption>
            <thead>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Title:</td>
                <td>
                    <input type="text" name="title" class="form-control">
                </td>
            </tr>
            <tr>
                <td>Authors:</td>
                <td>
                    <input type="text" name="authors" class="form-control">
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
