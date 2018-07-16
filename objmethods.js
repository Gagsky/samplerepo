let obj = {
    fname : 'gagan',
    lname : 'yadav',
    age : 22,
    address : 'gurgaon',
    
    fullname : function()
    {
        return this.fname + " " + this.lname
    }


}

console.log(obj.fullname())

// let obj = { 
//     firstName : 'gagan'
// }

// obj.lastName = 'yadav';
// obj['fullName'] = 'gagan yadav';
// obj['age'] = 22;
// obj['my name is'] = 'gagan';
// console.log(obj);

// delete obj.age;
// console.log(obj);
// console.log(obj['my name is']);

// console.log(Object.keys(obj))

// function Car(make  , model , year){

//     this.make = make,
//     this.model = model,
//     this.year = year
// }

// let maruti = new Car('maruti' , '800' , '2000');
// let toyota = new Car('toyota' , 'innova' , '2017');
// console.log(maruti,toyota,Car)

// let obj = {
//     firstName : 'gagan',
//     lastName : 'yadav',
//     get fullName(){
//          return this.firstName + ' ' + this.lastName;
//     },
//     set name(val){
//         this.firstName = val;
//     }

// }

// console.log(obj.fullName);

// obj.name = 'shubham';

// console.log(obj);

// console.log(Object.keys(obj))