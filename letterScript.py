import re

def LoopParseFunc(var, delimiter1="", delimiter2=""):
    if not delimiter1 and not delimiter2:
        # If no delimiters are provided, return a list of characters
        items = list(var)
    else:
        # Construct the regular expression pattern for splitting the string
        pattern = r'[' + re.escape(delimiter1) + re.escape(delimiter2) + r']+'
        # Split the string using the constructed pattern
        items = re.split(pattern, var)
    return items

# used the print func

# Convert value to string
def STR(value):
    if isinstance(value, (int, float)):
        return str(value)
    elif isinstance(value, bool):
        return "1" if value else "0"
    elif isinstance(value, str):
        return value  # If the value is already a string, return it as-is
    else:
        raise TypeError("Unsupported type")

# Convert value to integer
def INT(value):
    try:
        # Try converting the value to an integer
        return int(float(value))
    except ValueError:
        # If conversion fails, raise a TypeError
        raise TypeError("Cannot convert to integer")

# Function to find the position of needle in haystack (str overload)
def InStr(haystack: str, needle: str) -> int:
    pos = haystack.find(needle)
    return pos + 1 if pos != -1 else 0

def Chr(number: int) -> str:
    # Return the character corresponding to the Unicode code point, or an empty string if out of range
    return chr(number) if 0 <= number <= 0x10FFFF else ""

def SubStr(s, startPos, length=-1):
    result = ""
    strLen = len(s)
    # Handle negative starting positions (counting from the end)
    if startPos < 0:
        startPos = strLen + startPos
        if startPos < 0:
            startPos = 0  # Ensure it doesn't go beyond the start of the string
    else:
        startPos -= 1  # Convert to 0-based index for internal operations
    # Handle length
    if length < 0:
        length = strLen - startPos  # Length to the end of the string
    elif startPos + length > strLen:
        length = strLen - startPos  # Adjust length to fit within the string
    # Extract the substring
    result = s[startPos:startPos + length]
    return result

def Trim(inputString):
    return inputString.strip() if inputString else ""

def StrReplace(originalString, find, replaceWith):
    return originalString.replace(find, replaceWith)

def StringTrimLeft(input, numChars):
    return input[numChars:] if numChars <= len(input) else input

def StringTrimRight(input, numChars):
    return input[:-numChars] if numChars <= len(input) else input

def RegExReplace(inputStr, regexPattern, replacement):
    # Convert `$1`, `$2`, etc. to `\1`, `\2` so Python understands
    replacement = re.sub(r'\$(\d+)', r'\\\1', replacement)
    regex = re.compile(regexPattern, re.MULTILINE)
    return regex.sub(replacement, inputStr)

def RegExMatch(haystack, needle):
    match = re.search(needle, haystack)
    return match.start() + 1 if match else 0 # 1-based index or 0 if no match

def HTVM_Append(arr, value):
    arr.append(value)

def HTVM_Size(arr):
    return len(arr)


# letterScript: The Language Made For AI
# Copyright (C) 2025 TheMaster1127
# ------------------------------------------------------------------------
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# ------------------------------------------------------------------------
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
# ------------------------------------------------------------------------
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <https://www.gnu.org/licenses/>.
# ------------------------------------------------------------------------
def isToken(tokenArray, line):
    for A_Index1 in range(0, HTVM_Size(tokenArray) + 0):
        if (line == tokenArray[A_Index1]):
            return True
    return False
def compiler(code):
    out = ""
    theIdNumOfThe34theVar = []
    getAllCharForTheFurtureSoIcanAddEscapeChar = []
    ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = ""
    str21 = ""
    htCodeOUT754754 = ""
    OutFixDoubleQuotesInsideDoubleQuotes = ""
    keyWordEscpaeChar = "\\"
    fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0
    removeNexFixkeyWordEscpaeChar = 0
    theIdNumOfThe34 = 0
    areWEinSome34sNum = 0
    items2 = LoopParseFunc(code)
    for A_Index2 , A_LoopField2 in enumerate(items2, start=0):
        HTVM_Append(theIdNumOfThe34theVar, "")
        HTVM_Append(theIdNumOfThe34theVar, "")
    items3 = LoopParseFunc(code)
    for A_Index3 , A_LoopField3 in enumerate(items3, start=0):
        theIdNumOfThe34theVar[A_Index3] = theIdNumOfThe34theVar[A_Index3] + Chr(34)
        HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, A_LoopField3)
    HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, " ")
    ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = Chr(34) + "ihuiuuhuuhtheidFor" + str21 + "--" + str21 + "asds" + str21 + "as--" + str21 + "theuhtuwaesphoutr" + Chr(34)
    items4 = LoopParseFunc(code)
    for A_Index4 , A_LoopField4 in enumerate(items4, start=0):
        if (A_LoopField4 == keyWordEscpaeChar and getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index4 + 1] == Chr(34)):
            fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 1
            OutFixDoubleQuotesInsideDoubleQuotes += ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes
        else:
            if (fixOutFixDoubleQuotesInsideDoubleQuotesFIXok != 1):
                OutFixDoubleQuotesInsideDoubleQuotes += A_LoopField4
            else:
                fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0
    code = OutFixDoubleQuotesInsideDoubleQuotes
    if (keyWordEscpaeChar != Chr(92)):
        code = StrReplace(code, Chr(92), Chr(92) + Chr(92))
    if (keyWordEscpaeChar == Chr(92)):
        items5 = LoopParseFunc(code)
        for A_Index5 , A_LoopField5 in enumerate(items5, start=0):
            if (A_LoopField5 == Chr(34)):
                areWEinSome34sNum += 1
            if (areWEinSome34sNum == 1):
                if (A_LoopField5 != Chr(34)):
                    if (A_LoopField5 == keyWordEscpaeChar):
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + Chr(92)
                    else:
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + A_LoopField5
                else:
                    theIdNumOfThe34 += 1
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(theIdNumOfThe34) + Chr(65) + Chr(65)
            if (areWEinSome34sNum == 2 or areWEinSome34sNum == 0):
                if (A_LoopField5 != Chr(34)):
                    htCodeOUT754754 += A_LoopField5
                areWEinSome34sNum = 0
    else:
        items6 = LoopParseFunc(code)
        for A_Index6 , A_LoopField6 in enumerate(items6, start=0):
            if (A_LoopField6 == Chr(34)):
                areWEinSome34sNum += 1
            if (areWEinSome34sNum == 1):
                if (A_LoopField6 != Chr(34)):
                    if (A_LoopField6 == keyWordEscpaeChar and keyWordEscpaeChar == getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index6 + 1]):
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + keyWordEscpaeChar
                        removeNexFixkeyWordEscpaeChar = 1
                    elif (A_LoopField6 == keyWordEscpaeChar):
                        if (removeNexFixkeyWordEscpaeChar != 1):
                            theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + Chr(92)
                        else:
                            removeNexFixkeyWordEscpaeChar = 0
                    else:
                        theIdNumOfThe34theVar[theIdNumOfThe34] = theIdNumOfThe34theVar[theIdNumOfThe34] + A_LoopField6
                else:
                    theIdNumOfThe34 += 1
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(theIdNumOfThe34) + Chr(65) + Chr(65)
            if (areWEinSome34sNum == 2 or areWEinSome34sNum == 0):
                if (A_LoopField6 != Chr(34)):
                    htCodeOUT754754 += A_LoopField6
                areWEinSome34sNum = 0
    code = htCodeOUT754754
    for A_Index7 in range(0, theIdNumOfThe34 + 0):
        theIdNumOfThe34theVar[A_Index7] = theIdNumOfThe34theVar[A_Index7] + Chr(34)
    HTVM_Append(theIdNumOfThe34theVar, Chr(34))
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    output = code
    # STEP 1: Add space around any char that is NOT A-Z, 0-9, or _
    output = RegExReplace(output, "([^A-Z0-9_])", " $1 ")
    # STEP 2: Split digits stuck to uppercase-like vars (5PRINT → 5 PRINT), ONLY if it starts with digits
    output = RegExReplace(output, "\\b(\\d+)(?=[A-Z_][A-Z0-9_]*)\\b", "$1 ")
    # STEP 3: Fix a lowercase or digit followed by an uppercase letter (e.g. a5iA → a5i A)
    output = RegExReplace(output, "([a-z0-9])([A-Z])", "$1 $2")
    # STEP 4: Split CamelCase like Agood → A good
    output = RegExReplace(output, "\\b([A-Z])([a-z])", " $1 $2")
    # STEP 5: Add space around standalone uppercase vars
    output = RegExReplace(output, "(?<![A-Za-z0-9_])([A-Z_][A-Z0-9_]*)(?![A-Za-z0-9_])", " $1 ")
    # STEP 6: Fix wrongly split like `1 AA` → `1AA`
    output = RegExReplace(output, "(\\d+)\\s+([A-Z_]{2,})", "$1$2")
    # STEP 7: Cleanup double/multiple spaces
    while (InStr(output, "  ")):
        output = StrReplace(output, "  ", " ")
    output = Trim(output)
    output_output = ""
    output_outputINT = 0
    items8 = LoopParseFunc(output, " ")
    for A_Index8 , A_LoopField8 in enumerate(items8, start=0):
        output_outputINT = 0
        if (RegExMatch(A_LoopField8, "^\\d")):
            items9 = LoopParseFunc(A_LoopField8)
            for A_Index9 , A_LoopField9 in enumerate(items9, start=0):
                if (RegExMatch(A_LoopField9, "\\D") and output_outputINT == 0):
                    output_output += " " + A_LoopField9
                    output_outputINT = 1
                else:
                    output_output += A_LoopField9
            output_output += " "
        else:
            output_output += A_LoopField8 + " "
    code = output_output
    #print(code)
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #code
    out = ""
    code = StrReplace(code, " PRINT ", " PRINT ( ")
    code_code = ""
    code_codeARR = []
    items10 = LoopParseFunc(code, " ")
    for A_Index10 , A_LoopField10 in enumerate(items10, start=0):
        HTVM_Append(code_codeARR, A_LoopField10)
    HTVM_Append(code_codeARR, " ")
    items11 = LoopParseFunc(code, " ")
    for A_Index11 , A_LoopField11 in enumerate(items11, start=0):
        if (A_LoopField11 == "PRINT" and code_codeARR[A_Index11 + 1] != "("):
            code_code += A_LoopField11 + " ( "
        else:
            code_code += A_LoopField11 + " "
    code = StringTrimRight(code_code, 1)
    continuationTokens = ["a", "=", "+", "-", ">", "<", "*", "/", "%"]
    skipTokens = ["#", "i", "PRINT", "(", ")"]
    furture = []
    items12 = LoopParseFunc(code, " ")
    for A_Index12 , A_LoopField12 in enumerate(items12, start=0):
        HTVM_Append(furture, A_LoopField12)
    HTVM_Append(furture, " ")
    # isToken(tokenArray, line)
    insideParentheses = 0
    items13 = LoopParseFunc(code, " ")
    for A_Index13 , A_LoopField13 in enumerate(items13, start=0):
        if (not isToken(skipTokens, A_LoopField13) and not isToken(continuationTokens, A_LoopField13) and not isToken(continuationTokens, furture[A_Index13 + 1])):
            out += A_LoopField13 + "; "
        else:
            out += A_LoopField13 + " "
    out = StrReplace(out, "; )", " );")
    out = StrReplace(out, "; ;", ";")
    code = StringTrimRight(out, 1)
    out = ""
    # now fix some more parsenesis in nested stuff
    insideParentheses = 0
    items14 = LoopParseFunc(code, " ")
    for A_Index14 , A_LoopField14 in enumerate(items14, start=0):
        if (insideParentheses > 1):
            if (InStr(A_LoopField14, ";")):
                out += StrReplace(A_LoopField14, ";", "") + " "
            else:
                out += A_LoopField14 + " "
        else:
            out += A_LoopField14 + " "
        if (A_LoopField14 == "("):
            insideParentheses += 1
        if (A_LoopField14 == ")" or A_LoopField14 == ");"):
            insideParentheses -= 1
    code = StringTrimRight(out, 1)
    out = ""
    # now remove if there is a ; before a continuation token
    furture2 = []
    items15 = LoopParseFunc(code, " ")
    for A_Index15 , A_LoopField15 in enumerate(items15, start=0):
        HTVM_Append(furture2, A_LoopField15)
    HTVM_Append(furture2, " ")
    items16 = LoopParseFunc(code, " ")
    for A_Index16 , A_LoopField16 in enumerate(items16, start=0):
        if (InStr(A_LoopField16, ";") and isToken(continuationTokens, furture2[A_Index16 + 1])):
            out += StrReplace(A_LoopField16, ";", "") + " "
        else:
            out += A_LoopField16 + " "
    code = StringTrimRight(out, 1)
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    out = ""
    # NOW I CAN PARSE IT TO HTVM
    code = Trim(StrReplace(code, ";", Chr(10)))
    str1 = ""
    str2 = ""
    str3 = ""
    str4 = ""
    str5 = ""
    items17 = LoopParseFunc(code, "\n", "\r")
    for A_Index17 , A_LoopField17 in enumerate(items17, start=0):
        if (SubStr(Trim(A_LoopField17), 1, 2) == "# "):
            str1 = Trim(A_LoopField17)
            str1 = StringTrimLeft(str1, 2)
            out += "int " + StrReplace(str1, " a ", " := ") + Chr(10)
        elif (SubStr(Trim(A_LoopField17), 1, 2) == "i "):
            str1 = Trim(A_LoopField17)
            str1 = StringTrimLeft(str1, 2)
            out += "if (" + str1 + ") {" + Chr(10)
        elif (Trim(A_LoopField17) == "x"):
            out += "}" + Chr(10)
        else:
            str1 = Trim(A_LoopField17)
            str1 = RegExReplace(str1, "\\bPRINT\\b", "print")
            str1 = StrReplace(str1, " ) ", ")")
            str1 = StrReplace(str1, " ( ", "(")
            str1 = StrReplace(str1, " )", ")")
            out += Trim(str1) + Chr(10)
    code = StringTrimRight(out, 1)
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    #;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    out = code
    #print(out)
    for A_Index18 in range(0, theIdNumOfThe34 + 0):
        if (theIdNumOfThe34 == A_Index18 + 1):
            out = StrReplace(out, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index18 + 1) + Chr(65) + Chr(65), StrReplace(theIdNumOfThe34theVar[A_Index18 + 1], keyWordEscpaeChar, "\\") + Chr(34))
        else:
            out = StrReplace(out, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index18 + 1) + Chr(65) + Chr(65), StrReplace(theIdNumOfThe34theVar[A_Index18 + 1], keyWordEscpaeChar, "\\"))
    return out
# test
print(compiler("#Aa5iA=5PRINT 500)PRINT 600+5)xPRINT 700)PRINT " + Chr(34) + "HI" + Chr(34) + ")"))
print("======================")
print(compiler("#VARa5iVAR=5PRINT " + Chr(34) + "Hello" + Chr(34) + ")x"))
