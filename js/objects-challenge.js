/* 
    Name:
    Student ID:
    Date:
    Desc:
*/

// For all Console Logs use String Literals 

// 1. Create a new Boolean named isFridgeRuning set to either true or false and display the value in the console.

    let isFridgeRunning = new Boolean(true)
    console.log(`isFridgeOn: ${isFridgeRunning}`);

// 2. Attach a property to isFridgeOn name caughtIt and set to either true or false. Display it in the console

    isFridgeRunning.caughtIt = true;
    console.log(`Did you catch it: ${isFridgeRunning.caughtIt}`);

// 3. Create a new Number as an object and display it in the console.
    
    let myNumber = new Number(2);
    console.log(`my number: ${myNumber}`);

// 4. Attach 2 properties to your number object, one named oneLess and one name oneMore. Display them in the console.

    myNumber.oneLess = myNumber - 1;
    myNumber.oneMore = myNumber + 1;

    console.log(`one less: ${myNumber.oneLess}`);
    console.log(`one more: ${myNumber.oneMore}`);

// 5. Create a new String. Display it in the console.

    let newString = new String("Hello World");
    console.log(`my string: ${newString}`);

// 6. Use the split function to display each character in the console.
    
    console.log(`my string split: ${newString.split("")}`);

// 7. Create a new Date object with the release date of you favourite movie. 

    let intersellarRelease = new Date();
    intersellarRelease.setFullYear(2014);
    intersellarRelease.setMonth(11);
    intersellarRelease.setDate(7);

// 8. Display the date in the console as a string, a date string and a locale date string
    console.log(`intersellar relase date: ${intersellarRelease.toString()}`);
    console.log(`intersellar relase date: ${intersellarRelease.toDateString()}`);
    console.log(`intersellar relase date: ${intersellarRelease.toLocaleDateString()}`);

