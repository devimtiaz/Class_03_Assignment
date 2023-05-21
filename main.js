/**
 * Assignment No 1
 * Find GPA and Grade with respect to Marks in any subject
 * */

let fullName = "Sabbir Hossin";
let roll = 156055;
let regstationRoll = 1711482301;

let Bangla = 90;

if (Bangla >= 0 && Bangla <= 32) {
  console.log(
    `
    Name: ${fullName}
    Roll: ${roll}
    Regstation Roll: ${regstationRoll}
    -------------------
    Aponar Total Mark = ${Bangla}
    Aponar GPA HOLO = F

    Aponi Fali Korecan.
    Abr Try Koren , Basay Valo Kore Porte Hobe.
    `
  );
} else if (Bangla >= 0 && Bangla <= 32) {
  console.log(
    `
      Name: ${fullName}
      Roll: ${roll}
      Regstation Roll: ${regstationRoll}
      -------------------
      Aponar Total Mark = ${Bangla}
      Aponar GPA HOLO = F
  
      Aponi Fali Korecan.
      Abr Try Koren , Basay Valo Kore Porte Hobe.
      `
  );
} else if (Bangla >= 33 && Bangla <= 40) {
  console.log(
    `
          Name: ${fullName}
          Roll: ${roll}
          Regstation Roll: ${regstationRoll}
          -------------------
          Aponar Total Mark = ${Bangla}
          Aponar GPA HOLO = C
      
          Aponi Pass Korecan,
          Aro Valo Kore Porte Hobe.
          `
  );
} else if (Bangla >= 41 && Bangla <= 60) {
  console.log(
    `
          Name: ${fullName}
          Roll: ${roll}
          Regstation Roll: ${regstationRoll}
          -------------------
          Aponar Total Mark = ${Bangla}
          Aponar GPA HOLO = D
      
          Aponi Pass Korecan,
          Aro Valo Kore Porte Hobe.
          `
  );
} else if (Bangla >= 42 && Bangla <= 70) {
  console.log(
    `
          Name: ${fullName}
          Roll: ${roll}
          Regstation Roll: ${regstationRoll}
          -------------------
          Aponar Total Mark = ${Bangla}
          Aponar GPA HOLO = A-
      
          Aponi Pass Korecan,
          Aro Valo Kore Porte Hobe.
          `
  );
} else if (Bangla >= 70 && Bangla <= 80) {
  console.log(
    `
          Name: ${fullName}
          Roll: ${roll}
          Regstation Roll: ${regstationRoll}
          -------------------
          Aponar Total Mark = ${Bangla}
          Aponar GPA HOLO = A

          Aponi Pass Korecan,
          Aro Valo Kore Porte Hobe.
          `
  );
} else if (Bangla >= 80 && Bangla <= 100) {
  console.log(
    `
          Name: ${fullName}
          Roll: ${roll}
          Regstation Roll: ${regstationRoll}
          -------------------
          Aponar Total Mark = ${Bangla}
          Aponar GPA HOLO = A+
      
          Aponi Pass Korecan,
          Aro Valo Kore Porte Hobe.
          `
  );
} else {
  console.log("Place right inpormation den ");
}
// .......................................................................

/**
 * Assignment No 2
 * Create a loop that will rotate from 1000 to 300
 * */

for (let indexs = 1000; indexs > 300; indexs--) {
  console.log(`Loop No =${indexs}`);
}

// .......................................................................

/**
 * Assignment No 3
 * Find the even and odd numbers from 1 and 1000 through for loop
 * */

for (let i = 1; i <= 1000; i++) {
  // Even
  if (i % 2 === 0) {
    console.log(`Even No =${i}`);
  }
  // Odd
  if (i % 2 !== 0) {
    console.log(`Odd No =${i}`);
  }
}
// .......................................................................
/**
 * Assignment No 4
 * Find the number divisible by 7 between 1 and 1000
 * */

for (let iss = 1; iss <= 1000; iss++) {
  if (iss % 7 === 0) {
    console.log(`Even No =${iss}`);
  }
}
// .......................................................................
/**
 * Assignment No 5
 *Create a loop using “for” that will increment by 3 per step
  and break the loop when it finds a number divisible by 11
 * */

for (let ind = 500; ind > 1; ind = 3 + ind) {
  if (ind % 11 === 0) {
    console.log(ind);
  }
}
// .......................................................................
/**
 * Assignment No 6
*Create a loop that rotates 500 times using the for loop where you
 just pull out the numbers divisible by 3 and 4
 * */

for (let ip = 1; ip < 500; ip++) {
  if (ip % 3 === 0) {
    console.log(`Loop divisible by Three ${ip}`);
  }
  if (ip % 4 === 0) {
    console.log(`Loop divisible by Fore ${ip}`);
  }
}
// .......................................................................
/**
 * Assignment No 7
 * *Create a loop where the initial value is 10,000. 
 You need to rotate the loop 50 times by using the increment and decrement operators twice.
 * */
for (let ins = 1000; ins < 1050; ins++) {
  // increment
  console.log(ins);
}
for (let inss = 1000; inss < 950; inss--) {
  // decrement
  console.log(inss);
}
