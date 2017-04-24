<div class="container w-xxl w-auto-xs" ng-controller="SigninFormController" >
  <a href class="navbar-brand block m-t">[:name:]</a>
  <div class="m-b-lg">
    <div class="wrapper text-center">
      <strong>Sign in to get in touch</strong>
    </div>
    <form name="form" class="form-validation">
      <div class="text-danger wrapper text-center" ng-show="authError">
          
      </div>
      <div class="list-group list-group-sm">
        <div class="list-group-item">
          <input type="email" placeholder="Email" class="form-control no-border" ng-model="User.login_data.CEmail" required>
        </div>
        <div class="list-group-item">
           <input type="password" placeholder="Password" class="form-control no-border" ng-model="User.login_data.CPassword" required>
        </div>
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block" style=" width:50%; margin:0 80px;" ng-click="User.login()" ng-disabled='form.$invalid'>Log in</button>
   
      <div class="line line-dashed"></div>
      <p class="text-center"><small>Do not have an account?</small></p>
      <a ui-sref="signup" style=" width:50%; margin:0 80px;" class="btn btn-lg btn-default btn-block">Create an account</a>
    </form>
  </div>
</div>