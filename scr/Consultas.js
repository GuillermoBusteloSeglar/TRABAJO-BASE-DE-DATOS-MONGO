//Con este consulta quiero que mongo me muestre las marcas las cuales empiecen por la letra b y que este no distinga entre mayusculas y minusculas
db.yumanyi.find( { Marca: { $regex: /^B/, $options: 'i'} } )

//Con esta consulta se mostraran todos los datos que tengan una cantidad en stock menor o igual a 15 y que su marca sea Nintendo
db.yumanyi.find({$and:[{ "qty": {lte:15}}, {"Marca":{$in:"Nintendo"}}]})

//Con esta consulta se mostraran todos los datos de marca Banpresto o a quellos que su precio sea distinto de 400
db.yumanyi.find({$or:[{ "Marca": "Banpresto"}, {"Precio":{$ne:400}}]})

//Con esta consulta se mostraran todos los datos cuya fecha de entrada sea mayor o igual al 9/12/2020
db.yumanyi.find( {"FechaEntrada" : {"$gt" : new Date("2020-12-9")}})

//Con esta consulta se mostrarn todos los datos cuyo precio no sea mayor de 15
db.yumanyi.find( { "Precio": { $not: { $gt: 15 } } } )

//Con esta consulta se mostraran todas los datos cuya marca no empiece por la letra T y que este no distinga entre mayusculas y minusculas
db.yumanyi.find( { Marca: { $not: { $regex: /^T/, $options: 'i' } } })

//Con este consulta se mostraran todos los datos cuya marca no acabe en s y que este no distinga entre mayusculas y minusculas y o aquellos cuya fecha de entrada no es igual a la indicada
db.yumanyi.find({$or:[{ "Marca": {$not: {$regex: /s$/, $options: 'i'}}}, {"FechaEntrada": {"$ne": new Date(2020-12-15)}}]})

//Con esta consulta se mostraran todos los datos cuya fecha de entrada no sea igual a la dada y cuya cantidad no sea menor o igual que 20
db.yumanyi.find({$nor:[{ "FechaEntrada": {"$eq": new Date(2020-12-9)}}, {"qty": {lte:20}}]})
