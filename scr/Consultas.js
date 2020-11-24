//Con este consulta quiero que mongo me muestre las marcas las cuales empiecen por la letra b y que este no distinga entre mayusculas y minusculas
db.yumanyi.find( { Marca: { $regex: /^B/, $options: 'i'} } )
//Con esta consulta se mostraran todos los items que tengan un precio igual o superior a 400
db.yumanyi.find({$and:[{ "qty": {lte:15}}, {"Marca":{$in:"Nintendo"}}]})
//Con esta consulta se mostraran todos los items de marca Banpresto o a quellos que su precio sea distinto de 400
db.yumanyi.find({$or:[{ "Marca": "Banpresto"}, {"Precio":{$ne:400}}]})
//Con esta consulta se mostraran todos los items cuya fecha de entrada sea mayor o igual al 9/12/2020
db.yumanyi.find( {"FechaEntrada" : {"$gt" : new Date("2020-12-9")}})
//Con esta consulta se mostrarn todos los items cuyo precio no sea mayor de 15
db.yumanyi.find( { "Precio": { $not: { $gt: 15 } } } )
//Con esta consulta se mostraran todas los items cuya marca no empiece por la letra T y que este no distinga entre mayusculas y minusculas
db.yumanyi.find( { Marca: { $not: { $regex: /^T/, $options: 'i' } } })
//Con este consulta se mostraran todos los items cuya marca no acabe en s y que este no distinga entre mayusculas y minusculas y o aquellos cuya fecha de entrada no es igual a la indicada
db.yumanyi.find({$or:[{ "Marca": {$not: {$regex: /s$/, $options: 'i'}}}, {"FechaEntrada": {"$ne": new Date(2020-12-15)}}]})