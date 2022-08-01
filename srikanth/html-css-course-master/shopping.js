var app=angular.module("myApp",[]);
app.controller("myController",function($scope){
    $scope.items[
        {
            section:'men',
            id:1,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:2,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:3,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:4,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:5,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:6,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:7,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:8,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:9,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:10,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:11,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:12,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:13,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:14,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        },
        {
            section:'men',
            id:15,
            name:'shirt',
            desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
            quantity:1,
            Image:'',
            price:'$200',
    
        }
    ]
    $scope.foundList=[]
    $scope.message=''
    $scope.isVisible=false
    $scope.show=function(){
        $scope.isVisible=$scope.isVisible? false : true
    };
    $scope.addItem = function (item){
        if(item){
            $scope.foundList.push({ section: item.section, id: item.id, name: item.name, desc: item.desc, Image: item.Image, price: item.price }) 

        }
    }
    $scope.remove=function(cart){
        if(cart){
            $scope.foundList.splice($scope.foundList.indexOf(cart),1);

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
})