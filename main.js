    const correctPassword = "fffffffffHowdy!while<i++"; // Change this to your desired password

    document.getElementById("passwordForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting normally

      const input = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");

      if (input === correctPassword) {
        window.location.href = "https://google.com"; // Replace with your redirect URL
      } else {
        errorMsg.style.display = "block";
      }
    });

    window.addEventListener('load', function () {
      console.log('The Console Master greets you with a joyous "Howdy!"');
    });