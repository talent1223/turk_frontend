// document.addEventListener("DOMContentLoaded", (event) => {});

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
    dimensions: dimensions
  };

  console.log('bodyData---',bodyData);

  const response = await fetch("http://localhost/turk_backend/rest.php/data", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json"
    },
  });

  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  alert(myJson.message);
}
