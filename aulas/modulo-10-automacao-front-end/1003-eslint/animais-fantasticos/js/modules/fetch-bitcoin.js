export default function initFetchBitcoin() {
    console.log('bitcoin');

    fetch('https://blockchain.info/ticker')
    .then((res) => res.json())
    .then((bitcoin) => {
        const btcPreco = document.querySelector('.btc-preco');
        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
