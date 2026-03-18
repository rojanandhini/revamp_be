const express =require("express");
const {PrismaClient}=require("@prisma/client");

const app= express();
const prisma=new PrismaClient();
app.use(express.json());

const port=5000;
app.get("/students",async(req,res)=>{
    
    const studentsData= await prisma.students.findMany();
    res.send(studentsData)});
app.get("/students/:rollno",async(req,res)=>{

    const {rollno}=req.params;
    const studDataById= await prisma.students.findUnique({
        where:{
            rollno:rollno,
        },
    });
    res.send(studDataById)
});
app.post("/students",async(req,res)=>{

   const data=req.body;
   console.log(data);
    const newStudentData=await prisma.students.create({
        data: {
            rollno: data.rollno,
            name: data.name,
            gender: data.gender,
            class: data.class,
            bloodgrp: data.bloodgrp,
        },
    });
    res.send("Student Added", newStudentData);
});
app.put("/students/:rollno",async(req,res)=>{
    const {rollno}=req.params;
    const data=req.body;

    const updateStudData=await prisma.students.update({
        where: {
            rollno: rollno,
        },
        data: {
            name: data.name,
            gender: data.gender,
            class: data.class,
            bloodgrp: data.bloodgrp,
        },
    });
   res.json({ message: "Student data updated", updatedRecord: updateStudData });
});
app.put("/students",async(req,res)=>{

   const data=req.body;
   console.log(data);
    const updateStudentData=await prisma.students.update({
        where: {
            rollno: data.rollno,
        },
        data: {
            rollno: data.rollno,
            name: data.name,
            gender: data.gender,
            class: data.class,
            bloodgrp: data.bloodgrp,
        },
    });
    res.send("Student data updated", updateStudentData);
});
app.delete("/student",async(req,res)=>{
    const data=req.body;
    console.log(data,"deleted");
    await prisma.students.delete({
        where: {
            rollno: data.rollno,
        },
    });
    res.send("Student Data deleted")
});
app.delete("/student/:rollno",async(req,res)=>{
    const {rollno}=req.params;
    console.log("roll no : ",rollno,"deleted");
    await prisma.students.delete({
        where: {
            rollno: rollno,
        },
    });
    res.send("Student Data deleted")
});
app.listen(port,()=>{console.log(`Api is working on ${port}`);})