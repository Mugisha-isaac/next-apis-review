import {NextApiRequest,NextApiResponse} from 'next'

export default function getAllPeople(req:NextApiRequest,res:NextApiResponse){
    res.send([{name:'p1'},{name:'p2'}, {name:'p3'}]);
}