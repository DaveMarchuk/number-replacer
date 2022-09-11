Describe: numberTranslate(numInput)

Test:"It should return the number 7."
Code: numberTranslate(7);
Expected output: 7;

Describe: numberTranslate(numInput)

Test:"It should return an array with the values ['0','1','2','3']"
Code: numberTranslate(3);
Expected output: ['0','1','2','3'];

Describe: numberTranslate(numInput)

Test:"The input 1, the array should return 0, then replace 1 with "Boop!"
Code: numberTranslate(1);
Expected output: ['0','Beep!'];

Describe: numberTranslate(numInput)

Test:"The input 4, the array should return up to 4, then replace the numbers. 1 will become "Beep!", 2 will become "Boop", 3 will become "Won't you be my neighbor?".
Code: numberTranslate(4);
Expected output: ['0','Beep!','Boop!','Won't you be my neighbor?','4'];

Describe: numberTranslate(numInput)

Test:"The input 14, the array should return up to 14, then replace each number in hierarchal order. 1 will become "Beep!", 2 will become "Boop", 3 will become "Won't you be my neighbor?".
Code: numberTranslate(14);
Expected output: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!']

Describe: numberTranslate(numInput)

Test:"The input 33, the array should return up to 33, then replace each number in hierarchal order. 1 will become "Beep!", 2 will become "Boop", 3 will become "Won't you be my neighbor?". In going higher we encounter more situations where the hierarchy will be ignored without better branching."
Code: numberTranslate(33);
Expected output: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor?", 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]
