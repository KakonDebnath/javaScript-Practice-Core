/* Problem:2   isJavaScriptFile 
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

Sample Data
Input	Output
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'
    true
false
false
true
 */


/* function isJavaScriptFile(fileName) {
    let text=  fileName.toLowerCase();
    let sfileName = text.split("");
    if (sfileName[sfileName.length - 1] === "s") {
        if (sfileName[sfileName.length - 2] == "j") {
            if (sfileName[sfileName.length - 3] == ".") {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    else {
        return false;
    }
} */
// Another Way
function isJavaScriptFile(fileName) {
    let file = fileName.endsWith(".js");
    return file;
}

const fileName = "index.js";
const fileType = isJavaScriptFile(fileName);
console.log(fileType);