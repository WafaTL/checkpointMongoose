const mongoose = require('mongoose');
//Schema
const personSchema=mongoose.Schema({
    firstName:{ type:String,
            required:true
},
lastName:{ type:String,
    required:true
},
    age:{ type:Number
},
profession:{ type:String,
    required:true
},
favoriteHobbies:{ type:[String],
    required:true
},
favoriteFoods:{ type:[String] ,
    required:true
}
});
// Model
module.exports=Person=mongoose.model('person',personSchema);