$(document).ready(function () {
  $("#btn-signup").click(function () {
    $name = $("#name").val();
    $email = $("#email").val();
    $password = $("#password").val();

    localStorage.setItem("name", JSON.stringify($name));
    localStorage.setItem("email", JSON.stringify($email));
    localStorage.setItem("password", JSON.stringify($password));

    localStorage.setItem("login_status", true);
    alert("register success");
  });

  $("#btn-login").click(function () {
    $email = $("#email").val();
    $password = $("#password").val();

    // $localName = localStorage.getItem('name');
    $localEmail = localStorage.getItem("email");
    $localPassword = localStorage.getItem("password");

    if (
      JSON.parse($localEmail) == $email &&
      JSON.parse($localPassword) == $password
    ) {
      alert("login success");
    }

    if (localStorage.getItem("login_status") == null) {
      localStorage.setItem("login_status", true);
    }
  });
});
