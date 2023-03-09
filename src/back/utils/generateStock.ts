import axios from "axios";
import { alphavantagetoken } from "../config";
import Stocks from "../Model/Stock";

export default function generateStock(symbol: string, symbol_id: number) {
  const url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" +
    symbol +
    "&apikey=" +
    alphavantagetoken;
  axios.get(url).then((response) => {
    const data = response.data["Time Series (Daily)"];
    const dates = Object.keys(data);

    dates.forEach((date) => {
      const stock = data[date];
      console.log({
        open: stock["1. open"],
        high: stock["2. high"],
        low: stock["3. low"],
        close: stock["4. close"],
        adjusted_close: stock["5. adjusted close"],
        volume: stock["6. volume"],
        dividend_amount: stock["7. dividend amount"],
        split_coefficient: stock["8. split coefficient"],
        symbol_id,
      });
      // Stocks.create({
      //   open: stock["1. open"],
      //   high: stock["2. high"],
      //   low: stock["3. low"],
      //   close: stock["4. close"],
      //   adjusted_close: stock["5. adjusted close"],
      //   volume: stock["6. volume"],
      //   dividend_amount: stock["7. dividend amount"],
      //   split_coefficient: stock["8. split coefficient"],
      //   symbol_id,
      // });
    });
  });
}
