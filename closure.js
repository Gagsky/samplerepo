function A(x) {
    return function B(y) {
        return function C(z) {
            return function D(q){
                return (x + y + z + q)
            }
           

        }
    }
}
 let a = A(2);
 console.log(a);
 let b = a(2);
 console.log(b);
 let c = b(2);
 console.log(c);
 let d = c(2);
 console.log(d);
// console.log(A(2)(2)(2));