const userModel = require("../db/schema/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SignInHandler = async (req,res) => {
  const findAccount = await userModel.findOne({ email:{$eq:req.body.email} });

  if(!findAccount) {
    return res.status(401).json({msg:"account is not exists"});
  }

   bcrypt.compare(req.body.password,findAccount.password , (err,result) =>{
      if(err) return res.status(500).json({ msg:err });
      if(result) {
        const token = jwt.sign({ name:findAccount?.name ,email:findAccount?.email }, 'auth', {
            expiresIn:"1d"
        })
        return res.status(200).json({token:token });
      }

      return res.status(401).json({msg:"password wrong"});
   })
}

const SignUpHandler = async (req,res) => {
    const checkDup = await userModel.findOne({  email:{ $eq:req.body.email } });

    if(checkDup) {
        
        return res.status(401).json({  msg:"account already exists" });
    }
    
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    
    const userInit = new userModel({
        email:req.body.email,
        name:req.body.name,
        password:hashPassword
    })

    try {
        const token = jwt.sign({ name:userInit?.name ,email:userInit?.email }, 'auth', {
            expiresIn:"1d"
        })
        const saved = await userInit.save();
        return res.status(200).json({token:token });

    } catch(err) { 
        return err;
    }
}


module.exports = { SignInHandler, SignUpHandler}//isee
