describe("trunc function testing suite", function () {
    it("123123.123123123 should be equal 123123", function () {
        var outputs = [
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 123123])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123'])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 123123])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123'])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 123123])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123'])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 123123])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123']))
        ];

        iterateOutputs(outputs, function (items) {
            expect(new CustomBigNumber(items[0]).trunc()).toMatch(items[1]);
        });
    });
});