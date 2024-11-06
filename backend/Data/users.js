import bcrypt from "bcrypt";

const users =[
    {
        name: "Admin user",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("123456" , 10),
        isAdmin:true
    },
    {
        name: "Johnson",
        email:"johnson@gmail.com",
        password:bcrypt.hashSync("123456" , 10),
        isAdmin:false
    },
    {
        name: "Dravid",
        email:"dravid@gmail.com",
        password:bcrypt.hashSync("123456" , 10),
        isAdmin:false
    }
];

export default users;