/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $modal) {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

    //private profile data
    $scope.user = {
      full_name: "Nicki Smith",
      get_avatar_url: 'img/a8.jpg',
      head_office: "Alexandria Office",
      volunteer_type: "Super Volunteer",
      about_me: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.",
      volts_score: "260"
    };

    $scope.user.contact_details = {
        address_line1: "795 Folsom Ave, Suite 600",
        address_line2: "as",
        city: "San Francisco",
        state: "CA",
        zip: 94107,
        email: "nicki@mail.com",
        mobile: "(+121) 678 3462",
        landline: "(+121) 678 3462"
    };

    $scope.user.voter_information = {
        us_senate: "VA",
        us_house: "US-4",
        state_senate: 12,
        state_house: 14,
        precinct: "Alexandria 001"
    };

    $scope.weekdays = [
        'Monday',
        'Tuesday',
        'wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    $scope.user.availabilities = [{
        day: "Monday",
        start_time: "8:00am",
        end_time: "9:00am"
    }, {
        day: "Monday",
        start_time: "8:00am",
        end_time: "9:00am"
    }, {
        day: "Friday",
        start_time: "8:00am",
        end_time: "9:00am"
    }, {
        day: "Sunday",
        start_time: "8:00am",
        end_time: "9:00am"
    }];

    $scope.user.social_media = [{
        icon: 'facebook',
        title: 'Facebook',
        url: '#'
    }, {
        icon: 'twitter',
        title: 'twitter',
        url: ''
    }, {
        icon: 'linkedin',
        title: 'linkedin',
        url: '#'
    }];

    //edit basic profile
    $scope.openEditBasicProfile = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_basic_profile.html',
            controller: ModalInstanceCtrl,
            scope: $scope
        });
    };

    $scope.openEditContactDetails = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_contact_details.html',
            controller: ModalInstanceCtrl,
            scope: $scope
        });
    };

    $scope.openEditVoterInformation = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/asdfa.html',
            controller: ModalInstanceCtrl,
            scope: $scope
        });
    };

    //edit social media
    $scope.openEditSocialMedia = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_social_media.html',
            controller: ModalInstanceCtrl,
            scope: $scope
        });
    };

    //edit user availability
    $scope.availability = {};

    $scope.openEditAvailability = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_availability.html',
            controller: ModalInstanceCtrl,
            scope: $scope,
            size: 'lg'
        });
    };

    $scope.deleteSlot = function(i) {
        var index = $scope.user.availabilities.indexOf(i);
        $scope.user.availabilities.splice(index, 1);
    };

    $scope.states = [{
        title: 'One',
        value: 1
    }, {
        title: 'Two',
        value: 2
    }, {
        title: 'Three',
        value: 3
    }, {
        title: 'Four',
        value: 4
    }];

    $scope.updateState = function() {
        console.log(this.state);
    }

    $scope.offices = [
        {
            "label" : "Pedro for President",
            "value": "2",
            "data-type": "1",
            "data-avatar": "img/building_100.png",
            "data-depth": "0"
        },
        {
            "label" : "West Region",
            "value": "3",
            "data-type": "2",
            "data-avatar": "img/building_100.png",
            "data-depth": "1"
        },
        {
            "label" : "Ann Arbor Area",
            "value": "4",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        },
        {
            "label" : "Austin Area",
            "value": "7",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        },
        {
            "label" : "Dallas Area",
            "value": "8",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        },
        {
            "label" : "Fort Worth Area",
            "value": "12",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        },
        {
            "label" : "El Paso Area",
            "value": "22",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        },
        {
            "label" : "East Region",
            "value": "13",
            "data-type": "2",
            "data-avatar": "img/building_100.png",
            "data-depth": "1"
        },
        {
            "label" : "New York Area",
            "value": "14",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        },
        {
            "label" : "DC Area",
            "value": "15",
            "data-type": "3",
            "data-avatar": "img/building_100.png",
            "data-depth": "2"
        }
    ];
}

function ModalInstanceCtrl ($scope, $modalInstance, $filter) {
    $scope.closeModal = function() {
        $modalInstance.close();
    };

    $scope.saveBasicProfile = function() {
        if ($scope.formBasicProfile.$valid) {
            $modalInstance.close();
        } else {
            $scope.formBasicProfile.submitted = true;
        }
    };

    $scope.saveVoterInformation = function() {
        if ($scope.formVoterInformation.$valid) {
            var formData = $('#formVoterInformation').serializeArray();
            angular.forEach(formData, function(data) {
                $scope.user.voter_information[data.name] = data.value
            });
            $modalInstance.close();
        } else {
            $scope.formVoterInformation.submitted = true;
        }
    };

    $scope.saveContactDetails = function() {
        if ($scope.formContactDetails.$valid) {
            $modalInstance.close();
        } else {
            $scope.formContactDetails.submitted = true;
        }
    };

    $scope.saveSocialMedia = function() {
        if ($scope.formSocialMedia.$valid) {

            $modalInstance.close();
        } else {
            $scope.formSocialMedia.submitted = true;
        }
    };

    $scope.availability.day = "Monday";
    $scope.availability.start_time = new Date();
    $scope.availability.end_time = new Date();
    $scope.saveAvailability = function() {
        if ($scope.formAvailability.$valid) {
            var availability = {};
            availability.day = $scope.availability.day;
            availability.start_time = $filter('date')($scope.availability.start_time, 'shortTime');
            availability.end_time = $filter('date')($scope.availability.end_time, 'shortTime');
            $scope.user.availabilities.push(availability);
            $modalInstance.close();
        } else {
            $scope.formAvailability.submitted = true;
        }
    };

}

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);