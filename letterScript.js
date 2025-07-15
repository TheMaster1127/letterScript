

function LoopParseFunc(varString, delimiter1="", delimiter2="") {
    let items;
    if (!delimiter1 && !delimiter2) {
        // If no delimiters are provided, return an array of characters
        items = [...varString];
    } else {
        // Construct the regular expression pattern for splitting the string
        let pattern = new RegExp('[' + delimiter1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + delimiter2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ']+');
        // Split the string using the constructed pattern
        items = varString.split(pattern);
    }
    return items;
}

function print(value) {
    console.log(value)
}

// Convert value to string
function STR(value) {
    if (value === null || value === undefined) {
        return ""; // Return a string for null or undefined
    } else if (typeof value === 'number') {
        return value.toString();
    } else if (typeof value === 'boolean') {
        return value ? "1" : "0";
    } else if (typeof value === 'string') {
        return value; // Return the string as is
    } else {
        // Handle any unexpected types gracefully
        return String(value); // Convert any other type to a string
    }
}

// Convert value to integer
function INT(value) {
    const intValue = parseInt(value, 10);
    if (Number.isNaN(intValue)) {
        console.warn(`Invalid input: ${value} cannot be converted to an integer.`);
        return 0;  // Or any other default value
    }
    return intValue;
}

// Function to find the position of needle in haystack (string overload)
function InStr(haystack, needle) {
    const pos = haystack.indexOf(needle);
    return (pos !== -1) ? pos + 1 : 0;
}

function Chr(number) {
    // Return the character corresponding to the Unicode code point, or an empty string if out of range
    return (number >= 0 && number <= 0x10FFFF) ? String.fromCharCode(number) : "";
}

function SubStr(str, startPos, length = -1) {
    let result = "";
    let strLen = str.length;
    // Handle negative starting positions (counting from the end)
    if (startPos < 0) {
        startPos = strLen + startPos;
        if (startPos < 0) startPos = 0;  // Ensure it doesn't go beyond the start of the string
    } else {
        startPos -= 1; // Convert to 0-based index for internal operations
    }
    // Handle length
    if (length < 0) {
        length = strLen - startPos; // Length to the end of the string
    } else if (startPos + length > strLen) {
        length = strLen - startPos; // Adjust length to fit within the string
    }
    // Extract the substring
    result = str.substr(startPos, length);
    return result;
}

function Trim(inputString) {
    return inputString ? inputString.trim() : "";
}

function StrReplace(originalString, find, replaceWith) {
    return originalString.split(find).join(replaceWith);
}

function StringTrimLeft(input, numChars) {
    return (numChars <= input.length) ? input.substring(numChars) : input;
}

function StringTrimRight(input, numChars) {
    return (numChars <= input.length) ? input.substring(0, input.length - numChars) : input;
}

      // Function to simulate AutoHotkey's RegExReplace in JavaScript
      function RegExReplace(inputStr, regexPattern, replacement) {
          // Create a regular expression object using the provided pattern
          const regex = new RegExp(regexPattern, 'g'); // 'g' flag for global match
          // Use the replace() method to perform the regex replacement
          const resultStr = inputStr.replace(regex, replacement);
          // Return the modified string
          return resultStr;
      }

// RegExMatch
function RegExMatch(haystack, needle) {
    const regex = new RegExp(needle);
    const match = haystack.match(regex);
    return match ? match.index + 1 : 0; // 1-based index or 0 if no match
}

function HTVM_Append(arr, value) {
    arr.push(value);
}

function HTVM_Size(arr) {
    return arr.length;
}


// letterScript: The Language Made For AI
// Copyright (C) 2025 TheMaster1127
// ------------------------------------------------------------------------
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// ------------------------------------------------------------------------
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
// ------------------------------------------------------------------------
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
// ------------------------------------------------------------------------
function isToken(tokenArray, line) {
    for (let A_Index1 = 0; A_Index1 < HTVM_Size(tokenArray) + 0; A_Index1++) {
        if (line == tokenArray[A_Index1]) {
            return true;
        }
    }
    return false;
}
function compiler(code) {
    var out = "";
    let theIdNumOfThe34theVar = [];
    let getAllCharForTheFurtureSoIcanAddEscapeChar = [];
    var ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = "";
    var str21 = "";
    var htCodeOUT754754 = "";
    var OutFixDoubleQuotesInsideDoubleQuotes = "";
    var keyWordEscpaeChar = "\\";
    var fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0;
    var removeNexFixkeyWordEscpaeChar = 0;
    var theIdNumOfThe34 = 0;
    var areWEinSome34sNum = 0;
    let items2 = LoopParseFunc(code);
    for (let A_Index2 = 0; A_Index2 < items2.length + 0; A_Index2++) {
        const A_LoopField2 = items2[A_Index2 - 0];
        HTVM_Append(theIdNumOfThe34theVar, "");
        HTVM_Append(theIdNumOfThe34theVar, "");
    }
    let items3 = LoopParseFunc(code);
    for (let A_Index3 = 0; A_Index3 < items3.length + 0; A_Index3++) {
        const A_LoopField3 = items3[A_Index3 - 0];
        theIdNumOfThe34theVar[A_Index3] = theIdNumOfThe34theVar[A_Index3] + Chr(34);
        HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, A_LoopField3);
    }
    HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, " ");
    ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = Chr(34) + "ihuiuuhuuhtheidFor" + str21 + "--" + str21 + "asds" + str21 + "as--" + str21 + "theuhtuwaesphoutr" + Chr(34);
    let items4 = LoopParseFunc(code);
    for (let A_Index4 = 0; A_Index4 < items4.length + 0; A_Index4++) {
        const A_LoopField4 = items4[A_Index4 - 0];
        if (A_LoopField4 == keyWordEscpaeChar && getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index4 + 1] == Chr(34)) {
            fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 1;
            OutFixDoubleQuotesInsideDoubleQuotes += ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes;
        } else {
            if (fixOutFixDoubleQuotesInsideDoubleQuotesFIXok != 1) {
                OutFixDoubleQuotesInsideDoubleQuotes += A_LoopField4;
            } else {
                fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0;
            }
        }
    }
    code = OutFixDoubleQuotesInsideDoubleQuotes;
    if (keyWordEscpaeChar != Chr(92)) {
        code = StrReplace(code, Chr(92), Chr(92) + Chr(92));
    }
    if (keyWordEscpaeChar == Chr(92)) {
        let items5 = LoopParseFunc(code);
        for (let A_Index5 = 0; A_Index5 < items5.length + 0; A_Index5++) {
            const A_LoopField5 = items5[A_Index5 - 0];
            if (A_LoopField5 == Chr(34)) {
                areWEinSome34sNum++;
            }
            if (areWEinSome34sNum == 1) {
                if (A_LoopField5 != Chr(34)) {
                    if (A_LoopField5 == keyWordEscpaeChar) {
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + Chr(92);
                    } else {
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + A_LoopField5;
                    }
                } else {
                    theIdNumOfThe34++;
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(theIdNumOfThe34) + Chr(65) + Chr(65);
                }
            }
            if (areWEinSome34sNum == 2 || areWEinSome34sNum == 0) {
                if (A_LoopField5 != Chr(34)) {
                    htCodeOUT754754 += A_LoopField5;
                }
                areWEinSome34sNum = 0;
            }
        }
    } else {
        let items6 = LoopParseFunc(code);
        for (let A_Index6 = 0; A_Index6 < items6.length + 0; A_Index6++) {
            const A_LoopField6 = items6[A_Index6 - 0];
            if (A_LoopField6 == Chr(34)) {
                areWEinSome34sNum++;
            }
            if (areWEinSome34sNum == 1) {
                if (A_LoopField6 != Chr(34)) {
                    if (A_LoopField6 == keyWordEscpaeChar && keyWordEscpaeChar == getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index6 + 1]) {
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + keyWordEscpaeChar;
                        removeNexFixkeyWordEscpaeChar = 1;
                    }
                    else if (A_LoopField6 == keyWordEscpaeChar) {
                        if (removeNexFixkeyWordEscpaeChar != 1) {
                            theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + Chr(92);
                        } else {
                            removeNexFixkeyWordEscpaeChar = 0;
                        }
                    } else {
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + A_LoopField6;
                    }
                } else {
                    theIdNumOfThe34++;
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(theIdNumOfThe34) + Chr(65) + Chr(65);
                }
            }
            if (areWEinSome34sNum == 2 || areWEinSome34sNum == 0) {
                if (A_LoopField6 != Chr(34)) {
                    htCodeOUT754754 += A_LoopField6;
                }
                areWEinSome34sNum = 0;
            }
        }
    }
    code = htCodeOUT754754;
    for (let A_Index7 = 0; A_Index7 < theIdNumOfThe34 + 0; A_Index7++) {
        theIdNumOfThe34theVar[A_Index7] = theIdNumOfThe34theVar[A_Index7] + Chr(34);
    }
    HTVM_Append(theIdNumOfThe34theVar, Chr(34));
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    var output = code;
    // STEP 1: Add space around any char that is NOT A-Z, 0-9, or _
    output = RegExReplace(output, "([^A-Z0-9_])", " $1 ");
    // STEP 2: Split digits stuck to uppercase-like vars (5PRINT → 5 PRINT), ONLY if it starts with digits
    output = RegExReplace(output, "\\b(\\d+)(?=[A-Z_][A-Z0-9_]*)\\b", "$1 ");
    // STEP 3: Fix a lowercase or digit followed by an uppercase letter (e.g. a5iA → a5i A)
    output = RegExReplace(output, "([a-z0-9])([A-Z])", "$1 $2");
    // STEP 4: Split CamelCase like Agood → A good
    output = RegExReplace(output, "\\b([A-Z])([a-z])", " $1 $2");
    // STEP 5: Add space around standalone uppercase vars
    output = RegExReplace(output, "(?<![A-Za-z0-9_])([A-Z_][A-Z0-9_]*)(?![A-Za-z0-9_])", " $1 ");
    // STEP 6: Fix wrongly split like `1 AA` → `1AA`
    output = RegExReplace(output, "(\\d+)\\s+([A-Z_]{2,})", "$1$2");
    // STEP 7: Cleanup double/multiple spaces
    while (InStr(output, "  ")) {
        output = StrReplace(output, "  ", " ");
    }
    output = Trim(output);
    var output_output = "";
    var output_outputINT = 0;
    let items8 = LoopParseFunc(output, " ");
    for (let A_Index8 = 0; A_Index8 < items8.length + 0; A_Index8++) {
        const A_LoopField8 = items8[A_Index8 - 0];
        output_outputINT = 0;
        if (RegExMatch(A_LoopField8, "^\\d")) {
            let items9 = LoopParseFunc(A_LoopField8);
            for (let A_Index9 = 0; A_Index9 < items9.length + 0; A_Index9++) {
                const A_LoopField9 = items9[A_Index9 - 0];
                if (RegExMatch(A_LoopField9, "\\D") && output_outputINT == 0) {
                    output_output += " " + A_LoopField9;
                    output_outputINT = 1;
                } else {
                    output_output += A_LoopField9;
                }
            }
            output_output += " ";
        } else {
            output_output += A_LoopField8 + " ";
        }
    }
    code = output_output;
    //print(code)
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //code
    out = "";
    code = StrReplace(code, " PRINT ", " PRINT ( ");
    var code_code = "";
    let code_codeARR = [];
    let items10 = LoopParseFunc(code, " ");
    for (let A_Index10 = 0; A_Index10 < items10.length + 0; A_Index10++) {
        const A_LoopField10 = items10[A_Index10 - 0];
        HTVM_Append(code_codeARR, A_LoopField10);
    }
    HTVM_Append(code_codeARR, " ");
    let items11 = LoopParseFunc(code, " ");
    for (let A_Index11 = 0; A_Index11 < items11.length + 0; A_Index11++) {
        const A_LoopField11 = items11[A_Index11 - 0];
        if (A_LoopField11 == "PRINT" && code_codeARR[A_Index11 + 1] != "(") {
            code_code += A_LoopField11 + " ( ";
        } else {
            code_code += A_LoopField11 + " ";
        }
    }
    code = StringTrimRight(code_code, 1);
    let continuationTokens = ["a", "=", "+", "-", ">", "<", "*", "/", "%"];
    let skipTokens = ["#", "i", "PRINT", "(", ")"];
    let furture = [];
    let items12 = LoopParseFunc(code, " ");
    for (let A_Index12 = 0; A_Index12 < items12.length + 0; A_Index12++) {
        const A_LoopField12 = items12[A_Index12 - 0];
        HTVM_Append(furture, A_LoopField12);
    }
    HTVM_Append(furture, " ");
    // isToken(tokenArray, line)
    var insideParentheses = 0;
    let items13 = LoopParseFunc(code, " ");
    for (let A_Index13 = 0; A_Index13 < items13.length + 0; A_Index13++) {
        const A_LoopField13 = items13[A_Index13 - 0];
        if (!isToken(skipTokens, A_LoopField13) && !isToken(continuationTokens, A_LoopField13) && !isToken(continuationTokens, furture[A_Index13 + 1])) {
            out += A_LoopField13 + "; ";
        } else {
            out += A_LoopField13 + " ";
        }
    }
    out = StrReplace(out, "; )", " );");
    out = StrReplace(out, "; ;", ";");
    code = StringTrimRight(out, 1);
    out = "";
    // now fix some more parsenesis in nested stuff
    insideParentheses = 0;
    let items14 = LoopParseFunc(code, " ");
    for (let A_Index14 = 0; A_Index14 < items14.length + 0; A_Index14++) {
        const A_LoopField14 = items14[A_Index14 - 0];
        if (insideParentheses > 1) {
            if (InStr(A_LoopField14, ";")) {
                out += StrReplace(A_LoopField14, ";", "") + " ";
            } else {
                out += A_LoopField14 + " ";
            }
        } else {
            out += A_LoopField14 + " ";
        }
        if (A_LoopField14 == "(") {
            insideParentheses++;
        }
        if (A_LoopField14 == ")" || A_LoopField14 == ");") {
            insideParentheses--;
        }
    }
    code = StringTrimRight(out, 1);
    out = "";
    // now remove if there is a ; before a continuation token
    let furture2 = [];
    let items15 = LoopParseFunc(code, " ");
    for (let A_Index15 = 0; A_Index15 < items15.length + 0; A_Index15++) {
        const A_LoopField15 = items15[A_Index15 - 0];
        HTVM_Append(furture2, A_LoopField15);
    }
    HTVM_Append(furture2, " ");
    let items16 = LoopParseFunc(code, " ");
    for (let A_Index16 = 0; A_Index16 < items16.length + 0; A_Index16++) {
        const A_LoopField16 = items16[A_Index16 - 0];
        if (InStr(A_LoopField16, ";") && isToken(continuationTokens, furture2[A_Index16 + 1])) {
            out += StrReplace(A_LoopField16, ";", "") + " ";
        } else {
            out += A_LoopField16 + " ";
        }
    }
    code = StringTrimRight(out, 1);
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    out = "";
    // NOW I CAN PARSE IT TO HTVM
    code = Trim(StrReplace(code, ";", Chr(10)));
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var str5 = "";
    let items17 = LoopParseFunc(code, "\n", "\r");
    for (let A_Index17 = 0; A_Index17 < items17.length + 0; A_Index17++) {
        const A_LoopField17 = items17[A_Index17 - 0];
        if (SubStr(Trim(A_LoopField17), 1, 2) == "# ") {
            str1 = Trim(A_LoopField17);
            str1 = StringTrimLeft(str1, 2);
            out += "int " + StrReplace(str1, " a ", " := ") + Chr(10);
        }
        else if (SubStr(Trim(A_LoopField17), 1, 2) == "i ") {
            str1 = Trim(A_LoopField17);
            str1 = StringTrimLeft(str1, 2);
            out += "if (" + str1 + ") {" + Chr(10);
        }
        else if (Trim(A_LoopField17) == "x") {
            out += "}" + Chr(10);
        } else {
            str1 = Trim(A_LoopField17);
            str1 = RegExReplace(str1, "\\bPRINT\\b", "print");
            str1 = StrReplace(str1, " ) ", ")");
            str1 = StrReplace(str1, " ( ", "(");
            str1 = StrReplace(str1, " )", ")");
            out += Trim(str1) + Chr(10);
        }
    }
    code = StringTrimRight(out, 1);
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    out = code;
    //print(out)
    for (let A_Index18 = 0; A_Index18 < theIdNumOfThe34 + 0; A_Index18++) {
        if (theIdNumOfThe34 == A_Index18 + 1) {
            out = StrReplace(out, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index18 + 1) + Chr(65) + Chr(65), StrReplace(theIdNumOfThe34theVar[A_Index18 + 1], keyWordEscpaeChar, "\\") + Chr(34));
        } else {
            out = StrReplace(out, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index18 + 1) + Chr(65) + Chr(65), StrReplace(theIdNumOfThe34theVar[A_Index18 + 1], keyWordEscpaeChar, "\\"));
        }
    }
    return out;
}
async function main() {
    // test
    print(compiler("#Aa5iA=5PRINT 500)PRINT 600+5)xPRINT 700)PRINT " + Chr(34) + "HI" + Chr(34) + ")"));
    print("======================");
    print(compiler("#VARa5iVAR=5PRINT " + Chr(34) + "Hello" + Chr(34) + ")x"));

}
main();