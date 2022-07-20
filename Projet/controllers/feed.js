const Post = require('../models/post');

// exports.getPosts = (req, res, next) => {
//     res.status(200).json({
//       posts: [
//         {
//           _id: '1',
//           title: 'First Post',
//           content: 'This is the first post!',
//           imageUrl: 'images/yourimage.jpg',
//           creator: {
//             name: 'Sciences-u'
//           },
//           createdAt: new Date()
//         }
//       ]
//     });
//   };
  
  exports.createPost = (req, res, next) => {
    console.log('here');
    console.log('body', req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({
    //     message: 'Validation failed, entered data is incorrect.',
    //     errors: errors.array()
    //   });
    // }
    const cityName = req.body.cityName;
    const countryName = req.body.countryName;
    const population = req.body.population;
    const post = new Post({
        cityName: cityName,
        countryName: countryName,
        population: population
    });
    post
      .save()
      .then(result => {
        res.status(201).json({
          message: 'Post created successfully!',
          post: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  