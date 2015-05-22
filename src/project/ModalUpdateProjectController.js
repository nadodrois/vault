xApp
    .controller('ModalUpdateProjectController', function($scope, $modalInstance, Api, project) {
        $scope.project = project;

        $scope.ok = function() {
            Api.project.update(
                $scope.project,
                function() {
                    $modalInstance.close($scope.project);
                }
            );
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });