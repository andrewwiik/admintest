/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

    //private profile data
    this.user = {
      full_name: "Nicki Smith",
      get_avatar_url: 'img/a8.jpg',
      head_office: "Alexandria Office",
      volunteer_type: "Super Volunteer",
      about_me: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.",
      volts_score: "260"
    };

    this.user.contact_details = {
        address_line1: "795 Folsom Ave, Suite 600",
        address_line2: "as",
        city: "San Francisco",
        state: "CA",
        zip: 94107,
        email: "nicki@mail.com",
        mobile: "(+121) 678 3462",
        landline: "(+121) 678 3462"
    };

    this.user.voter_information = {
        us_senate: "VA",
        us_house: "US-4",
        state_senate: 12,
        state_house: 14,
        precinct: "Alexandria 001"
    };

    this.user.availability = [{
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

    this.user.social_media = [{
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
    }]

}

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl);