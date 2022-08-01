var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    $scope.person = [
        Name = "",
        surname = "",
        phoneNumber = "",
        Email = "",
        password = "",
        confirmPassword = "",
    ]
    $scope.meassage = '';
    $scope.person = [];
    $scope.myForm = function () {
        if ($scope.person) {
            $scope.person.push({
                Name: $scope.Name,
                surname: $scope.surname,
                phoneNumber: $scope.phoneNumber,
                Email: $scope.Email,
                password: $scope.password,
                confirmPassword: $scope.confirmPassword,
            })
        }
    }
    // if(password===confirmPassword){
    //     $scope.meassage=' password is valid'
    // }else{
    //     $scope.meassage='password is invalid'
    // };
    // if(password !=confirmPassword){
        
    // }
})