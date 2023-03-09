import http from "http";
import https from "https";
import Readline from "readline";
export default {
    httpGet: function(url: string, callback: (...args: any[]) => any) {
        const lib = url.startsWith("https") ? https : http;
        const request = lib.get(url, (response: any) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                callback(new Error("Failed to load page, status code: " + response.statusCode));
            }
            const body = [] as any;
            response.on("data", (chunk: any) => body.push(chunk));
            response.on("end", () => callback(null, body.join("")));
        });
        request.on("error", (err: any) => callback(err));
    },
      readStreamCsv: function(options: any) {
        const rl = Readline.createInterface({
            input: options.stream,
            crlfDelay: Infinity
        });
        let lnumber = 0;
        rl.on("line", (line: any) => {
            lnumber++;
            const row = line.split(options.separator);
            options.onRow(row, options.headers, lnumber);
        });
      },
      digitsOnly: function(str: string) {
        return str.replace(/\D/g, "");
      }
}