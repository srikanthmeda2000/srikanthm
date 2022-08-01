var app = angular.module("search", []);
app.controller("searchController", function ($scope) {
  $scope.searchItems = [
    {
      section: 'men|boys',
      id: 1,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts1.jpg',
      price: '$550',
    },
    {
      section: 'men|boys',
      id: 2,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts2.jpg',
      price: '$500',
    },
    {
      section: 'men|boys',
      id: 3,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts3.jpg',
      price: '$350',
    },
    {
      section: 'men|boys',
      id: 4,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts.jpg',
      price: '$300',
    },
    {
      section: 'men|boys',
      id: 5,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/tshirt.jpg',
      price: '$250',
    },
    {
      section: 'men|boys',
      id: 6,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/tshirt1.jpg',
      price: '$400',
    },
    {
      section: 'Tv',
      id: 7,
      name: 'Tv',
      desc: 'Designed for wildlife explorations in dry weather. Trousers offering durability thanks to the solid',
      quntity: 1,
      Image: '../assignment3/tv2.jpg',
      price: '$400',
    },
    {
      section: 'Tv',
      id: 8,
      name: 'Tv',
      desc: ' Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color of the product.',
      quntity: 1,
      Image: '../assignment3/tv1.jpg',
      price: '$400',
    },
    {
      section: 'shoes',
      id: 9,
      name: 'shoes',
      desc: 'Each feature of the FLYBOLT, from the aerodynamic shape profile',
      quntity: 1,
      Image: '../assignment3/shoes1.jpg',
      price: '$400',
    },
    {
      section: 'shoes',
      id: 10,
      name: 'shoes',
      desc: 'Each feature of the FLYBOLT',
      quntity: 1,
      Image: '../assignment3/shoes2.jpg',
      price: '$400',
    },
    {
      section: 'Tv',
      id: 11,
      name: 'Tv',
      desc: 'Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color of the product.',
      quntity: 1,
      Image: '../assignment3/tv.jpg',
      price: '$400',
    },
    {
      section: 'shoes',
      id: 12,
      name: 'shoes',
      desc: 'Each feature of the FLYBOLT, from the aerodynamic shape profile',
      quntity: 1,
      Image: '../assignment3/shoes.jpg',
      price: '$400',
    },
  ]
  $scope.foundList = [];
  $scope.message = '';
  $scope.isVisible = false;
  $scope.show = function () {
    $scope.isVisible = $scope.isVisible ? false : true
  };

  $scope.store = function (item) {
    if (item) {
      $scope.foundList.push({ section: item.section, id: item.id, name: item.name, desc: item.desc, Image: item.Image, price: item.price })
      // console.log($scope.foundList)
    }

  }

 
  $scope.remove = function (cart) {
    if (cart) {
      $scope.foundList.splice($scope.foundList.indexOf(cart), 1);
      // $scope.total -= cart.price;
    }
  }


  app.filter('searchFor', function () {
    return function (arr, searchString) {
      if (!searchString) {
        return arr
      }
      var result = []
      searchString = searchString.toLowerCase()
      angular.forEach(arr, (item) => {
        if (item.section.toLowerCase().indexOf(searchString) !== -1) {
          result.push(item)
        }
      })
      return result;
    }
  })
});