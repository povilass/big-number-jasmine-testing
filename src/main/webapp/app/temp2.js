describe("truncated function testing suite", function () {
    it("123123.123123123 should be equal 8", function () {
        var outputs = [
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 8])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '8'])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 8])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '8'])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 8])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '8'])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 8])),
            PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '8']))
        ];

        iterateOutputs(outputs, function (items) {
            expect(new CustomBigNumber(items[0]).truncated()).toMatch(items[1]);
        });
    });
});