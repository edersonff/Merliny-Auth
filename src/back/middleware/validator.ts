import conn from "../db/conn";

export default async (validateArr: Array<any>) => {
    return async (req: any, res: any, next: any) => {
        const data = req.body;
        
        validateArr.map(async (validate: string)=>{
            const [key, type] = validate.split(':');
            const types = type.split('|');
            if(!types) return res.status(400).json({message: `Query vazia ${key}`});
            types.map((type: string)=>{
                return type.trim();
            });
            if(!types.includes('optional') && !data[key]) return res.status(400).json({message: `${key} é obrigatório`});
            if(types.includes('string') && typeof data[key] != 'string') return res.status(400).json({message: `${key} deve ser uma string`});
            if(types.includes('number') && typeof data[key] != 'number') return res.status(400).json({message: `${key} deve ser um número`});
            if(types.includes('boolean') && typeof data[key] != 'boolean') return res.status(400).json({message: `${key} deve ser um booleano`});
            if(types.includes('array') && !Array.isArray(data[key])) return res.status(400).json({message: `${key} deve ser um array`});
            if(types.includes('object') && typeof data[key] != 'object') return res.status(400).json({message: `${key} deve ser um objeto`});
            if(types.includes('email') && !data[key].includes('@')) return res.status(400).json({message: `${key} deve ser um email`});
            if(types.includes('password') && data[key].length < 6) return res.status(400).json({message: `${key} deve ter no mínimo 6 caracteres`});
            // exists
            if(types.includes('exists')){
                const [table, column] = types[1].split('.');
                const exists = await conn.query(`SELECT * FROM ${table} WHERE ${column} = ?`, {
                    replacements: [data[key]],
                    raw: true,
                });
                if(!exists.length) return res.status(400).json({message: `${key} não existe`});
            }
        });
        next();
    }
}