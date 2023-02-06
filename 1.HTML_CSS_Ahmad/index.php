<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Sign In</title>
</head>
<body class="d-flex align-items-center">
<div class="container">
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
<!--                    <form action="http://ser-info-03.ec-nantes.fr/prweb/test.php" method="POST">-->
                    <form>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" name="username">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                        <button type="submit" class="btn btn-primary w-100" id="submitButton">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    $("#submitButton").click(function(event) {
        event.preventDefault();
        verifyUser();
    });
</script>

<script>
    function verifyUser() {
        $.ajax({
            type: "POST",
            url: "login.php",
            method: "POST",
            async: false,
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            success: function(response) {
                if (response === "success") {
                    window.location.href = "users.php";
                    // alert("success");
                } else {
                    alert("Incorrect username or password");
                }
            }
        });
    }
</script>


</body>
</html>
