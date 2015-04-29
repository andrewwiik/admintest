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

    $scope.user.availability = [{
        date: "2015-04-29",
        start_time: "8:00am",
        end_time: "9:00am"
    }, {
        date: "2015-04-30",
        start_time: "8:00am",
        end_time: "9:00am"
    }, {
        date: "2015-05-01",
        start_time: "8:00am",
        end_time: "9:00am"
    }, {
        date: "2015-05-02",
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
            controller: MainCtrl
        });
    };

    $scope.saveBasicProfile = function() {
        if ($scope.formBasicProfile.$valid) {
            console.log('update ibox');
        } else {
            $scope.formBasicProfile.submitted = true;
        }
    };

    $scope.openEditContactDetails = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_contact_details.html',
            controller: MainCtrl
        });
    };

    $scope.saveContactDetails = function() {
        if ($scope.formBasicProfile.$valid) {
            console.log('update ibox');
        } else {
            $scope.formBasicProfile.submitted = true;
        }
    };

    $scope.openEditVoterInformation = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_voter_information.html',
            controller: MainCtrl
        });
    };

    $scope.saveVoterInformation = function() {
        if ($scope.formBasicProfile.$valid) {
            console.log('update ibox');
        } else {
            $scope.formBasicProfile.submitted = true;
        }
    };

    $scope.closeModal = function() {
        console.log('close modal');
    };

    //edit social media
    $scope.openEditSocialMedia = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/edit_social_media.html'
        });
    };
}

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl);