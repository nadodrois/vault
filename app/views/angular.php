<!doctype html>
<html ng-app="xApp">
<head>
    <meta charset="utf-8" />
    <title>Password Vault</title>
    <link rel="stylesheet" href="/css/vendor_styles.css">
    <link rel="stylesheet" href="/css/app.css">
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
</head>
<body>

<div ui-view></div>

<flash:messages></flash:messages>

<script type="text/ng-template" id="template/modal/backdrop.html">
    <div class="modal-backdrop fade"
    ng-class="{in: animate}"
    ng-style="{'z-index': 1040 + (index && 1 || 0) + index*10}"
    ></div>
</script>

<script type="text/ng-template" id="template/modal/window.html">
    <div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{'z-index': 1050 + index*10, display: 'block'}" ng-click="close($event)">
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}"><div class="modal-content" modal-transclude></div></div>
    </div>
</script>

<toaster-container toaster-options="{'position-class': 'toast-top-right'}"></toaster-container>

</body>
</html>

