/*
 * Implement all your JavaScript in this file!
 *  $('#output').html('test');
 */
var number1 = null;
var number2 = null;
var operation = null;
var clearPermission = true;

$("button[id^='button']").click(showNumber);
$("button[id$='Button']").click(setOperation);

function cleanDisplay() {
    if (clearPermission) {
        $('#display').val("");
        clearPermission = false;
    }
}

function showNumber() {
    cleanDisplay();
    $('#display').val($('#display').val() + ($(this).val()));
}

function setOperation() {
    cleanDisplay();
    clearPermission = true;

    if (number1 === null)
        number1 = $('#display').val();
    else
        number2 = $('#display').val();

    switch (this.id) {
        case "addButton":
            doMath();
            operation = "+";
            break;
        case "subtractButton":
            doMath();
            operation = "-";
            break;
        case "multiplyButton":
            doMath();
            operation = "*";
            break;
        case "divideButton":
            doMath();
            operation = "/";
            break;
        case "clearButton":
            number1 = null;
            number2 = null;
            operation = null;
            $('#display').val("");
            break;
        case "equalsButton":
            doMath();

    }
    function doMath() {
        if (number1 && number2) {
            var result = eval(number1 + operation + number2);
            $('#display').val(result);
            number1 = result;
            number2 = null;
            operation = null;
        }
    }
}