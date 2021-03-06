<div ng-controller="MyCtrl as vm" >
	<div class="map-page">
	    <div style="position: fixed; right: 0;width:100%; height: 50px; z-index: 100; background-color: #f6f8f8;">
			<div class="pull-left">
				<form>
								<ul class="nav navbar-nav more-options">
							          <li class="dropdown pos-stc">
							            <a href class="dropdown-toggle btn-primary" ng-click="dropdown=!dropdown">
							              <span translate="listpage.filter.title"></span>
							              <span class="caret"></span>
							            </a>
							            <div class=" wrapper w-full bg-white cust-m-t" style="position: fixed; top: 100px; left: 0;z-index: 100;" ng-show="dropdown">
							              <div class="row">
							                <div class="col-sm-4">
							                  <div class="row">
							                    <div class="col-xs-6 left-li">
							                      <ul class="list-unstyled l-h-2x">
							                        <li>
							                         <label translate="listpage.filter.price">Price</label>
    												<input type="text" ng-model="myMinPrice" class="form-control input-sm" placeholder="minPrice" aria-describedby="basic-addon1">
							                        </li>
							                        <li>
							                          <label translate="listpage.filter.beds">Beds</label>
        											  <select class="input-sm form-control w-sm inline v-middle" ng-model="minBedNum" ng-options="minBed.num as minBed.num for minBed in bedsNum">
							                          </select>
							                        </li>
							                        <li>
							                          <label translate="listpage.filter.baths">Baths</label>
												        <select class="input-lg form-control w-sm inline v-middle" ng-model="minBathNum" ng-options="minBath.num as minBath.num for minBath in bathsNum"  >
												        </select>
							                        </li>
							                        <li>
							                         <label translate="listpage.filter.area">Area</label>
    												<input type="text" ng-model="minArea" class="form-control input-sm" placeholder="minArea" aria-describedby="basic-addon1">
							                        </li>
							                        <li>
							                          <label translate="listpage.filter.type">Type</label>
												        <select class="input-lg form-control w-sm inline v-middle" ng-model="myPropertyType"  ng-options="property.propertyType as property.propertyType for property in propertyTypes">
												        </select>
							                        </li>
							                      </ul>
							                    </div>
							                    <div class="col-xs-6 right-li">
							                      <ul class="list-unstyled l-h-2x">
							                        <li>
    												<input type="text" class="form-control input-sm" ng-model="myMaxPrice" placeholder="maxPrice" aria-describedby="basic-addon1">
							                        </li>
							                        <li>
        											  <select class="input-lg form-control w-sm inline v-middle" ng-model="maxBedNum" ng-options="maxBed.num as maxBed.num for maxBed in bedsNum">
							                          </select>
							                        </li>
							                        <li>
												        <select class="input-lg form-control w-sm inline v-middle" ng-model="maxBathNum" ng-options="maxBath.num as maxBath.num for maxBath in bathsNum" >
												        </select>
							                        </li>
							                        <li>
							                          <input type="text" class="form-control input-sm" ng-model="maxArea" placeholder="maxArea" aria-describedby="basic-addon1">
							                        </li>
							                        <li></li>
							                      </ul>
							                    </div>
							                  </div>
							                </div>
							                <div class="col-sm-4 b-l b-light">
							                  <div class="row">
							                    <div class="col-xs-6 left-li">
							                      <ul class="list-unstyled l-h-2x">
							                        <li>
							                          <label translate="listpage.filter.parking">Parking</label>
												        <select class="input-sm form-control w-sm inline v-middle" ng-model="minParkingNum" ng-options="parking.num as parking.num for parking in parkingsNum" >
												        </select>
							                        </li>
							                       <!-- <li>
							                          <label>minArea</label>
												        <select class="input-lg form-control w-sm inline v-middle" ng-model="myArea" ng-options="parking.num as parking.num for parking in parkingsNum" >
												        </select>
							                        </li>-->
							                       <!-- <li>
							                          	<label>features</label>
    													<input type="text" class="form-control input-lg" ng-model="features" placeholder="freatures,e.g. pets allowed.." aria-describedby="basic-addon1">
							                        </li>-->
							                        <li>
							                         <label class="m-t-xxs" translate="listpage.filter.available">Available:</label>
											            <p class="input-group">
											              <input type="text" class="form-control input-sm" datepicker-popup="[:format:]" ng-model="dt" is-open="opened" min-date="minDate" max-date="'2018-06-22'" datepicker-options="dateOptions"  ng-required="true" close-text="Close" />
											              <span class="input-group-btn">
											                <button type="button" class="btn btn-default btn-md" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>
											              </span>
											            </p>
							                        </li>
							                          <li>
							                          	<label class="m-t-xxs" translate="listpage.filter.description.title">Descriptions:</label>
							                          	<ul style="list-style: none; padding-left: 28px;">
							                          		<li>
							                          			<a class="" title="near train station" ng-click="train=!train">
							                          				<i ng-show="train" class="flaticon-train-on-railroad30" style="color: orange;" aria-hidden="true"></i>
							                          				<i ng-show="!train" class="flaticon-train-on-railroad30" aria-hidden="true"></i>
							                          			</a>
									                          	<a class="" title="near university" ng-click="university=!university">
									                          		<i ng-show="university" class="flaticon-college-graduation30" style="color: chocolate;" aria-hidden="true"></i>
									                          		<i ng-show="!university" class="flaticon-college-graduation30" aria-hidden="true"></i>
									                          	</a>
									                          	<a class="" title="near hotel YHA" ng-click="backpack=!backpack">
									                          		<i ng-show="backpack" class="flaticon-backpack30" style="color: greenyellow;" aria-hidden="true"></i>
									                          		<i ng-show="!backpack" class="flaticon-backpack30" aria-hidden="true"></i>
									                          	</a>
									                          	<a class="" title="near park" ng-click="park=!park">
									                          		<i ng-show="park" class="flaticon-green-park-city-space30" style="color: green;" aria-hidden="true"></i>
									                          		<i ng-show="!park" class="flaticon-green-park-city-space30" aria-hidden="true"></i>
									                          	</a>
							                          		</li>
							                          	</ul>
							                        </li>
							                      </ul>
							                    </div>
							                    <div class="col-xs-6 right-li">
							                      <ul class="list-unstyled l-h-2x">
							                        <li>
							                         <select class="input-sm form-control w-sm inline v-middle" ng-model="maxParkingNum" ng-options="parking.num as parking.num for parking in parkingsNum" >
        											 </select>
							                        </li>
							                        <li>
							                          	<a style="display: block;"></a>
							                        </li>
							                        <li style="visibility: hidden;">
							                           <label translate="listpage.filter.description.title">descriptions:</label>
    												   <input type="text" class="form-control input-lg"  style="background: white; border: none;" aria-describedby="basic-addon1">
							                        </li>
							                          	<ul style="list-style: none; margin-top: 46px; padding-left: 0;">
							                          		<li>
							                          			<a class="" title="near school" ng-click="school=!school">
							                          				<i ng-show="school" class="flaticon-open-book30" style="color: yellow;" aria-hidden="true"></i>
							                          				<i ng-show="!school" class="flaticon-open-book30" aria-hidden="true"></i>
							                          			</a>
							                          			<a class="" title="big family" ng-click="family=!family">
							                          				<i ng-show="family" class="flaticon-people30" style="color: pink;" aria-hidden="true"></i>
							                          				<i ng-show="!family" class="flaticon-people30" aria-hidden="true"></i>
							                          			</a>
									                          	<a class="" title="near shoppingcenter" ng-click="shoppingcenter=!shoppingcenter">
									                          		<i ng-show="shoppingcenter" class="flaticon-shopping-cart30" style="color: darkred;" aria-hidden="true"></i>
									                          		<i ng-show="!shoppingcenter" class="flaticon-shopping-cart30" aria-hidden="true"></i>
									                          	</a>
									                          	<a class="" title="officerental" ng-click="officerental=!officerental">
									                          		<i ng-show="officerental" class="flaticon-business30" style="color: blue;" aria-hidden="true"></i>
									                          		<i ng-show="!officerental" class="flaticon-business30" aria-hidden="true"></i>
									                          	</a>
							                          		</li>
							                          	</ul>
							                      </ul>
							                    </div>
							                  </div>
							                </div>
							                <div class="col-sm-4 b-l m-l-n-xxs">
							                  <div class="row">
							                    <div class="col-xs-6">
							                    	  <div class="row">
										                    <ul class="list-unstyled">
										                    	<li>
										                    		<span title="girl_only" ng-click="girlonly()">
										                      			<i ng-show="girl_only" style="color: purple;" class="flaticon-female-silhouette30"></i>
										                      			<i ng-show="!girl_only" class="flaticon-female-silhouette30"></i>&nbsp;&nbsp;&nbsp;
										                      			<a translate="listpage.filter.feature.girl"></a>
									                      			</span>
										                    	</li>
										                    	<li>
										                    		<span title="boy_only" ng-click="boyonly()">
										                      			<i ng-show="boy_only" style="color: purple;" class="flaticon-man-standing-up30"></i>
										                      			<i ng-show="!boy_only" class="flaticon-man-standing-up30"></i>&nbsp;&nbsp;&nbsp;
										                      			<a translate="listpage.filter.feature.boy"></a>
									                      			</span>
										                    	</li>
										                    	<li>
										                    		<span title="aircondition" ng-click="aircondition_click()">
										                      			<i ng-show="aircondition" style="color: purple;" class="flaticon-minisplit30"></i>
										                      			<i ng-show="!aircondition" class="flaticon-minisplit30"></i>&nbsp;&nbsp;&nbsp;
										                      			<a translate="listpage.filter.feature.aircondition"></a>
									                      			</span>
										                    	</li>
										                    	<li>
										                    		<span title="stove" ng-click="stove_click()">
										                      			<i ng-show="stove" style="color: purple;" class="flaticon-stove30"></i>
										                      			<i ng-show="!stove" class="flaticon-stove30"></i>&nbsp;&nbsp;&nbsp;
										                      			<a translate="listpage.filter.feature.kitchen"></a>
									                      			</span>
										                    	</li>
										                    	<li>
										                    		<span title="laundry" ng-click="laundry_click()">
										                      			<i ng-show="laundry" style="color: purple;" class="flaticon-washing-machine30"></i>
										                      			<i ng-show="!laundry" class="flaticon-washing-machine30"></i>&nbsp;&nbsp;&nbsp;
										                      			<a translate="listpage.filter.feature.laundry"></a>
									                      			</span>
										                    	</li>
										                    	<li></li>
										                    </ul>
									                   </div>
							                    </div>
							                     <div class="col-xs-6">
							                     	<div class="row">
							                   			<div>
							                    			<button type="submit" class="button btn-success plusplus" style="margin-top: 170px;margin-left: 30px;" ng-click="update();dropdown=false" tabindex="23"><span translate="listpage.filter.search">Update search</span></button>
							                    		</div>
							                    	</div>
							                     </div>
							                  </div>
							                </div>
							              </div>
							            </div>
							          </li>
								</ul>
							</form>
							</div>
							<div class="m-t-xxs pull-left">
								<form class="navbar-form navbar-form-sm navbar-left shift" ui-shift="prependTo" target=".navbar-collapse" role="search" >
					          <div class="form-group">
					            <div class="input-group">
					              <input type="text" ng-model="selected"  class="form-control input-sm bg-light no-border rounded padder" placeholder="address...">
					              <span class="input-group-btn">
					                <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>
					              </span>
					            </div>
					          </div>
					        </form>
							</div>
							<div class="pull-right " style="margin: 10px; text-align: center;">
								<div class="m-t-xs pull-left ">
									<p class="inline m-l-sm m-r-sm" style="margin-bottom: 10px;" translate="listpage.entrance"></p>
								</div>
								<div class="m-t-xs pull-left list-map" style="margin-right: 140px; margin-left: 190px;">
					          		<a ui-sref="app.listpage">
					          			<i  class="fa fa-lg fa-list"></i>&nbsp;<i translate="listpage.list.switch.list"></i>
					          		</a>
					          		<a  style="color: purple; border-bottom: 3px solid rgb(150, 65, 137); margin-right: 10px;">
					          			<i class="fa fa-lg fa-map-marker" ></i>&nbsp;<i translate="listpage.list.switch.map"></i>
					          		</a>
					          	</div>

								 <ul class="pagination pagination-sm m-t-none m-b-none m-l-lg m-r-lg">
												<li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
												<li><a href>1</a></li>
												<li><a href>2</a></li>
												<li><a href>3</a></li>
												<li><a href>4</a></li>
												<li><a href>5</a></li>
												<li><a href><i class="fa fa-chevron-right"></i></a></li>
								</ul>
							</div>
					</div>
					<div class="" style="height: 100%; width:100%;  padding-right: 530px; position: fixed; left: 0;top: 100px;">
							<ng-map  center="[:vm.shop.ER_No+' '+vm.shop.ER_St+' '+vm.shop.ER_Suburb:]" zoom="12" style="height: 538px;">
									<marker id="[:shop.ER_ID:]" position="[:shop.ER_No+' '+shop.ER_St+' '+shop.ER_Suburb+' '+shop.ER_Region:]" ng-repeat="shop in vm.shops" on-click="vm.showDetail(shop)">
									</marker>
									<info-window id="foo-iw">
											<div ng-non-bindable="">
														<div class="infowindow-container clear">
																	<div class="info-left">
																		<img src="[:vm.shop.picset[0].PicFile:]" alt="Avatar" style="width:100px; align-content: center;">
																	</div>
																	<div class="info-right">
																		  <p class="price">$[:vm.shop.ER_Price:]<i translate="listpage.list.row.price_unit"></i></p>
																		  <p class="address">
																		  		<a ui-sref="app.details({id:vm.shop.ER_ID,name:vm.shop.ER_No+' '+vm.shop.ER_St+' '+vm.shop.ER_Suburb+' '+vm.shop.ER_Region})">
																		  			[:vm.shop.ER_No+' '+vm.shop.ER_St+' '+vm.shop.ER_Suburb+' '+vm.shop.ER_Region:]
																		  		</a>
																		  </p>
																		  <div class="listing-features">
																				<span class="f-icon with-text">
										                            				<span class="copy">
										                            					<em class="ng-binding">[:vm.shop.ER_BedRoom:]</em>
										                            				</span>
																					<span class="icon fa fa-bed"></span>
																				</span>
																				<span class="f-icon with-text">
										                            				<span class="copy">
										                            					<em class="ng-binding">[:vm.shop.ER_BathRoom:]</em>
										                            				</span>
																					<span class="icon fa fa-bath"></span>
																				</span>
																				<span class="f-icon with-text">
										                            				<span class="copy">
										                            					<em class="ng-binding">[:vm.shop.ER_Parking:]</em>
										                            				</span>
																					<span class="icon fa fa-car"></span>
																				</span>
																				<span class="details" ui-sref="app.details({id:vm.shop.ER_ID,name:vm.shop.ER_No+' '+vm.shop.ER_St+' '+vm.shop.ER_Suburb+' '+vm.shop.ER_Region})" style="margin-left: 20px;">
																					<i translate="listpage.list.row.details"></i> <i class="fa fa-angle-right"></i>
																				</span>
																			</div>

																	</div>
														</div>
											</div>
									</info-window>
							</ng-map>
					</div>
				<div class="map_feature_filter">
								 <li class="dropdown" dropdown>
						            <a class="dropdown-toggle" dropdown-toggle>
						              <i class="fa fa-fw fa-plus visible-xs-inline-block"></i>
						              <span translate="listpage.list.orderBy.title">Features</span> <span class="caret"></span>
						            </a>
						            <ul class="dropdown-menu" role="menu">
						              <li>
						              	<a ng-click="sortBy('ER_Price')">
						              	  	<i translate="listpage.list.orderBy.price"></i>
						              		&nbsp;
					              		    <span ng-if="orderleft">
					                     		<i ng-show="sortPrice" class="fa fa-caret-down"></i>
					                     		<i ng-show="!sortPrice" class="fa fa-caret-up"></i>
						          		    </span>
						              	</a>
						              </li>
						              <li class="divider"></li>
						              <li>
						                <a ng-click="sortBy('ER_AvailableDate')">
						                  	<i translate="listpage.list.orderBy.time"></i>
						                  	&nbsp;
						                    <span ng-if="orderright">
								          		<i ng-show="sortDate" class="fa fa-caret-down"></i>
						                     	<i ng-show="!sortDate" class="fa fa-caret-up"></i>
							          		</span>
						                </a>
						              </li>
						            </ul>
						          </li>
							</div>
			<div class="adv clear">
		<div class="relative-position">
	<ul class="clear">
		<li ng-repeat="shop in vm.shops | orderBy: orderName:reverse" ng-mouseover="vm.showDetail(e,shop)">
			<div id="box" class="all clear panel b-a" set-ng-animate="false">
				<!--<div class="ad">

					<ul id="imgs">
						<li ng-repeat="picture in shop.picset">
							<img src="[:picture.PicFile:]" />
						</li>
					</ul>

				<div id="arr"><span id="left"><</span><span id="right">></span></div>-->
				<div class="ad">
					<div class="shortlist-star" >
							<a  ng-show="!star" ng-click="star=!star;vm.addShortlist()"><i class="fa fa-3x fa-heart-o" aria-hidden="true"></i></a>
							<a style="color: pink;" ng-show="star" ng-click="star=!star;vm.deleteShortlist()"><i class="fa fa-3x fa-heart" aria-hidden="true"></i></a>
					</div>
					 <carousel interval="myInterval" >
				          <slide ng-repeat="slide in shop.picset" active="slide.active">
				            <img ng-src="[:slide.PicFile:]" class="img-full" style="height: 490px; height: 305px;">
				            <!--<div class="carousel-caption">
				              <h4>Slide [:$index:]</h4>
				              <p>[:slide.text:]</p>
				            </div>-->
				          </slide>
			         </carousel>
			         <!--<div maplunbo imgdata="shop" style="width: 490px;height: 305px;"></div>-->
		         </div>
			</div>
			<div class="description">
				<div class="info-panel">
					<div class="listing-features rooms">
						<span class="f-icon with-text" style="color: purple;">
                        	<span class="copy"><em class="ng-binding">[:shop.ER_BedRoom:]</em></span>
							<span class="icon fa fa-bed" ></span>
						</span>
						<span class="f-icon with-text" style="color: purple;">
                        	<span class="copy"><em class="ng-binding">[:shop.ER_BathRoom:]</em></span>
							<span class="icon fa fa-bath" ></span>
						</span>
						<span class="f-icon with-text" style="color: purple;">
                    		<span class="copy"><em class="ng-binding">[:shop.ER_Parking:]</em></span>
							<span class="icon fa fa-car" ></span>
						</span>
					</div>
					<div class="address">
						<a ui-sref="app.details({id:shop.ER_ID,name:shop.ER_No+' '+shop.ER_St+' '+shop.ER_Suburb+' '+shop.ER_Region})">
							[:shop.ER_No+' '+shop.ER_St:],[:shop.ER_Suburb+' '+shop.ER_Region:]
						</a>
					</div>
					<div class="benefits">
						<a href class="f-icon with-text " title="near train station">
                            <span class="icon " ng-show="shop.train_station" style="color: orange;"><i class="flaticon-train-on-railroad1" aria-hidden="true"></i></span>
                             <!--<span class="icon " ng-show="!shop.train_station"><i class="flaticon-train-on-railroad1" aria-hidden="true"></i></span>-->
                        </a>
                        <a href class="f-icon with-text " title="near university">
                        	<span class="icon " ng-show="shop.university" style="color: chocolate;"><i class="flaticon-college-graduation1" aria-hidden="true"></i></span>
                            <!--<span class="icon " ng-show="!shop.university"><i class="flaticon-college-graduation1" aria-hidden="true"></i></span>-->
                        </a>
                        <a href class="f-icon with-text " title="backpack">
                        	<span class="icon " ng-show="shop.backpack" style="color: greenyellow;"><i class="flaticon-backpack1" aria-hidden="true"  ></i></span>
                            <!--<span class="icon " ng-show="!shop.backpack"><i class="flaticon-backpack1" aria-hidden="true"  ></i></span>-->
                        </a>
                        <a href class="f-icon with-text " title="near park">
                        	 <span class="icon " ng-show="shop.park" style="color: green;"><i class="flaticon-green-park-city-space1" aria-hidden="true"></i></span>
                            <!--<span class="icon " ng-show="!shop.park"><i class="flaticon-green-park-city-space1" aria-hidden="true"></i></span>-->
                        </a>
						<a href class="f-icon with-text " title="near school">
							<span class="icon " ng-show="shop.school" style="color: yellow;"><i class="flaticon-open-book1" aria-hidden="true"></i></span>
                            <!--<span class="icon " ng-show="!shop.school"><i class="flaticon-open-book1" aria-hidden="true"></i></span>-->
                        </a>
                        <a href class="f-icon with-text " title="big family">
                        	 <span class="icon " ng-show="shop.big_family" style="color: pink;"><i class="flaticon-people1"  aria-hidden="true"></i></span>
                            <!--<span class="icon " ng-show="!shop.big_family"><i class="flaticon-people1"  aria-hidden="true"></i></span>-->
                        </a>
                        <a href class="f-icon with-text " title="near shopping center">
                        	<span class="icon " ng-show="shop.shopping_mall" style="color: darkred;"><i class="flaticon-shopping-cart1" aria-hidden="true"></i></span>
                            <!--<span class="icon " ng-show="!shop.shopping_mall"><i class="flaticon-shopping-cart1" aria-hidden="true"></i></span>-->
                        </a>
                        <a href class="f-icon with-text " title="office rental">
                        	<span class="icon " ng-show="shop.offical_rental" style="color: blue;"><i class="flaticon-business1" aria-hidden="true"></i></span>
                            <!--<span class="icon " ng-show="!shop.offical_rental"><i class="flaticon-business1" aria-hidden="true"></i></span>-->
                        </a>

					</div>
					<div class="price">
						<span class="num">$[:shop.ER_Price:]</span>
						<span class="period" translate="listpage.list.row.price_unit">per week</span>
						<span class="available"><i translate="listpage.list.row.time"></i>:&nbsp;&nbsp;<i style="color: darkred;font-size: 16px;">[:shop.ER_AvailableDate:]</i></span>
					</div>
					<div class="view" ui-sref="app.details({id:shop.ER_ID,name:shop.ER_No+' '+shop.ER_St+' '+shop.ER_Suburb+' '+shop.ER_Region})">
						<span class="view-num"><i translate="listpage.list.row.details"></i> <i class="fa fa-angle-right"></i></span>
					</div>
				</div>
			</div>
		</li>
	</ul>
</div>
</div>
</div>

</div>
