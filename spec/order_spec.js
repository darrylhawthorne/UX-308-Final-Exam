import { handleInput, clearInput } from '../src/Order.js';

describe("Tests all stages of a hair salon order", function () {
    beforeEach(function () {
        clearInput();
    });
    it("test welcome", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Darryl's Cuts!");
    });
    it("test service selection", function () {
        handleInput("hello");
        const aResults = handleInput("Buzz Cut");
        expect(aResults[0]).toBe("Great choice — a Buzz Cut it is!");
    });
    it("test upsell yes", function () {
        handleInput("hello");
        handleInput("Buzz Cut");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Perfect! Your Buzz Cut + shampoo treatment is all booked.");
    });
    it("test upsell no", function () {
        handleInput("hello");
        handleInput("Regular Cut");
        const aResults = handleInput("no");
        expect(aResults[0]).toBe("No problem! Your Regular Cut is booked.");
    });
});