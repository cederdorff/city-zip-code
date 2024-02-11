async function fetchCityInfo() {
  const zipCodeInput = document.querySelector("#zipCodeInput");
  const cityInfoInput = document.querySelector("#cityInfoInput");
  const error = document.querySelector("#error");
  const apiUrl = `https://api.dataforsyningen.dk/postnumre/${zipCodeInput.value}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      error.textContent = "";
      cityInfoInput.value = data.navn;
    } else {
      error.textContent = "City not found. Please check the zip code.";
    }
  } catch (error) {
    console.error("Error fetching city info:", error);
    error.textContent = "Error fetching city info";
  }
}

document.querySelector("#zipCodeInput").addEventListener("keyup", event => {
  const zipCodeLength = Number(event.target.value.length);
  if (zipCodeLength === 4) {
    fetchCityInfo();
  }
});
