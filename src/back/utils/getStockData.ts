import axios from "axios";
import StockSymbols from "../Model/StockSymbols";

export default async function getStockData(stock: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${stock}.SA?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=2m&.tsrc=finance`;
  try {
    const { data } = await axios.get(url);
    let stockData = data.chart.result[0].indicators.quote[0];
    if (
      (stockData.open[0] === 0 &&
        stockData.high[0] === 0 &&
        stockData.low[0] === 0 &&
        stockData.close[0] === 0 &&
        stockData.volume[0] === 0) ||
      (stockData.open[0] === null &&
        stockData.high[0] === null &&
        stockData.low[0] === null &&
        stockData.close[0] === null &&
        stockData.volume[0] === null)
    ) {
      throw new Error("Stock data is invalid");
    }
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
    StockSymbols.destroy({
      where: {
        symbol: stock,
      },
    });
  }
}
