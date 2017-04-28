<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/*
 * index page
 */
$app->get('/',function () {
	return view('index');	
});

/*
 *  view group:customer|landlord|thirdparty|staff
 */
$app->group(['prefix' => '/tpl/page'], function () use ($app){	
	$app->get('/home',function () {
		return view('page.home');	
	});
	$app->get('/signup',function () {
		return view('page.signup');	
	});
	$app->get('/login',function () {
		return view('page.login');	
	});
	$app->get('/result',function () {
		return view('page.result');	
	});
	$app->get('/aboutus',function () {
		return view('page.aboutus');	
	});
	$app->get('/contact',function () {
		return view('page.contact');	
	});
	$app->get('/news',function () {
		return view('page.news');	
	});
	$app->get('/profile',function () {
		return view('page.profile');	
	});
	$app->get('/googlemap',function () {
		return view('page.googlemap');	
	});
	$app->get('/details',function () {
		return view('page.details');	
	});
	$app->get('/shortlist',function () {
		return view('page.shortlist');	
	});
	$app->get('/upload',function () {
		return view('page.upload');	
	});
});

/*
 *  route controller 
 */
//customer entrance
$app->group(['prefix' => 'customer'], function () use ($app){
	 
	$app->post('/login',			'CustomerController@login');
	$app->post('/register',			'CustomerController@register');
	$app->post('/logout',			'CustomerController@logout'); 
	$app->post('/filt/entire', 		'CustomerController@filt_entire');
	$app->get('/filt/share', 		'CustomerController@filt_share');	
	$app->post('/filt_address', 		'CustomerController@filt_address');	
	$app->get('/profile', 			['middleware' => 'cus','uses'=>'CustomerController@profile_check']);
	$app->get('/profile/update',	['middleware' => 'cus','uses'=>'CustomerController@profile_update']);
	$app->get('/bill',				['middleware' => 'cus','uses'=>'CustomerController@bill_check']);
	$app->get('/maintenance',		['middleware' => 'cus','uses'=>'CustomerController@maintenance_check']);		
	$app->get('/maintenance/apply',	['middleware' => 'cus','uses'=>'CustomerController@maintenance_apply']);
	$app->get('/rent',				['middleware' => 'cus','uses'=>'CustomerController@rent_check']);
	$app->get('/service',			['middleware' => 'cus','uses'=>'CustomerController@service_check']);
	$app->get('/shortlist',			['middleware' => 'cus','uses'=>'CustomerController@shortlist_check']);	
	$app->get('/shortlist/delete',	['middleware' => 'cus','uses'=>'CustomerController@shortlist_delete']);	
	$app->get('/shortlist/insert',	['middleware' => 'cus','uses'=>'CustomerController@shortlist_insert']);	
	
	$app->group(['prefix' => 'msg'], function () use ($app){
		$app->get('/notice',		['middleware' => 'cus','uses'=>'CustomerController@msg_notice']);	
		$app->get('/confirm',		['middleware' => 'cus','uses'=>'CustomerController@msg_confirm']);	
		$app->get('/received',		['middleware' => 'cus','uses'=>'CustomerController@msg_received']);	//msg_receive is php function
		$app->get('/write',			['middleware' => 'cus','uses'=>'CustomerController@msg_write']);
	});			
});
//landlord entrance 
$app->group(['prefix' => 'landlord'], function () use ($app){
	 
	$app->post('/login',			'LandlordController@login');
	$app->post('/register',			'LandlordController@register');
	$app->get('/logout',			'LandlordController@logout'); 

	$app->get('/profile', 			['middleware' => 'lord','uses'=>'LandlordController@profile_check']);
	$app->get('/profile/update',	['middleware' => 'lord','uses'=>'LandlordController@profile_update']);
	
	$app->group(['prefix'=>'pm'], function () use ($app){
		$app->get('/balance',		['middleware' => 'lord','uses'=>'LandlordController@balance']);
		$app->get('/check',			['middleware' => 'lord','uses'=>'LandlordController@check']);		
		$app->get('/stat_on',		['middleware' => 'lord','uses'=>'LandlordController@stat_on']);
		$app->get('/stat_pre',		['middleware' => 'lord','uses'=>'LandlordController@stat_pre']);
		$app->get('/insert',		['middleware' => 'lord','uses'=>'LandlordController@insert']);
		$app->get('/update',		['middleware' => 'lord','uses'=>'LandlordController@update']);	
	});	
	
	$app->group(['prefix' => 'msg'], function () use ($app){
		$app->get('/notice',		['middleware' => 'lord','uses'=>'LandlordController@msg_notice']);	
		$app->get('/confirm',		['middleware' => 'lord','uses'=>'LandlordController@msg_confirm']);	
		$app->get('/received',		['middleware' => 'lord','uses'=>'LandlordController@msg_received']);	//msg_receive is php function 
		$app->get('/write',			['middleware' => 'lord','uses'=>'LandlordController@msg_write']);
	});
});
//thirdparty entrance

//staff entrance: cms, move to another framework future with different .env config to db
$app->group(['prefix' => 'staff'], function () use ($app){
	$app->post('/login',			'StaffController@login');
});


