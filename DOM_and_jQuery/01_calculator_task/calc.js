/*
 * Implement all your JavaScript in this file!
 *  $('#output').html('test');
 */
var acc = null;
var argument = null;
var operation = null;
var clearPermission = true;
var actionButtonPermission = true;
var repeatEquationPermission = false;

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
    actionButtonPermission = true;
    repeatEquationPermission = false;
}

function obtainValue() {
    return $('#display').val();
}

function doMath() {
    var result = eval(acc + operation + argument);
    $('#display').val(result);
    acc = result;
}

function prepareEquation() {
    if (acc === null)
        acc = obtainValue();
    else {
        argument = obtainValue();
        doMath();
    }
    actionButtonPermission = false;
    repeatLastEquation = false;
}

function setOperation() {
    clearPermission = true;

    switch (this.id) {
        case "addButton":
            if (actionButtonPermission) {
                prepareEquation();
            }
            operation = "+";
            break;
        case "subtractButton":
            if (actionButtonPermission) {
                prepareEquation();
            }
            operation = "-";
            break;
        case "multiplyButton":
            if (actionButtonPermission) {
                prepareEquation();
            }
            operation = "*";
            break;
        case "divideButton":
            if (actionButtonPermission) {
                prepareEquation();
            }
            operation = "/";
            break;
        case "clearButton":
            acc = null;
            argument = null;
            operation = null;
            cleanDisplay();
            break;
        case "equalsButton":
            if (repeatEquationPermission) {
                acc = obtainValue();
                doMath();
                acc = null;
            }
            else if (actionButtonPermission) {
                if (acc !== null) {
                    argument = obtainValue();
                    doMath();
                    acc = null;

                    repeatEquationPermission = true;
                }
            }
            break;
    }
}