import axios from "axios";
import { alphavantagetoken } from "../../config";
import Stocks from "../../Model/Stock";
import StockSymbols from "../../Model/StockSymbols";

export default async function updateStocks() {
  const stocks = (await StockSymbols.findAll({
    include: [
      {
        model: Stocks,
      },
    ],
  })) as any;
  const symbols = stocks.map((stock) => stock.symbol);

  symbols.forEach(async (symbol, i: number) => {
    const url =
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&symbol=" +
      symbol.symbol +
      ".SA&apikey=" +
      alphavantagetoken;
    const response = await axios.get(url);
    const data = response.data["Time Series (Daily)"];
    // const first = Object.keys(data)[0];
    // const stock = data[first];

    console.log(stocks[i].stocks[0].id, data);
    // Stocks.update(
    //   {
    //     open: stock["1. open"],
    //     high: stock["2. high"],
    //     low: stock["3. low"],
    //     close: stock["4. close"],
    //     adjusted_close: stock["5. adjusted close"],
    //     volume: stock["6. volume"],
    //     dividend_amount: stock["7. dividend amount"],
    //     split_coefficient: stock["8. split coefficient"],
    //   },
    //   {
    //     where: {
    //       id: stocks[i].stocks[0].id,
    //     },
    //   }
    // );
  });
}
