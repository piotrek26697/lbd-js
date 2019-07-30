/*
 * Implement all your JavaScript in this file!
 *  $('#output').html('test');
 */
var acc = null;
var argument = null;
var operation = null;
var clearPermission = true;
var actionButtonPermission = true;

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
}

function obtainValue() {
    return $('#display').val();
}

function doMath() {
    if (acc && argument && operation) {
        var result = eval(acc + operation + argument);
        $('#display').val(result);
        acc = result;
    }
}

function prepareEquation() {
    if (acc === null)
        acc = obtainValue();
    else {
        argument = obtainValue();
        doMath();
    }
    actionButtonPermission = false;
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
            if (actionButtonPermission) {
                if (acc !== null) {
                    argument = obtainValue();
                    doMath();
                    acc = null;
                }
            }
            break;
    }
}