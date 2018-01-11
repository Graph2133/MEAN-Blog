const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
const bcrypt =require('bcrypt-nodejs');

var emailLengthChecker = function(email){
  if(!email){
    return false;
  }else{
    if(email.length<5||email.length>30)
      {
        return false;
      }
      else true;
  }
};

var emailCorrectChecker =function(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const emailValidators = [
  {
    validator:emailLengthChecker,
    message:'E-mail must be  5 characters at least'
  },
  {
    validator:emailCorrectChecker,
    message:'Enter valid e-mail address'
  }
]
 
let usernameLengthChecker = (username) => {
  // Check if username exists
  if (!username) {
    return false; // Return error
  } else {
    // Check length of username string
    if (username.length < 3 || username.length > 15) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid username
    }
  }
};

const usernameValidators = [
  // First Username validator
  {
    validator: usernameLengthChecker,
    message: 'Username must be at least 3 characters but no more than 15'
  }]

const userSchema = new Schema({
 email:{type:String, required:true, unique:true, lowercase:true, validate:emailValidators},
  username:{type:String, required:true, unique:true, lowercase:true,validate:usernameValidators},
  password:{type:String, required:true}
});


userSchema.pre('save',function(next){
  if(!this.isModified("password"))
    return next();

  bcrypt.hash(this.password,null,null,(err,hash)=>{
    if(err) return next(err);
    this.password=hash;
    next();
  })
});

userSchema.methods.comparePassword=function(password){
  return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model('User', userSchema);