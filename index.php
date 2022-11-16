<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Turk</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    
    <div class="content">
      <div class="left_div">
        <img
          src=<?php echo "./images/" . $_GET["image"] . ".jpg" ?>
          alt="image"
          class="image"
          id="image"
        />
      </div>

      <div class="right_div">
        <button
          type="button"
          class="btn btn-primary btn-sm rotate_button"
          onclick="rotate()"
        >
          Rotate Image
        </button>

        <div class="form">
          <label class="form-label ship_form">Ship Form</label>
          <div class="form_row">
            <label class="form-label flat_form_label">Name</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_from_name"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Address Line 1</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_from_address1"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Address Line 2</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_from_address2"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">City</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_from_city"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">State</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_from_state"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Zip</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_from_zip"
            />
          </div>
        </div>
        <div class="form">
          <label class="form-label ship_form">Ship To</label>
          <div class="form_row">
            <label class="form-label flat_form_label">Name</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_to_name"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Address Line 1</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_to_address1"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Address Line 2</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_to_address2"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">City</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_to_city"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">State</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_to_state"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Zip</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="ship_to_zip"
            />
          </div>
        </div>
        <div class="form">
          <label class="form-label ship_form">Return Address</label>
          <div class="form_row">
            <label class="form-label flat_form_label">Name</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="return_address_name"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Address Line 1</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="return_address_address1"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Address Line 2</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="return_address_address2"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">City</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="return_address_city"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">State</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="return_address_state"
            />
          </div>

          <div class="form_row">
            <label class="form-label flat_form_label">Zip</label>
            <input
              class="form-control form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="return_address_zip"
            />
          </div>
        </div>
        <div class="form">
          <label class="form-label ship_form"
            >Flat Rate and Predefined options</label
          >

          <div class="select_form">
            <select
              class="form-select form-select-sm flat_box"
              aria-label=".form-select-sm example "
              id="flat_rate"
            >
              <option value="0" selected></option>
              <option value="1">Flat</option>
              <option value="2">Padded Bubble Mailer</option>
              <option value="3">Parcel</option>
              <option value="4">Flat Rate Envelope</option>
              <option value="5">Flat Rate Legal Envelope</option>
              <option value="6">Flat Rate Padded Envelope</option>
              <option value="7">Small Flat Rate Box</option>
              <option value="8">Medium Flat Rate Box</option>
              <option value="9">Large Flat Rate Box</option>
              <option value="10">Regional Rate Box A</option>
              <option value="11">Regional Rate Box B</option>
            </select>
          </div>
        </div>

        <div class="form">
          <label class="form-label ship_form"
            >Service</label
          >

          <div class="select_form">
            <select
              class="form-select form-select-sm flat_box"
              aria-label=".form-select-sm example "
              id="service"
            >
              <option value="0" selected></option>
              <option value="1">USPS First Class</option>
              <option value="2">USPS Priority Mail 3 days</option>
              <option value="3">USPS Parcel Select 3-7 days</option>
              <option value="4">USPS Priority Express 1 day</option>
              <option value="5">UPS Ground</option>
              <option value="6">UPS 3 Day Select</option>
              <option value="7">UPS 2day Air</option>
              <option value="8">UPS Next Day Saver</option>
              <option value="9">UPS Next Day Air</option>
              <option value="10">UPS Next Dar Air Early AM</option>
            </select>
          </div>
        </div>

        <div class="form">
          <label class="form-label ship_form">Weight</label>
          <div class="form_row weight_form_item">
            <label class="form-label weight_form_label">ibs.: </label>
            <input
              class="form-control weight_form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="weight_ibs"
            />
          </div>
          <div class="form_row weight_form_item">
            <label class="form-label weight_form_label"> &nbsp;oz.: </label>
            <input
              class="form-control weight_form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="weight_oz"
            />
          </div>
        </div>
        <div class="form">
          <label class="form-label ship_form">Dimensions</label>
          <div class="form_row weight_form_item">
            <input
              class="form-control dimension_form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="dimension_x"
            />
            *
            <input
              class="form-control dimension_form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="dimension_y"
            />
            *
            <input
              class="form-control dimension_form_input"
              type="text"
              aria-label=".form-control-sm example"
              id="dimension_z"
            />
          </div>
        </div>
        <div class="form button_group">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            onclick="submit()"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
    <script src="javascript.js"></script>
  </body>
</html>
