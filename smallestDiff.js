const smallDiff = (arr1, arr2) => {
    let smallest;
    for (let i = 0; i < arr1.length; i++) {
        let outer = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let inner = arr2[j];
            let diff = outer - inner;
            if (diff < 0) {
                diff *= -1;
            }

            if (smallest === undefined || smallest > diff) {
                smallest = diff;
            }
        }
    }

    return smallest;
}


console.log(smallDiff([30, 23, 54, 33, 96], [10, 20, 14, 16, 18]));