

export default function getVehicleById(req,res){
    res.json({id:req.query.id})
}