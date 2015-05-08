"use strict";

var expect = require("chai").expect,
    Semantria = require("../"),
    config = require("../config");

describe("#queueDocument", function() {
    var SemantriaSession,
        documentId;

    before(function (done) {
        SemantriaSession = new Semantria.Session(config.consumer_key, config.consumer_secret, 'reactApp');
        documentId = (new Date).getTime();
        done();
    });

    it("should return a status code", function (done) {
        var result = SemantriaSession.queueDocument({
            id: documentId,
            text: "It works!"
        });

        expect(result).to.equal(202);
        done();
    });
});
