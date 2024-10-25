<!DOCTYPE html>

<html>
    <header>
        <title>Sign Up page</title>
        <link rel = "stylesheet" href = "signup.css">
    </header>

    <body>

        <div class = "nav">
            hello
        </div>
        <div class = "pass_error"></div>

        <div class = "container">
            <div class = "logo"></div>

            <form method = "post" action = "signup.php" class = "signup_form" >
                <div>
                    <label for = "username" class = "cred">Username</label><br/>
                    <input name = "username" type = "text" class = "username" placeholder = "Enter your username">
                </div>
                <div>
                    <label for = "phone" class = "cred">Phone Number</label><br/>
                    <input oninput = "checkLength(this)" name = "phone" type = "number" class = "phone" placeholder = "Enter phone number">
                </div>
                <div>
                    <label for = "password" class = "cred">Password</label><br/>
                    <input name = "password" type = "password" class = "password" placeholder = "Enter your password">
                </div>
                <div>
                    <label for = "cpassword" class = "cred">Confirm Password</label><br/>
                    <input name = "cpassword" type = "password" class = "cpassword" placeholder = "Confirm your password">
                </div>
                <div>
                    <button type = "submit" name = "signup" class = "signup">Sign Up</button>
                </div>
            </form>
        </div>

    </body>
    <script src = "signup.js"></script>
</html>