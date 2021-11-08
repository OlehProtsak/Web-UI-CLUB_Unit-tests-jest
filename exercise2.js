// The biggest safe INTEGER in JS is equal to 9007199254740992;
// Thats why we randomise number from 0 to 9007199254740992;


//const randomNum = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);


// The bigest amount of elements in array JS is 4294967296;
// In this case we don't need to make so "huge" array becouse the worst scenario when we get n = x2 + Y2 it is when y = 0 and x = square root of our randomNumber

const mathFunction = (randomNum) => {
    const arrX = [...Array(Math.ceil(Math.sqrt(randomNum) + 1)).keys()];
    const arrY = [...Array(Math.ceil(Math.sqrt(randomNum) + 1)).keys()];
    let arr = [];

    
    for (let i = arrX.length; i > 0; i--) {
        for (let j = 0; j < arrY.length; j++) {
            if (arrX[i] >= arrY[j] && randomNum === arrX[i] ** 2 + arrY[j] ** 2) {
                
                arr.push([arrX[i], arrY[j]]);
                
            }
        }
    }
    return arr;
    
}

module.exports = mathFunction;


