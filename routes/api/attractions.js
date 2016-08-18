var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');


module.exports = router;


router.get('/hotels', function(req, res, next){
	Hotel.findAll()
		.then(function(hotels){
			res.send(hotels)
		})
});

router.get('/restaurants', function(req, res, next){
	Restaurant.findAll()
		.then(function(restaurants){
			res.send(restaurants);
		})
});

router.get('/activities', function(req, res, next){
	Activity.findAll()
		.then(function(activities){
			res.send(activities);
		})
});

router.get('/days', function(req, res, next){
	Day.findAll()
		.then(function(days){
			res.send(days);
		})
});



router.post('/addhotel/:dayNum/:attractionId', function(req, res, next){
	var dayNum = +req.params.dayNum;
	var attractionId = +req.params.attractionId;
	// var type = req.params.type;
	// console.log('you hit me', dayNum, attractionId, type);
	// var daySql;
	Day.findById(dayNum)
	.then(function(day){
		// daySql = day;
		return Hotel.findById(attractionId)
		.then(function(hotel){
			day.setHotel(hotel);
		});
	})
	.catch(function(err){
		console.error(err);
	});
	
});

router.post('/addrestaurant/:dayNum/:attractionId', function(req, res, next){
	var dayNum = +req.params.dayNum;
	var attractionId = +req.params.attractionId;
	// var type = req.params.type;
	// console.log('you hit me', dayNum, attractionId, type);
	// var daySql;
	Day.findById(dayNum)
	.then(function(day){
		// daySql = day;
		return Restaurant.findById(attractionId)
		.then(function(restaurant){
			console.log('*******',day,restaurant);
			day.setRestaurant(restaurant);
		});
	})
	.catch(function(err){
		console.error(err);
	});
	
});

router.post('/addactivity/:dayNum/:attractionId', function(req, res, next){
	var dayNum = +req.params.dayNum;
	var attractionId = +req.params.attractionId;
	// var type = req.params.type;
	// console.log('you hit me', dayNum, attractionId, type);
	// var daySql;
	Day.findById(dayNum)
	.then(function(day){
		// daySql = day;
		return Activity.findById(attractionId)
		.then(function(activity){
			day.setActivity(activity);
		});
	})
	.catch(function(err){
		console.error(err);
	});
	
});
	// case 'restaurant':
	// 	return Restaurant.findById(attractionId)
	// 	.then(function(restaurant){
	// 		console.log(Date(), 'day', daySql, restaurant);
	// 		daySql.setRestaurant(restaurant);
	// 	})
	// 	break;

	// case 'activity':
	// 	return Activity.findById(attractionId)
	// 	.then(function(activity){
	// 		daySql.setActivity(activity);
	// 	})
	// 	break;
	// 		}
	// 	})
	// .catch(function(err){
	// 	console.error(err);
	// });







router.post('/days', function(req, res, next){
	Day.findAll()
		.then(function(days){
			res.send(days);
		})
});


