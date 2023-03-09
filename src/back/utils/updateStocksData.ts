import Stocks from "../Model/Stock";
import StockSymbols from "../Model/StockSymbols";
import getUpdateData from "./getUpdateData";

export default async function updateStocksData() {
  const stocks = await StockSymbols.findAll();
  await stocks.forEach(async (stock) => {
    const stockData = await getUpdateData(stock.symbol);
    const stockFind = await Stocks.findOne({
      where: {
        stock_symbol_id: stock.id,
      } as any,
    });
    stockFind?.update({
      open: stockData?.open,
      high: stockData?.high,
      low: stockData?.low,
      close: stockData?.close,
      adjusted_close: stockData?.adjusted_close,
      volume: stockData?.volume,
      dividend_amount: stockData?.dividend_amount,
      split_coefficient: stockData?.split_coefficient,
      diff: stockData?.close - stockFind?.close,
    });
  });
}
