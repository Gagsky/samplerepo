function rec(z) {
    if (z == 50) {
        console.log('complete', z)
        return
    }

    else {
        console.log('recursive call', z)
        rec(z + 1)
    }
}


rec(0);