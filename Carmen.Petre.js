//1.1. ES6 - Metode. Care sunt si ce presupune fiecare.

//array.from
{
    console.log(Array.from([0, 5, 10, 15], i => i + 1)); //console displays [1,6,11, 16]
}
//array.copyWithin(target, start, end)
{
    const arr = ['I', 'am', 'a', 'student'];
    console.log(arr.copyWithin(0, 1, 3)); //console displays [ 'am', 'a', 'a', 'student' ], it moves arr[1] at arr [0]
    console.log(arr.copyWithin(1, 3)); //console displays [ 'am', 'student', 'a', 'student' ], moves  to arr[1] all elements from index
                                                    // 3 to the end
}
//Array.of
{
    let arr = Array.of(188)
    console.log(arr)
    console.log(arr.length)
}
//Array.prototype.entries()
{
    var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST',  'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    var calendar = months.entries();
    for (i of calendar) {
        console.log(i);
    }
}
//array.keys()
{
    var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST',  'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    var calendar = months.keys();
    console.log(...calendar);
}

//1.2. Diferenta dintre var, let, const
//1.2.1 var, let, const

function differences() {
    for (let i = 0; i < 10; i++) {
        var a = i
        const b = i // b nu e mutabil
        let c = i // c e mutabil
    }
    console.log("a este:", a)
    console.log("b este:", b)
    console.log("c este:", c)  //result: a is 9, b is "not defined"
}

//1.2.2 difference between var and let
function overwriteVariables() {
    var student = "David"; //student variable is originally declared as Daniel
    var student = "Dave"; //student variable is then overridden to be Dave, it is a duplicate declaration
    console.log(student); // console displays Dave; is allowed, could cause error in more complicated code
}  //
//     let child = "Dan";
//     let child = "Daniel"; //blocked scopes can't be redeclared
//     console.log(child); // console displays an error because with "let" a variable with the same name can only be declared once
// }
overwriteVariables();

    function scopeVar() {
        var printNumTwo;
        for (var i = 0; i < 3; i++) {
            if (i === 2) {
                printNumTwo = function () {
                    return i; //returns the global i, not the value i had in the for loop
                };
            }
        }
        console.log(printNumTwo());
    }

    scopeVar(); //console displays 3, not 2
// //same thing, using let
    function scopeLet() {
        let printNumTwo;
        for (let i = 0; i < 3; i++) { // i is only declared within the for loop statement
            if (i === 2) {
                printNumTwo = function () {
                    return i; // is not defined because it was not declared in the global scope
                };
            }
        }
        console.log(printNumTwo()); //printNumTwo() returns the correct value (2) because i had the unique values (0, 1, and 2)
                                    // that were created by the let keyword in the for loop
        console.log(i);
    }

    scopeLet(); //console displays the value 2 and an error that i is not defined

// //1.3 spread operator
    function spreadOpOne() {
        const {x: x, y: y} = {
            x: "a",
            y: "b",
            ...{x: "c"},
        }
        const lis = [...[1, 2], ...[3, 4]]
        console.log(x, y, lis) // console displays c b [ 1, 2, 3, 4 ]
    }

    spreadOpOne();

    function spreadOpTwo() {
        const firstSixMonths = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE'];
        let year
        year = [...firstSixMonths, 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']; //using the spread operator
        console.log(year); //console displays the arrays reunited as the months of the year using the spread operator:
        // 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST',  'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    }

    spreadOpTwo();

    function spreadOpThree() {
        const arr = [11, 0, 110, 1100, 111];
        const max = Math.max(...arr); //finds the maximum, ...arr returns an unpacked array, it spreads the array
        console.log(max);
    }

    spreadOpThree()


//1.4 Objects - cum se itereaza, deep copy

// Object.entries({a: "a1", b: "b1"}) // [["a", "a1"], ["b", "b1"]]
// Object.values({a: "a1", b: "b1"}) // ["a1", b1]
// Object.keys({a: "a1", b: "b1"}) // ["a", "b"]

//declaring object

    function declareObj() {
        let dog = {
            name: "Heaven",
            legsNb: 4,
            color: "white",
            gender: "she",
            age: 1,
            sayIsPuppy: function () { //object method
                if (this.age < 5) {
                    return this.name + " is a puppy because " + this.gender + " is " + this.age + " years old.";
                }
                return name + " is not a puppy because " + this.gender + " is " + this.age + " old.";
            }
        };
        console.log(dog.sayIsPuppy()); //console displays 'Heaven is a puppy because she is 1 years old.'
    }

    declareObj();

//iterating over all properties
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.age = 4;
    let pug = new Dog("Heaven");
    let ownProps = [];
    let prototypeProps = [];
    for (let property in pug) {
        if (Dog.hasOwnProperty(property)) {
            ownProps.push(property);
        } else {
            prototypeProps.push(property);
        }
        console.log(ownProps); //console displays ['name'] prop
        console.log(prototypeProps); ////console displays ['age'] prop, the new one
    }

//deep copy
    function deepCopy() {
        const a = {
            firstChild: 'Kim',
            secondChild: 'Kyle'
        }
        let b = Object.assign({}, a)
        b.secondChild = 'Kourtney'
        console.log(b.secondChild) // Kourtney
        console.log(a.secondChild) // Kyle
    }

    deepCopy();

    function deepCopyNestedObj() {
        const fridge = {
            food: {
                meal: 'Pasta'
            }
        }
        let pantry = {food: {...fridge.food}}
        pantry.food.meal = 'Soup'
        console.log(pantry.food.meal) // console displays Soup
        console.log(fridge.food.meal) // Pasta
    }

    deepCopyNestedObj()

//1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).

    function accessData() { //accessing the data at a certain index
        const array = [10, 100, 110];
        const data = array[1]
        console.log(data); //console displays 100
    }

    accessData();

    function modifyDataAtIndex() { //modifying data at an index in an array
        const arrayOne = [10, 100, 110];
        arrayOne[0] = 15;
        console.log(newArr = arrayOne); // console displays modified string [ 15, 100, 110 ]
    }

    modifyDataAtIndex()

    function accessDataMultiDimensionalArr() {
        const arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [[9, 10, 11], 12, 13]
        ];

        console.log(arr[3]); //console displays [ [ 9, 10, 11 ], 12, 13 ]
        console.log(arr[3][0]); // console displays [ 9, 10, 11 ]
        console.log(arr[3][0][1]); // console displays 10
    }

    accessDataMultiDimensionalArr();

//array mutator methods
    function arrPush() {
        const arr1 = [1, 2, 3];
        arr1.push(4);
        console.log(arr1); //console displays [1, 2, 3, 4]
        const arr2 = ["Daniel", "Dan", "puppy"];
        arr2.push(["Maya", "pug"]);
        console.log(arr2); //console displays [ 'Daniel', 'Dan', 'puppy', [ 'Maya', 'pug' ] ]
    }

    arrPush();

    function arrPop() {
        const shoppingList = ['tomato', 'salad', 'corn'];
        const checkList = shoppingList.pop();
        console.log(checkList); // console displays corn, the last element, the one that was removed
        console.log(shoppingList); // console displays [ 'tomato', 'salad' ], the array that is left after pop()
    }

    arrPop();

    function arrShift() {
        const array = ["Daniel", "Dan"];
        const removedFromArray = array.shift();
        console.log(removedFromArray);
        console.log(array); //[ 'Dan' ], what is left after removing the data ar array[0]
    }

    arrShift();

    function arrUnshift() {
        const array = ["Daniel", "Dan"];
        array.unshift("Happy"); //adds Happy in the beginning of the array, opposite of shift
        console.log(array); //console displays [ 'Happy', 'Daniel', 'Dan' ]
    }

    arrUnshift()

//reverse, sort, splice
    function removeSplice() { //using splice() to remove array element
        let array = ['I', 'am', 'a', 'great', 'student'];
        array.splice(2, 2); //it will remove 'great' from the array
        console.log(array); //console displays [ 'I', 'am', 'student' ]
    }

    removeSplice();

    function addSplice() { //splice() can also be used to add to the array when it has startIndex, amountToDelete, and what to add
        // parameters specified
        const numbers = [0, 1, 2, 2, 5]; //i want to remove the second 2 and add 3 and 4 in the array and have the numbers in ascending order
        const startIndex = 3;
        const amountToDelete = 1;
        numbers.splice(startIndex, amountToDelete, 3, 4);
        console.log(numbers); //console displays [ 0, 1, 2, 3, 4, 5 ]
    }

    addSplice();

    function arrReverse() {
        const array = ['how', 'are', 'you'];
        const reversed = array.reverse(); //reverses the array and it changes is for good
        console.log('reversed:', reversed); // console will display [ 'you', 'are', 'how' ]
    }

    arrReverse();

    function arrSort() {
        const array = ['e', 'd', 'a', 'f', 'b']; //i want to sort the array alphabetically
        array.sort();
        console.log(array); // console displays [ 'a', 'b', 'd', 'e', 'f' ]
    }

    arrSort();

    function arrForEach() {
        [0, 1].forEach((el) => {
            console.log(el) //console displays 0 1, the numbers are separated
        });
    }

    arrForEach();

    function arrReduce() {
        [0, 1].map(el => el + 1).reduce((acc, currValue) => {
            return result = acc + currValue
        }, 0)
        console.log(result); //console displays 3
    }

    arrReduce();


    //1.6. Promise. Callback.

    function simplePromise() {
        const makeCake = new Promise((resolve, reject) => {
            let haveTime;
            if (haveTime) {
                resolve("I can make the cake");
            } else {
                reject("I can't make the cake");
            }
        });
        console.log(makeCake);
    }

    simplePromise();

    function thenPromise() {
        function findDog() {
            return new Promise((resolve, reject) => {
                setTimeout(() => { //callback
                    resolve([
                        {name: 'Pico', size: 'small', gender: "female"},
                        {name: 'Sir', email: 'medium', gender: "male"},
                    ]);
                }, 1000);
            });
        }

        function found(dogs) {
            console.log(dogs);
        }

        const promise = findDog();
        promise.then(found);
    }

    thenPromise();


//1.7. Async. Await.
//async
    function async() {
        function delay() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('resolved');
                }, 2000);
            });
        }

        async function display() {
            console.log('Hello World');
            const result = await delay();
            console.log(result); // console displays "resolved"
        }

        display();
    }

    async();

//await

    function solveIn5Seconds(x) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(x);
            }, 5000);
        });
    }

    async function delaying() {
        const delay = await solveIn5Seconds('Hello World'); //makes the result delayed by 5 seconds
        console.log(delay); // console displays 10 after waiting 5 seconds
    }

    delaying();


//1.8. Closures
// e o functie care are acces la variabile din campul lexical
// {
//     let closVar = 3
//
//     function closureExample() {
//         closVar++
//     }
//
//     closureExample()
//     closureExample()
//     closureExample()
//     console.log(clojVar)
// }

    function screenSaver() {
        let color = 'blue';

        function whatColor() {
            console.log(color);
        }

        return whatColor;
    }

    let blue = screenSaver();
    blue();
