var app = angular.module('Mittwochs-Stammtisch', ['ngMaterial', 'ngMessages']);
// var app = angular.module('VizAlgorithms', []);


app.controller('indexController', function ($scope) {

    $scope.searching = {}
    $scope.searching.maxLength = 10
    $scope.searching.maxNumber = 10

    console.log("LOL")

    let countDownDate = new Date("Jun 21, 2024 18:00:00").getTime();

    let x = setInterval(function () {
        console.log("AAA")
        let now = new Date().getTime();

        var distance = countDownDate - now;


        console.log(distance)
        // $scope.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // $scope.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // $scope.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // $scope.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x)
            document.getElementById("countdownTimer").innerHTML = "EXPIRED";

            // TODO: Do stuff when timer expires
            // Like unlocking the rule set
        }
    }, 1000)

    // $scope.days = 0
    // $scope.hours = 0
    // $scope.minutes = 0
    // $scope.seconds = 0
})