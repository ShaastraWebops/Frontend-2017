'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('ContactCtrl', function () {
    skrollr.init().destroy();
    this.contents=list;

  });
  var list=[
	{
	Person_Name:"Animesh Bagora",
	Team_Name:"Co-Curricular Affairs Secretary",
	Email:"animesh.bagora@shaastra.org",
	Phone:"+91 9884299639",
	},
	{
	Person_Name:"Pendse Neil Sanjay",
	Team_Name:"Concept & Design",
	Email:" neil@shaastra.org",
	Phone:"+91 9176283794",
	},
	{
	Person_Name:"Abhijit S Gupta",
	Team_Name:"Concept & Design",
	Email:" abhijit@shaastra.org",
	Phone:"+91 9940439339",
	},
	{
	Person_Name:"Bharath",
	Team_Name:"Concept & Design",
	Email:"ae15d019@smail.iitm.ac.in",
	Phone:"+91 9940579724",
	},
	{
	Person_Name:"Harshit Dohare",
	Team_Name:"Envisage",
	Email:" harshit.dohare@shaastra.org",
	Phone:"+91 9962879064",
	},
	{
	Person_Name:"Omkar Vanjpe",
	Team_Name:"Envisage",
	Email:" omkarkvanjpe@gmail.com",
	Phone:"+91 7708173059",
	},{
	Person_Name:"Adarsh",
	Team_Name:"Events",
	Email:"adarshg@shaastra.org",
	Phone:"+91 9600193202",
	},{
	Person_Name:"Suvindu Ch",
	Team_Name:"Events",
	Email:"suvindu@shaastra.org",
	Phone:"+91 9940248645",
	},{
	Person_Name:"Rohit Thakran",
	Team_Name:"Events",
	Email:"7rohitthakran@gmail.com",
	Phone:"+91 9958515422",
	},{
	Person_Name:"Ramprashanth",
	Team_Name:"Evolve",
	Email:"ramprashanth@shaastra.org",
	Phone:"+91 8754443260",
	},{
	Person_Name:"Udith Krishna",
	Team_Name:"Evolve",
	Email:"udithkrishna@shaastra.org",
	Phone:"+91 9551113873",
	},{
	Person_Name:"Harshit Saxena",
	Team_Name:"Facilities",
	Email:"harshit@shaastra.org",
	Phone:"+91 9789016167",
	},{
	Person_Name:"Krishi Tata",
	Team_Name:"Finance",
	Email:"krishi@shaastra.org",
	Phone:"+91 9003113121",
	},{
	Person_Name:"L Sai Manish",
	Team_Name:"Finance",
	Email:"saimanish@shaastra.org",
	Phone:"+91 7708481881",
	},{
	Person_Name:"Nivedita Manepalli",
	Team_Name:"Shows and Exhibitions",
	Email:"nivedita.manepalli@shaastra.org",
	Phone:"+91 9940557095",
	},
	{
	Person_Name:"Raghul Manosh",
	Team_Name:"Sponsorship & PR",
	Email:"raghul@shaastra.org",
	Phone:"+91 9940246479",
	},{
	Person_Name:"Varun Srinivas Sridharan",
	Team_Name:"Sponsorship & PR",
	Email:"varun@shaastra.org",
	Phone:"+91 7358540260",
	},{
	Person_Name:"M Aghamarshana",
	Team_Name:"Media & Student Relations",
	Email:"aghamarshana@shaastra.org",
	Phone:"+91 8122495355",
	},{
	Person_Name:" R Rathna Kumar",
	Team_Name:"Media & Student Relations",
	Email:"rathnakumar@shaastra.org",
	Phone:"+91 9677081113",
	},{
	Person_Name:"Hitesh Singla",
	Team_Name:"Media & Student Relations",
	Email:"hitesh@shaastra.org",
	Phone:"+91 9677043890",
	},{
	Person_Name:"Mohit Kumar",
	Team_Name:"Technical Operations",
	Email:"mhtkmr54@gmail.com",
	Phone:"+91 9003120598",
	},{
	Person_Name:"S.V.Minu Aswanth",
	Team_Name:"Technical Operations",
	Email:"minu@shaastra.org",
	Phone:"+91 9976448668",
	},{
	Person_Name:"Manish Dhariwal",
	Team_Name:"QMS",
	Email:"manish.dhariwal@shaastra.org",
	Phone:"+91 9884184032",
	},{
	Person_Name:"Gunjan",
	Team_Name:"QMS",
	Email:"bmsw.gnp@gmail.com",
	Phone:"+91 7299559744",
	}
	];