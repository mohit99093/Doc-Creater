const router = require('express').Router();
let Document = require('../models/document.model');

router.post('/add', async (req, res) => {
    try {
      console.log(req.body)
      const newValue = await Document.create(req.body);
    return res.status(200).json(newValue)
    } catch (error) {
        console.log(error)
      return res.status(400).json('Error: ' + error)
    }
  });
  
  router.route('/update/:id').post( async(req, res) => {

    try {
      
     const newValue =await Document.findByIdAndUpdate(req.params.id, req.body, {new: true})
     console.log(newValue);
  
      return res.status(200).json(newValue)  
    } catch (err) {
          return res.status(400).json('Error: ' + err)
    }
});


router.route('/get').get((req, res) => {
    Document.find()
      .then(value => res.json(value))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post( async(req, res) => {

    try {
      
     const newValue =await document.findByIdAndUpdate(req.params.id, req.body, {new: true})
     console.log(newValue);
  
      return res.status(200).json(newValue)  
    } catch (err) {
          return res.status(400).json('Error: ' + err)
    }    
})

module.exports = router;