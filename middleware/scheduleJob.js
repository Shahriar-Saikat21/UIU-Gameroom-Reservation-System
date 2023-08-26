const cron = require("node-cron");
const Schedule = require("../models/scheduleModel");
const Student = require("../models/studentModel");


function banJob(){
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    console.log(currentDate)
    cron.schedule("2 * * * * *",async function () {
        const students = await Schedule.find({$and:[{reservationStatus : "Not Attended"},{reservationDate:currentDate}]},{studentID:1,_id:0});
        await Schedule.updateMany({$and:[{reservationStatus : "Not Attended"},{reservationDate:currentDate}]},{$set : {reservationStatus : "Banned"}});
        students.forEach(async (student)=>{
            await Student.updateOne({studentID:student.studentID},{$set:{status:"Banned"}});
        });
  
        console.log("Student Profile Ban automation work done @ " + new Date());   
    });
}

function unBan(){
    cron.schedule("4 * * * * *",async function () {  
        const students = await Student.find({status:"Banned"}); 
        students.forEach(async (student)=>{
            var banDayCount = student.banDays;
            if(banDayCount<3){
                await Student.updateOne({studentID:student.studentID},{$set:{banDays:banDayCount+1}});
            }else if (banDayCount==3){
                await Student.updateOne({studentID:student.studentID},{$set:{status:"active",banDays:0}});
            }
        });    
        console.log("Student Profile Unban automation work done @ " + new Date());
    });
}

function limitCheck(){
    cron.schedule("30 * * * * *",async function () {
        await Student.updateMany({$set : {limit : 0}});
        console.log("limit check updated @ " + new Date());
    });
}

module.exports = {
    banJob,
    limitCheck,
    unBan
}
