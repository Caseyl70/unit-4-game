$(document).ready(function() {
    console.log("working")
    var wins = 0;
    var loss = 0;
    var userTotal = 0;
    var targetNum = 0;
    var crystals = []

    function reset() {
        userTotal = 0;
        targetNum = Math.round(Math.random() * 101) + 19;
        crystals = crystalGenerator();
        console.log(crystals);
        $("#randomNumber").text(targetNum);
        $("#winsCount").text(wins);
        $("#lossCount").text(loss);
        $("#playerScore").text(userTotal);
    }

    function crystalGenerator() {
        var arr = [];
        for (i = 0; i < 4; i++) {
            var crys = Math.ceil(Math.random() * 12);
            arr.push(crys);
        }
        return arr;
    }

    reset();

    function winloss() {
        if (userTotal === targetNum) {
            alert("Winner");
            wins++;
            reset();
        } else if (userTotal > targetNum) {
            alert("Game over, Try again!");
            loss++;
            reset();
        }

    }


    $("#crystal").on("click", ".btn", function() {
        var id = $(this).attr("id");
        if (id === "black") {
            userTotal += crystals[0];
        } else if (id === "blue") {
            userTotal += crystals[1];
        } else if (id === "pink") {
            userTotal += crystals[2];
        } else if (id === "red") {
            userTotal += crystals[3];
        }
        winloss();

        // console.log(id);
        $("#playerScore").text(userTotal);
    })
})