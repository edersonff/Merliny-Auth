import axios from "axios";
import StockSymbols from "../Model/StockSymbols";

export default async function getUpdateData(stock: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${stock}.SA?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=2m&.tsrc=finance`;
  try {
    const { data } = await axios.get(url);
    let stockData = data.chart.result[0].indicators.quote[0];

    const stockInfo = {
      open: stockData.open[0],
      high: stockData.high[0],
      low: stockData.low[0],
      close: stockData.close[0],
      adjusted_close: stockData.close[0],
      volume: stockData.volume[0],
      dividend_amount: 0,
      split_coefficient: 0,
    };
    return stockInfo;
  } catch (error) {
    console.error(error);
  }
}
