import https from "https";
import buffer from "buffer";
export default function ciaAberta(
  options: {
    filters: Array<{ key: string; value: string }>;
    select: Array<string>;
  } = { filters: [], select: [] },
  onError: (...args: any[]) => void = () => {}
) {
  var filename = "cad_cia_aberta.csv";
  var url = "https://dados.cvm.gov.br/dados/CIA_ABERTA/CAD/DADOS/" + filename;

  return new Promise((resolve, reject) => {
    const req = https
      .get(url, (response) => {
        var body = "";
        response.on("data", (chunk) => {
          body += buffer
            .transcode(Buffer.from(chunk), "utf8", "latin1")
            .toString("latin1");
        });
        return response.on("end", () => {
          var lines = body.split("\r");
          var headers = lines[0].split(";");
          const data = [];
          const trimCOptions = ["cnpj"];
          for (var i = 1; i < lines.length; i++) {
            var valid = true;
            var row = lines[i].split(";");

            const rowData: Object = {
              cnpj: row[0],
              razao_social: row[1],
              nome_comercial: row[2],
              data_registro: row[3],
              data_constituicao: row[4],
              data_cancelamento: row[5],
              motivo_cancelamento: row[6],
              situacao: row[7],
              data_situacao: row[8],
              codigo_cvm: parseInt(row[9], 10),
              setor_atividade: row[10],
              categoria: row[11],
              data_categoria: row[12],
              emissor_situacao: row[13],
              emissor_data_situacao: row[14],
              tipo_endereco: row[15],
              logradouro: row[16],
              complemento: row[17],
              bairro: row[18],
              municipio: row[19],
              uf: row[20],
              pais: row[21] || "Brasil",
              cep: row[22],
              tel: "(" + row[23] + ") " + row[24],
              fax: "(" + row[25] + ") " + row[26],
              email: row[27],
              responsavel: {
                tipo: row[28],
                nome: row[29],
                data_inicio: row[30],
                logradouro: row[31],
                complemento: row[32],
                bairro: row[33],
                municipio: row[34],
                uf: row[35],
                pais: row[36],
                cep: row[37],
                tel: "(" + row[38] + ") " + row[39],
                fax: "(" + row[40] + ") " + row[41],
                email: row[42],
              },
              auditor: {
                cnpj: row[43],
                nome: row[44],
              },
            };
            // options filters
            const filters = options.filters;
            if (filters.length > 0) {
              valid = false;
              for (var j = 0; j < filters.length; j++) {
                var filter = filters[j];
                let val = Object(rowData)[filter.key];
                if (trimCOptions.includes(filter.key) && val) {
                  val = val.replace(/[^0-9]/g, "");
                }
                if (val == filter.value) {
                  valid = true;
                  break;
                }
              }
            }
            // const select = options.select;
            // if (select.length > 0) {
            //     for(var j = 0; j < select.length; j++){

            //         delete Object(rowData)[select[j]];
            //     }
            // }
            if (!valid) {
              continue;
            }
            // data.push(rowData);
          }
          resolve(data);
        });
      })
      .on("error", (error) => {
        onError(error);
        reject(error);
      });
    req.end();
  });
}
