// document.addEventListener("DOMContentLoaded", (event) => {});

let addresses,
  nameArray = [],
  addr1Array = [],
  addr2Array = [],
  cityArray = [],
  stateArray = [],
  zipArray = [];
const lookupLimit = 100;

document.addEventListener("DOMContentLoaded", function (event) {
  loadFunc();
});

const loadFunc = async () => {
  const response = await fetch(
    "http://localhost/turk_backend/rest.php/addresses",
    {
      method: "GET",
    }
  );

  const res = await response.json();

  addresses = res.map((element) => {
    element["complete_address"] =
      element.name + " " +
      element.addr1 + " " +
      element.addr2 + " " +
      element.state + " " +
      element.city + " " +
      element.zip;

    return element;
  });

  console.log("addresses: ", addresses);

  autocomplete(document.getElementById("ship_to_name"), addresses);
  autocomplete(document.getElementById("ship_to_address1"), addresses);
  autocomplete(document.getElementById("ship_to_address2"), addresses);
  autocomplete(document.getElementById("ship_to_city"), addresses);
  autocomplete(document.getElementById("ship_to_state"), addresses);
  autocomplete(document.getElementById("ship_to_zip"), addresses);

};

const findRecord = (selectedValue, field) => {
  addresses.forEach((element) => {
    if (element[field] === selectedValue) {
      console.log(element);

      $("#ship_to_name").val(element["name"]);
      $("#ship_to_address1").val(element["addr1"]);
      $("#ship_to_address2").val(element["addr2"]);
      $("#ship_to_city").val(element["city"]);
      $("#ship_to_state").val(element["state"]);
      $("#ship_to_zip").val(element["zip"]);
    }
  });
};

const removeDuplicates = (data) => {
  var newData = [];
  $.each(data, function (i, el) {
    if ($.inArray(el, newData) === -1) newData.push(el);
  });
  return newData;
};

let rotated = false;
function rotate() {
  const img = document.getElementById("image");
  if (rotated == false) {
    img.style.transform = "rotate(180deg)";
    rotated = true;
  } else {
    img.style.transform = "rotate(0deg)";
    rotated = false;
  }
}

async function submit() {
  const ship_from_name = document.getElementById("ship_from_name").value;
  const ship_from_address1 =
    document.getElementById("ship_from_address1").value;
  const ship_from_address2 =
    document.getElementById("ship_from_address2").value;
  const ship_from_city = document.getElementById("ship_from_city").value;
  const ship_from_state = document.getElementById("ship_from_state").value;
  const ship_from_zip = document.getElementById("ship_from_zip").value;

  const ship_to_name = document.getElementById("ship_to_name").value;
  const ship_to_address1 = document.getElementById("ship_to_address1").value;
  const ship_to_address2 = document.getElementById("ship_to_address2").value;
  const ship_to_city = document.getElementById("ship_to_city").value;
  const ship_to_state = document.getElementById("ship_to_state").value;
  const ship_to_zip = document.getElementById("ship_to_zip").value;

  const return_address_name = document.getElementById(
    "return_address_name"
  ).value;
  const return_address_address1 = document.getElementById(
    "return_address_address1"
  ).value;
  const return_address_address2 = document.getElementById(
    "return_address_address2"
  ).value;
  const return_address_city = document.getElementById(
    "return_address_city"
  ).value;
  const return_address_state = document.getElementById(
    "return_address_state"
  ).value;
  const return_address_zip =
    document.getElementById("return_address_zip").value;

  const flat_rate_select = document.getElementById("flat_rate");
  var flat_rate = flat_rate_select.options[flat_rate_select.selectedIndex].text;

  const service_select = document.getElementById("service");
  var service = service_select.options[service_select.selectedIndex].text;

  const weight_ibs = document.getElementById("weight_ibs").value;
  const weight_oz = document.getElementById("weight_oz").value;

  const x = document.getElementById("dimension_x").value;
  const y = document.getElementById("dimension_y").value;
  const z = document.getElementById("dimension_z").value;

  const dimensions = x + "*" + y + "*" + z;

  let bodyData = {
    ship_from_name: ship_from_name,
    ship_from_address1: ship_from_address1,
    ship_from_address2: ship_from_address2,
    ship_from_city: ship_from_city,
    ship_from_state: ship_from_state,
    ship_from_zip: ship_from_zip,
    ship_to_name: ship_to_name,
    ship_to_address1: ship_to_address1,
    ship_to_address2: ship_to_address2,
    ship_to_city: ship_to_city,
    ship_to_state: ship_to_state,
    ship_to_zip: ship_to_zip,
    return_address_name: return_address_name,
    return_address_address1: return_address_address1,
    return_address_address2: return_address_address2,
    return_address_city: return_address_city,
    return_address_state: return_address_state,
    return_address_zip: return_address_zip,
    flat_rate: flat_rate,
    service: service,
    weight_ibs: weight_ibs,
    weight_oz: weight_oz,
    dimensions: dimensions,
  };

  console.log("bodyData---", bodyData);

  const response = await fetch("http://localhost/turk_backend/rest.php/data", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  alert(myJson.message);
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.style.maxHeight = "500px";
    a.style.overflowY = "scroll";
    a.style.borderWidth = "1px";
    a.style.borderStyle = "solid";
    a.style.borderColor = "black";
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    let count = 0;  //suggestion limitation
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i]["complete_address"].toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        // b.innerHTML = "<strong>" + arr[i]["complete_address"].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i]["complete_address"];
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + i + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          // inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
        (or any other open lists of autocompleted values:*/
          closeAllLists();

          console.log("arr[i]: ", arr[i], "index: ", i);
          const index = this.getElementsByTagName("input")[0].value;

          $("#ship_to_name").val(arr[index]["name"]);
          $("#ship_to_address1").val(arr[index]["addr1"]);
          $("#ship_to_address2").val(arr[index]["addr2"]);
          $("#ship_to_city").val(arr[index]["city"]);
          $("#ship_to_state").val(arr[index]["state"]);
          $("#ship_to_zip").val(arr[index]["zip"]);

        });
        a.appendChild(b);

        if (count > 100){
          break;
        }
        count++;
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
  increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
  decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
