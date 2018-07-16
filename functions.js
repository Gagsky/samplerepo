

// let abc = function(x) {
//     return x * x
// }


// function abcd(fn) {

//     let square = fn(2);

//     console.log(square);
// }

// abcd(abc);

// var a = 2;
// var b = 4;
// var num = 2;
// function abc(){

//      switch(num) {
//         case 1:
//             console.log(a+b)
//             break;

//         case 2:
//             console.log(a-b)
//             break;

//         default:
//             console.log(a*b)
//             break;
//     }
// }

// abc(2);


// var a;

// function abc(start,end)
// {
//     for(a=start;a<=end;a=a+2){
//         console.log(a);
//     }
// }
// abc(2,1000000);

// function mm(a)
// {
//     do(a++);
//     while(a<10);
//     console.log(a);
// }

// mm(0)
// var i =0;
// function bb(){
// while(i<100)
// {
//     i++;
//     console.log(i);
    
// }}

// bb(0);


// function four()
// {
//     for(i=0;i<100;i++)
//     {
//         let str = '';
//         if(i%4==0)
//         {
//             str+= "it is divisible by 4"
//         }
//         else{
//             str=i;
//         }
//         console.log(str||i);
//     }
// }

// four();

// var sr;
// function ac(sr){

//     var str = 'a b c';
//     console.log(str.split(' '))

// }

// ac(str);

// var fullname = "Gagan Yadav";

// function a(){

//     console.log(fullname.charAt(0));
//     console.log(fullname.charAt(6));

// }

// a();


// =======================================================


function initials(fullName){
    var splitname = fullName.split(' ');
    console.log(splitname,1);

    var first = splitname[0];
    console.log(first,2);

    var last = splitname[1];
    console.log(last,3);

    var initialsName = first[0] + last[0];
    console.log(initialsName,4);

    var iniName = initialsName.toUppercase();
    return iniName;


}
    console.log(initials('Gagan Yadav'));
