// eslint-disable-next-line no-undef
var access_key = config.access_key
const myHeaders = new Headers()
myHeaders.append("access_key", access_key)
const requestOptions = {
    method: "GET",
    redirect: 'follow',
    headers: myHeaders
}

const endpoint = 'https://api.exchangeratesapi.io/latest'

const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
  };

const fromSelect = document.querySelector('[name="from_currency"]')
const toSelect = document.querySelector('[name="to_currency"]')

// const wait = (amount=0) => Promise((resolve) => setTimeout(resolve, amount))
function generateOptions(options) {
    return Object.entries(options).map(([currencyID, currencyName]) => {
        return `<option value="${currencyID}">${currencyID}-${currencyName}</option>`
    }).join('')
}

// function handleErrors(err) {
//     console.log("uHH OH")
//     console.log(err);
// }
async function fetchRates(base='USD') {
    const res = await fetch(`${endpoint}?base=${base}`,requestOptions)
    const data = await res.json()
    console.log(data);

    
}


const optionsHTML = generateOptions(currencies)

fromSelect.innerHTML = optionsHTML
toSelect.innerHTML = optionsHTML

fetchRates('') //.catch(handleErrors)
console.log(optionsHTML)