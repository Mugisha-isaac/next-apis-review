
export default function getAllVehicles(req,res){
    if(req.method !=="GET"){
        res.status(500).json({message:'invalid method request'})
    }
    res.json([{name:'car'},{name:'motorcycle'},{name:'bicycle'}])
}