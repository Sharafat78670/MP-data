const divisions = {
    "ঢাকা": {
      "জেলা": ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
      "আসন": {
        "ঢাকা": ["ঢাকা-১", "ঢাকা-২"],
        "গাজীপুর": ["গাজীপুর-১", "গাজীপুর-২"],
        "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ-১", "নারায়ণগঞ্জ-২"]
      }
    },
    "চট্টগ্রাম": {
      "জেলা": ["চট্টগ্রাম", "কক্সবাজার", "রাঙামাটি"],
      "আসন": {
        "চট্টগ্রাম": ["চট্টগ্রাম-১", "চট্টগ্রাম-২"],
        "কক্সবাজার": ["কক্সবাজার-১", "কক্সবাজার-২"],
        "রাঙামাটি": ["রাঙামাটি-১"]
      }
    }
  };
  
  // Populate divisions
  const divisionSelect = document.getElementById("division");
  const districtSelect = document.getElementById("district");
  const constituencySelect = document.getElementById("constituency");
  
  Object.keys(divisions).forEach((division) => {
    const option = document.createElement("option");
    option.value = division;
    option.textContent = division;
    divisionSelect.appendChild(option);
  });
  
  // Update districts when a division is selected
  divisionSelect.addEventListener("change", (event) => {
    const selectedDivision = event.target.value;
    districtSelect.innerHTML = '<option value="">জেলা নির্বাচন করুন</option>';
    constituencySelect.innerHTML = '<option value="">আসন নির্বাচন করুন</option>';
  
    if (selectedDivision) {
      const districts = divisions[selectedDivision]["জেলা"];
      districts.forEach((district) => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    }
  });
  
  // Update constituencies when a district is selected
  districtSelect.addEventListener("change", (event) => {
    const selectedDivision = divisionSelect.value;
    const selectedDistrict = event.target.value;
    constituencySelect.innerHTML = '<option value="">আসন নির্বাচন করুন</option>';
  
    if (selectedDistrict) {
      const constituencies =
        divisions[selectedDivision]["আসন"][selectedDistrict];
      constituencies.forEach((constituency) => {
        const option = document.createElement("option");
        option.value = constituency;
        option.textContent = constituency;
        constituencySelect.appendChild(option);
      });
    }
  });
  