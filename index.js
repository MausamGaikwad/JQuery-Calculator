$(document).ready(function() {
    let displayVal = "";

    $(".number").click(function() {
        displayVal=displayVal+ $(this).attr("value");
        $("#display").val(displayVal);
    });

    $(".operator").click(function() {
        displayVal=displayVal+ $(this).text();
        $("#display").val(displayVal);
    });

    $(".clear").click(function() {
        displayVal = "";
        $("#display").val("");
    });

    $(".calculate").click(function() {
        try {
            displayVal = eval(displayVal);
            $("#display").val(displayVal);
        } catch (e) {
            $("#display").val("Error");
        }
    });
});
