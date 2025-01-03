document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // পেজ রিফ্রেশ বন্ধ করা
  
    const formData = new FormData(this);
  
    fetch("save_data.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("ডেটা সফলভাবে সংরক্ষণ হয়েছে!");
        } else {
          alert("ডেটা সংরক্ষণে সমস্যা হয়েছে।");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  