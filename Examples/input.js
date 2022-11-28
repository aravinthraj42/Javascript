// let name = prompt('Enter you name: ')
// let Addrss1 = prompt('Enter Address Line1: ')
// let Addrs2 = prompt('Enter Address Line 2: ')
// let Addrs3 = prompt('Enter Address Line 3: ')
// let City = prompt('Enter a City: ')
// let State = prompt('Enter a State: ')
// let Pin = prompt('Enter a Pin: ')

// console.log(name)
// console.log('Address:')
// console.log(Addrss1,',')
// console.log(Addrs2, ',')
// console.log(Addrs3, ',')
// console.log(City)
// console.log(State, '-', Pin)

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });
//  let name = readline.question('Enter a Name:')
//  console.log(name)
// readline.close()
