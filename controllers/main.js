const jwt = require('jsonwebtoken')

const login =async (req,res) =>{
    const {username,password} = req.body;
    console.log(username,password);
    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
    res.status(200).json({ msg: 'user created', token });
}

const dashboard =async (req,res) =>{
    let authorization =req.headers.authorization;
    if(!authorization){
        res.status(400).json({error:'Authorization headers missings'})
    }
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg: 'Hello Mr Suresh',secret:`Here is authorized secret key:${luckyNumber}`}); 
}

module.exports = {
    login,
    dashboard,
  }