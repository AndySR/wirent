<div class="navbar" ng-controller="WinCtrl">
     <!-- navbar header -->
      <div class="navbar-header" ng-class="{true:'app-header-fixed',false:''}[headerfix]">
        <button class="pull-right visible-xs dk" ui-toggle-class="show" data-target=".navbar-collapse">
          <i class="glyphicon glyphicon-align-justify"></i>
        </button>
      <!--
		<button class="pull-right visible-xs" ui-toggle-class="off-screen" data-target=".app-aside" >
          <i class="glyphicon glyphicon-align-justify"></i>
        </button>
	  -->
        <!-- brand -->
        <a href="#/" class="navbar-brand text-lt">
          <!--<i class="fa fa-wikipedia-w"></i>-->
          <img src="../img/rsz_wi_origin.png" style="width: 50px;max-height: 48px;position: relative; top: 5px;left: 0;"/>

          <!--<span class="hidden-folded m-l-xs">[:name:]</span>-->
        </a>
        <!-- / brand -->
      </div>
      <!-- / navbar header -->

      <!-- navbar collapse -->
      <div class="collapse pos-rlt navbar-collapse box-shadow">
        <!-- link and dropdown -->
		<ul class="nav navbar-nav hidden-sm">
			<li><a ui-sref="app.search" translate="header.HOME"></a></li>
			<li><a href="#about" translate="header.RENT"></a></li>
			<li><a href="http://www.winninginvestment.com.au/project-en" translate="header.BUY"></a></li>
			<li><a ui-sref="app.tips" translate="header.ONESETP.OneStep"></a></li>
			<li><a ui-sref="app.new" translate="header.NEWS"></a></li>
			<li><a ui-sref="#" translate="header.BUSINESS"></a></li>
			<li><a ui-sref="app.contact" translate="header.CONTACT.Contact"></a></li>
			<li><a href="http://www.winninginvestment.com.au/aboutus" translate="header.ABOUT"></a></li>
			<li><a href="http://www.winninginvestment.com.au/recruitment-1" translate="header.RECRUIMENT"></a></li>
			<!--<li><a ui-sref="app.trainmap">trainmap</a></li>-->
		</ul>
        <!-- / link and dropdown -->

        <!-- search form -->

        <!-- / search form -->

        <!-- nabar right -->
        <ul class="nav navbar-nav navbar-right">
      <!--
		-->
		  <li class="dropdown" ng-click="go2Shortlist()">
            <a href class="dropdown-toggle"  style="color: deeppink;">
              <i class="fa fa-x fa-heart fa-fw"></i>
              <span class="visible-xs-inline">Shortlist</span>
              <span class="badge badge-sm up bg-danger pull-right-xs"></span>
            </a>
            <!-- dropdown -->
          <!--  <div class="dropdown-menu w-xl animated fadeInUp">
              <div class="panel bg-white">
                <div class="panel-heading b-light bg-light">
                  <strong>You have <span>2</span> hostories</strong>
                </div>
                <div class="list-group">
                  <a href class="media list-group-item">
                    <span class="pull-left thumb-sm">
                      <img src="/img/andy.jpg" alt="..." class="img-rounded">
                    </span>
                    <span class="media-body block m-b-none">
                      Olympic park<br>
                      <small class="text-muted">two days ago</small>
                    </span>
                  </a>
                  <a href class="media list-group-item">
                    <span class="pull-left thumb-sm">
                      <img src="/img/andy.jpg" alt="..." class="img-rounded">
                    </span>
                    <span class="media-body block m-b-none">
                      Olympic park<br>
                      <small class="text-muted">two days ago</small>
                    </span>
                  </a>
                </div>
                <div class="panel-footer text-sm">
                  <a href class="pull-right"><i class="fa fa-cog"></i></a>
                  <a ui-sref="app.shortlist">See all the shortlists</a>
                </div>
              </div>
            </div>
-->            <!-- / dropdown -->
          </li>
		  <li>
			<a ng-click="read_Letters()">
				<i class="fa fa-envelope fa-fw"></i>
				<span class="visible-xs-inline">Shortlist</span>
              	<span class="badge badge-sm up bg-danger pull-right-xs">[:letternums:]</span>
			</a>
		  </li>
		  <!--translate-->
		  <li class="dropdown hidden-sm" is-open="lang.isopen" dropdown>
            <a href class="dropdown-toggle" dropdown-toggle>
              [:selectLang:] <b class="caret"></b>
            </a>
            <!-- dropdown -->
            <ul class="dropdown-menu animated fadeInRight w">
              <li ng-repeat="(langKey, label) in langs">
                <a ng-click="setLang(langKey, $event)" href>[:label:]</a>
              </li>
            </ul>
            <!-- / dropdown -->
          </li>
		  <!--translate-->
      <li ng-if="!profile">
			<a ui-sref="app.login"><span class="badge badge-lg bg-success" translate="header.LOGIN.Login"></span></a>
		  </li>
		  <li ng-if="!profile">
			<a ui-sref="app.signup"><span class="badge badge-lg bg-success" translate="header.REGIST.Regist"></span></a>
		  </li>

		 <li ng-if="profile" class="dropdown" dropdown>
            <a href class="dropdown-toggle clear" dropdown-toggle>
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="img/andy.jpg" alt="...">
                <i class="on md b-white bottom"></i>
              </span>
              <span class="hidden-sm hidden-md">[:User.user_data.CEmail:]</span> <b class="caret"></b>
            </a>
            <!-- dropdown -->
            <ul class="dropdown-menu animated fadeInRight w">
              <li>
                <a ui-sref="app.profile" translate="header.LOGIN.Profile"></a>
              </li>
              <li>
                <a ng-click="logout()" translate="header.LOGIN.Logout"></a>
              </li>
            </ul>
            <!-- / dropdown -->
          </li>

		 </ul>
        <!-- / navbar right -->

      </div>
      <!-- / navbar collapse -->
</div>
