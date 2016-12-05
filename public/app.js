window.onload = function(){
  
  var cat1 = createCat({name: "Boba", favouriteFood: "Sock fluff", imageSrc:"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"});
  var cat2 = createCat({name: "Barnaby", favouriteFood: "Tuna", imageSrc:"http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"});
  var cat3 = createCat({name: "Max", favouriteFood: "Whiskas Temptations", imageSrc:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"});

  var catsToAdd = [cat1, cat2, cat3];
  addCats(catsToAdd);

  var imageUrl = "http://www.jokeitup.com/files/2015/02/01874_098-576x432.jpg";
  var newCat = createCat({name: "Killer", favouriteFood: "birds", imageSrc: imageUrl});

  addCat(newCat);
};

var addCats = function(cats){
  cats.forEach(function(cat){
    addCat(cat);
  });
};

var addCat = function(catUl){
  var cats = document.getElementById('cats');
  cats.appendChild(catUl);
};

var createCat = function(params){
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  var nameLi = createCatNameLi(params.name);
  var favouriteFoodLi = createCatFavouriteFoodLi(params.favouriteFood);
  var img = createCatImg(params.imageSrc);
  catUl.appendChild(nameLi);
  catUl.appendChild(favouriteFoodLi);
  catUl.appendChild(img);
  return catUl;
};

var createCatNameLi = function(name){
  var catNameLi = document.createElement('li');
  var catNameText = "Name: " + name;
  catNameLi.innerText = catNameText;
  return catNameLi;
};

var createCatFavouriteFoodLi = function(food){
  var catFavouriteFoodLi = document.createElement('li');
  var favouriteFoodText = "Favourite food: " + food;
  catFavouriteFoodLi.innerText = favouriteFoodText;
  return catFavouriteFoodLi;
};

var createCatImg = function(src){
  var catImg = document.createElement('img');
  catImg.src = src;
  catImg.width = "500";
  return catImg;
};
