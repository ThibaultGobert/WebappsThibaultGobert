let Request = require('request');
require('dotenv').config();

describe("server", () => {
    let server;
    let wishlistID;
    beforeAll(() => {
        server = require('../app');
    });
    afterAll(() => {
    });
    // user registration
    describe("POST /API/users/register", () => {
        let data = {};
        let username = "username123";
        let password ="password12345"
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: `http://localhost:3000/API/users/register`,
                json: true,
                body: {username: username, password: password}
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
                
            });
            it("status 200", () => {
                expect(data.status).toBe(200);
            });
            it("check body",() =>{
                expect(data.body.username).toBe(username);
                expect(data.body.password).toBe(password);
            })
        });

        //add wishlist with wishlistitems
    describe("POST /API/wishlists", () => {
        let data = {};
        let name = "Christmas";
        let wishlistItems = ["Santa hat", "Cookies"];
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/API/wishlists',
                json: true,
                body: {
                    name: name,
                    wishlistItems: wishlistItems
                }}, (error,response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                }).auth(null,null,true,process.env.WISHLIST_BACKEND_SECRET);
            });
            it("status 200", () => {
                expect(data.status).toBe(200);
            });
            it("check body", () => {
                expect(data.body.name).toBe(name);
                expect(data.body.wishlistItems).toBe(wishlistItems);
                expect(data.body._id).toBeDefined;
                wishlistID = data.body._id;
            })
        });
        //delete wishlist
    describe("POST /API/wishlist/${wishlistID}", () => {
       let data = {};
       beforeAll((done) => {
        Request({
            method: 'POST',
            uri: 'http://localhost:3000/API/wishlist/${wishlistID}'
        }, (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        }).auth(null,null,true,process.env.WISHLIST_BACKEND_SECRET);
       });
       it("status 200", () => {
           expect(data.status).toBe(200);
       });
       it("check body", () => {
           expect(data.body.wishlists.length).toBe(0);
       }); 
    });
        
});
    /*
    describe("POST /API/wishlists", () => {
        let data = {};
        beforeAll((done) => {
            Request ({
                method: 'POST',
                uri: 'http://localhost:3000/API/wishlists',
                json: true,
                body: {"name":"jos zijn lijst"}
            }, (error, response, body) => {
                    data.status = response.statusCode;
                    data.body=body;
                    done();
                });
            });
            it("status 200", () => {
                expect(15).toBe(15);
            });
        });
    });
    
    */