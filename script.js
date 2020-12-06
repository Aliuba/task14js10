// Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

function H() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("H")
            resolve("e")
        }, 1000)
    })

}

function e(el) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (el === "e") {
                console.log("e")
                resolve("e")
            } else {
                reject("the wrong letter")
            }

        }, 100)
    })

}

function l() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("l")
            resolve("l")
        }, 1000)
    })

}

function l100() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("l")
            resolve("l`")
        }, 100)
    })

}

function o() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("o")
            resolve("o")
        }, 250)
    })

}

function space() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" ")
            resolve(" ")
        }, 500)
    })

}

function w() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("W")
            resolve("W")
        }, 650)
    })

}

function o1000() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("o")
            resolve("o")
        }, 1000)
    })

}

function r() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("r")
            resolve("r")
        }, 850)
    })

}

function l220() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("l")
            resolve("l")
        }, 220)
    })

}

function d() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("d")
            resolve("d")
        }, 320)
    })

}

// async await цією добре получається, бо кожна функція чекає свій порядок, незалежно від того, коли вона готова

// async function type() {
//     try {
//         const letter = await H();
//         const let_e = await e(letter);
//         const let_l = await l();
//         const let_l100 = await l100();
//         await o();
//         await space();
//         await w();
//         await o1000();
//         await r();
//         await l220();
//         await d();
//     } catch (er) {
//         console.log(er)
//     }

// }
// type()

// promise.allSettled
function H1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("H")
        }, 1000)
    })

}

function e() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("e")

            reject("the wrong letter")


        }, 100)
    })

}

let text = Promise.allSettled([H1(), e(), l(), l100(), o(), space(), w(), o1000(), r(), l220(), d()])

//  тут роздруковує по часу, хто швидше, порядку немає
text.then(value => {
    value.forEach(({ status, value, reason }) => {
        if (status === 'fulfilled') {
            console.log(value)
        } else {
            console.log('_____________________________')
            console.log(reason)
            console.log('_____________________________')
        }
    })
})

// тут роздрукує масив і буде швидко, без затримки, не буде імітації друку, букву L треба було якось інакше написати, бо не друкує два рази те саме
console.log(text)
