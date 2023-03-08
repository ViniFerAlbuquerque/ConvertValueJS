const button = document.getElementById("convert-button")
const select = document.getElementById("select-currency")

const convertValue = async () => {
    const inputReal = document.getElementById("Real-value").value
    const realTextValue = document.getElementById("real-text-value")
    const currencyTextValue = document.getElementById("currency-text-value")

    const apiData = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    console.log(apiData)

    const dolar = apiData.USDBRL.high
    const euro = apiData.EURBRL.high
    const bitCoin = apiData.BTCBRL.high
    const libra = apiData.GBPBRL.high
    // realTextValue.innerHTML = inputReal
    // currencyTextValue.innerHTML = (inputReal / dolar)
    realTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal)

    if (select.value === "US$ Dólar americano") {
        currencyTextValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        currencyTextValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputReal / euro)
    }

    if (select.value === "₿ Bitcoin") {
        currencyTextValue.innerHTML = ((inputReal / bitCoin).toFixed(6))
    }

    if (select.value === "£ Libra esterlina") {
        currencyTextValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputReal / libra)
    }
}

const selectCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (select.value === "£ Libra esterlina") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/reino unido icon.jpg"
    }
    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", selectCurrency)