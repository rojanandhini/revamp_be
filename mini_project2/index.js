const express = require("express");
const {PrismaClient} = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

try {
  app.get("/restaurants",async (req,res)=>{
    const allRestData=await prisma.restaurants.findMany();

    res.status(200).json({message:"Restaurants Data", data:allRestData});
});  
} catch (error) {
    res.status(500).json({message:"Internal server error", error: error});
}

try {
    app.get("/restaurant/:restId",async(req,res)=>{

        const {restId} = req.params;

        const getDataById = await prisma.restaurants.findUnique({
            where:{
                restId : restId,
            }
        });
        res.status(200).json({message: "Get Restaurant By ID", data:getDataById});
    })
} catch (error) {
    res.status(500).json({message:"Internal server error", error: error});
}
try {
    app.get("/restaurant/:restId",async(req,res)=>{

        const {restId} = req.params;

        const getDataById = await prisma.restaurants.findUnique({
            where:{
                restId : restId,
            }
        });
        res.status(200).json({message: "Get Restaurant By ID", data:getDataById});
    })
} catch (error) {
    res.status(500).json({message:"Internal server error", error: error});
}
try {
     app.post("/restaurants", async(req,res)=>{

        const data = req.body;

        const addData=await prisma.restaurants.create({
                data : {
                    name: data.name,
                    imageUrl: data.imageUrl,
                    location: data.location,
                    offer: data.offer
                },
            });
        res.status(200).json({message: "Student Data Added", data:addData});
    });
} catch (error) {
    res.status(500).json({message:"Internal server error", error: error});
}
try {
    app.put("/restaurants",async(req,res)=>{

        const data=req.body;

        const editData= await prisma.restaurants.update({
            where:{
                restId: data.restId,
            },
            data :{
                    name: data.name,
                    imageUrl: data.imageUrl,
                    location: data.location,
                    offer: data.offer
            }
        });
        res.status(200).json({message:"data updated", editData});
    })
} catch (error) {
     res.status(500).json({message:"Internal server error", error: error});
}
const PORT =5500;
app.listen(PORT,()=>{console.log(`API is loading in port ${PORT}`);
})