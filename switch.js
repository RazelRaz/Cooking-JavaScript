var marks = 45
switch (true) {
    case (marks <= 100 && marks >= 80):
        console.log('A+');
        break;
    case (marks <= 79 && marks >= 70):
        console.log('B');
        break;
    case (marks <= 69 && marks >= 60):
        console.log('C');
    case (marks <= 59 && marks >= 50):
        console.log('D');
    case (marks <= 49 ):
        console.log('Fail');
    default:
        break;
}