var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl       = require('../controllers/users');
    ShowsCtrl       = require('../controllers/shows');
    HappeningsCtrl  = require('../controllers/happenings');

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);
router.put( '/users/me', token.authenticate, usersCtrl.update);

router.post('/token', token.create);
router.post('/users/me/token', token.authenticate, token.refresh);

// shows resource paths
router.get('/shows/:id',    ShowsCtrl.showShow);
router.get('/shows',        ShowsCtrl.showIndex);
router.post('/shows',       token.authenticate, ShowsCtrl.showCreate);
router.put('/shows/:id',    token.authenticate, ShowsCtrl.showUpdate);
router.delete('/shows/:id', token.authenticate, ShowsCtrl.showDelete);

// happenings resource paths
router.get('/happenings/:id',    HappeningsCtrl.happeningShow);
router.get('/happenings',        HappeningsCtrl.happeningIndex);
router.post('/happenings',       HappeningsCtrl.happeningCreate);
router.put('/happenings/:id',    token.authenticate, HappeningsCtrl.happeningUpdate);
router.delete('/happenings/:id', token.authenticate, HappeningsCtrl.happeningDelete);


module.exports = router;
