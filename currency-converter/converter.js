// eslint-disable-next-line no-undef
var myKey = config.API_KEY
const myHeaders = new Headers()
myHeaders.append("apikey", myKey)

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

function generateOptions(options) {
    return Object.entries(options).map(([currencyID, currencyName]) => {
        return `<option value="${currencyID}">${currencyID}-${currencyName}</option>`
    }).join('')
}

const optionsHTML = generateOptions(currencies)

fromSelect.innerHTML = optionsHTML
toSelect.innerHTML = optionsHTML

console.log(optionsHTML)