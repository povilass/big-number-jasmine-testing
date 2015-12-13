define(['permutation-helper', 'angular', 'angular-mocks', 'providers'], function (PermutationHelper) {

    describe("Custom big number", function () {
        var CustomBigNumber;

        function modifier(changeTo) {
            return function(array) {
                angular.forEach(changeTo, function (value, index) {
                    if (array[index]) {
                        array[index] = new CustomBigNumber(value);
                    } else {
                        array[index] = value;
                    }
                });
            }
        }

        function iterateOutputs(outputs, fn) {
            angular.forEach(outputs, function(output) {
                angular.forEach(output, function(items) {
                    fn(items);
                });
            });
        }

        beforeEach(function () {
            module('corpProviders');
        });

        beforeEach(inject(function ($window) {
            $window.decimalSeparator = ',';
            $window.groupSeparator = "'";
        }));
        beforeEach(inject(['CustomBigNumber', function (Number) {
            CustomBigNumber = Number;
        }]));

        describe("abs function testing suite", function () {
            it("-5 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).abs()).toMatch(items[1]);
                });
            });

            it("-9999.999 should be equal 9999.999", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-9999.999, 9999.999])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-9999.999, '9999.999'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-9999.999', 9999.999])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-9999.999', '9999.999']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).abs()).toMatch(items[1]);
                });
            });

            it("5 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).abs()).toMatch(items[1]);
                });
            });

        });

        describe("absoluteValue function testing suite", function () {
            it("-5 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).absoluteValue()).toMatch(items[1]);
                });
            });

            it("-9999.999 should be equal 9999.999", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-9999.999, 9999.999])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-9999.999, '9999.999'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-9999.999', 9999.999])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-9999.999', '9999.999']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).absoluteValue()).toMatch(items[1]);
                });
            });

            it("5 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).absoluteValue()).toMatch(items[1]);
                });
            });

        });

        describe("add function testing suite", function () {
            it("5 + 2 should be equal 7", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, 7])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5', 2, 7])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, '2', 7])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, '7']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).add(items[1])).toMatch(items[2]);
                });
            });

            it("5.1212 + 2 should be equal 7.1212", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, 7.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.1212', 2, 7.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, '2', 7.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, '7.1212'] ))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).add(items[1])).toMatch(items[2]);
                });
            });

            it("9.999 + (-111) should be equal -101.001", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, -101.001])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['9.999', -111, -101.001])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, '-111', -101.001])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, '-101.001'])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, new CustomBigNumber('-101.001')]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).add(items[1])).toMatch(items[2]);
                });

            });

            it("-99.999999999 + (-100) should be equal -199.999999999", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.999999999, -100, -199.999999999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-99.999999999', -100, -199.999999999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.999999999, '-100', -199.999999999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.999999999, -100, '-199.999999999']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).add(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("plus function testing suite", function () {
            it("5 + 2 should be equal 7", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, 7])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5', 2, 7])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, '2', 7])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, '7']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).plus(items[1])).toMatch(items[2]);
                });
            });

            it("5.1212 + 2 should be equal 7.1212", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, 7.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.1212', 2, 7.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, '2', 7.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, '7.1212'] ))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).plus(items[1])).toMatch(items[2]);
                });
            });

            it("9.999 + (-111) should be equal -101.001", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, -101.001])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['9.999', -111, -101.001])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, '-111', -101.001])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, '-101.001'])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, new CustomBigNumber('-101.001')]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).plus(items[1])).toMatch(items[2]);
                });

            });

            it("-99.999999999 + (-100) should be equal -199.999999999", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.999999999, -100, -199.999999999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-99.999999999', -100, -199.999999999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.999999999, '-100', -199.999999999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.999999999, -100, '-199.999999999']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).plus(items[1])).toMatch(items[2]);
                });
            });


        });

        describe("ceil function testing suite", function () {
            it("-3.99999 should be equal -3", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, -3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, '-3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', -3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', '-3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).ceil()).toMatch(items[1]);
                });
            });

            it("2.6 should be equal 3", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([2.6, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([2.6, '3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['2.6', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['2.6', '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).ceil()).toMatch(items[1]);
                });
            });

            it("5 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).ceil()).toMatch(items[1]);
                });
            });

            it("-5 should be equal -5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, -5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, '-5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', -5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', '-5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).ceil()).toMatch(items[1]);
                });
            });

            it("0.1 should be equal 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([0.1, 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([0.1, '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['0.1', 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['0.1', '1']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).ceil()).toMatch(items[1]);
                });
            });

            it("-0.1 should be equal 0", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-0.1, 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-0.1, '0'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-0.1', 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-0.1', '0']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).ceil()).toMatch(items[1]);
                });
            });
        });

        describe("comparedTo function testing suite", function () {
            it("-3.99999 to -3 should be equal -1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, -3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, '-3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', -3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', '-3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).comparedTo(items[1])).toBe(-1);
                });
            });

            it("3.99999 to 3 should be equal 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3.99999, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3.99999, '3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3.99999', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3.99999', '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).comparedTo(items[1])).toBe(1);
                });
            });

            it("3 to 3 should be equal 0", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3, '3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3', '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).comparedTo(items[1])).toBe(0);
                });
            });
        });

        describe("cmp function testing suite", function () {
            it("-3.99999 to -3 should be equal -1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, -3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, '-3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', -3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', '-3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).cmp(items[1])).toBe(-1);
                });
            });

            it("3.99999 to 3 should be equal 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3.99999, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3.99999, '3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3.99999', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3.99999', '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).cmp(items[1])).toBe(1);
                });
            });

            it("3 to 3 should be equal 0", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([3, '3'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['3', '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).cmp(items[1])).toBe(0);
                });
            });

        });

        describe("decimalPlaces function testing suite", function () {
            it("5.5555 should be equal 4", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).decimalPlaces()).toMatch(items[1]);
                });
            });

            it("-5.5555 should be equal 4", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).decimalPlaces()).toMatch(items[1]);
                });
            });

            it("6 should be equal 0", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([6, 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([6, '0'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['6', 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['6', '0']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).decimalPlaces()).toMatch(items[1]);
                });
            });

        });

        describe("dp function testing suite", function () {
            it("5.5555 should be equal 4", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dp()).toMatch(items[1]);
                });
            });

            it("-5.5555 should be equal 4", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dp()).toMatch(items[1]);
                });
            });

            it("6 should be equal 0", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([6, 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([6, '0'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['6', 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['6', '0']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dp()).toMatch(items[1]);
                });
            });

        });

        describe("dividedBy function testing suite", function () {
            it("5.5555 / 4  should be equal 1.388875", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', '1.388875' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dividedBy(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / 4  should be equal -1.388875", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, '-1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', '-1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, '-1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', '-1.388875' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dividedBy(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / -4  should be equal 1.388875", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, -4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '-4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', -4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '-4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, -4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '-4', '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', -4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '-4', '1.388875' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dividedBy(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("div function testing suite", function () {
            it("5.5555 / 4  should be equal 1.388875", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', '1.388875' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).div(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / 4  should be equal -1.388875", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', -1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, '-1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', '-1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, '-1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', '-1.388875' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).div(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / -4  should be equal 1.388875", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, -4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '-4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', -4, 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '-4', 1.388875 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, -4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '-4', '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', -4, '1.388875' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '-4', '1.388875' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).div(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("dividedToIntegerBy function testing suite", function () {
            it("5.5555 / 4  should be equal 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, '1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', '1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, '1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', '1' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dividedToIntegerBy(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / 4  should be equal -1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, '-1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', '-1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, '-1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', '-1' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dividedToIntegerBy(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / 2  should be equal -2", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 2, -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '2', -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 2, -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '2', -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 2, '-2' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '2', '-2' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 2, '-2' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '2', '-2' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).dividedToIntegerBy(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("divToInt function testing suite", function () {
            it("5.5555 / 4  should be equal 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', 1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, 4, '1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.5555, '4', '1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', 4, '1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.5555', '4', '1' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).divToInt(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / 4  should be equal -1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', -1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 4, '-1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '4', '-1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 4, '-1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '4', '-1' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).divToInt(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 / 2  should be equal -2", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 2, -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '2', -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 2, -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '2', -2 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 2, '-2' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '2', '-2' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 2, '-2' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '2', '-2' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).divToInt(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("equals function testing suite", function () {
            it("5.5555 == 4  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).equals(items[1])).toBeFalsy();
                });
            });

            it("5.5555 == 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).equals(items[1])).toBeFalsy();
                });
            });

            it("-6 == -6  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).equals(items[1])).toBeTruthy();
                });
            });

            it("-6 == 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).equals(items[1])).toBeFalsy();
                });
            });
        });

        describe("eq function testing suite", function () {
            it("5.5555 == 4  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).eq(items[1])).toBeFalsy();
                });
            });

            it("5.5555 == 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).eq(items[1])).toBeFalsy();
                });
            });

            it("-6 == -6  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).eq(items[1])).toBeTruthy();
                });
            });

            it("-6 == 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).eq(items[1])).toBeFalsy();
                });
            });
        });

        describe("floor function testing suite", function () {
            it("-3.99999 should be equal -4", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, -4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-3.99999, '-4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', -4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-3.99999', '-4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).floor()).toMatch(items[1]);
                });
            });

            it("2.6 should be equal 2", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([2.6, 2])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([2.6, '2'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['2.6', 2])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['2.6', '2']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).floor()).toMatch(items[1]);
                });
            });

            it("5 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).floor()).toMatch(items[1]);
                });
            });

            it("-5 should be equal -5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, -5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5, '-5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', -5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5', '-5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).floor()).toMatch(items[1]);
                });
            });

            it("0.1 should be equal 0", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([0.1, 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([0.1, '0'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['0.1', 0])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['0.1', '0']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).floor()).toMatch(items[1]);
                });
            });

            it("-0.1 should be equal -1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-0.1, -1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-0.1, '-1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-0.1', -1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-0.1', '-1']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).floor()).toMatch(items[1]);
                });
            });
        });

        describe("greaterThan function testing suite", function () {
            it("5.5555 > 4  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThan(items[1])).toBeTruthy();
                });
            });

            it("5.5555 > 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThan(items[1])).toBeTruthy();
                });
            });

            it("-6 > -6  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThan(items[1])).toBeFalsy();
                });
            });

            it("-6 > 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThan(items[1])).toBeFalsy();
                });
            });
        });

        describe("gt function testing suite", function () {
            it("5.5555 > 4  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gt(items[1])).toBeTruthy();
                });
            });

            it("5.5555 > 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gt(items[1])).toBeTruthy();
                });
            });

            it("-6 > -6  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gt(items[1])).toBeFalsy();
                });
            });

            it("-6 > 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gt(items[1])).toBeFalsy();
                });
            });
        });

        describe("greaterThanOrEqualTo function testing suite", function () {
            it("5.5555 >= 4  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThanOrEqualTo(items[1])).toBeTruthy();
                });
            });

            it("5.5555 >= 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThanOrEqualTo(items[1])).toBeTruthy();
                });
            });

            it("-6 >= -6  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThanOrEqualTo(items[1])).toBeTruthy();
                });
            });

            it("-6 >= 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).greaterThanOrEqualTo(items[1])).toBeFalsy();
                });
            });
        });

        describe("gte function testing suite", function () {
            it("5.5555 >= 4  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gte(items[1])).toBeTruthy();
                });
            });

            it("5.5555 >= 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gte(items[1])).toBeTruthy();
                });
            });

            it("-6 >= -6  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gte(items[1])).toBeTruthy();
                });
            });

            it("-6 >= 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).gte(items[1])).toBeFalsy();
                });
            });
        });

        describe("isFinite function testing suite", function () {
            it("0/0  should be false", function () {
                expect(new CustomBigNumber(0).div(0).isFinite()).toBeFalsy();
            });
            it("5 should be true", function () {
                expect(new CustomBigNumber(0).isFinite()).toBeTruthy();
            });
            it("NaN should be false", function () {
                expect(new CustomBigNumber('NaN').isFinite()).toBeFalsy();
            });
        });

        describe("isInteger function testing suite", function () {
            it("5.5555 should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['5.5555']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isInteger()).toBeFalsy();
                });
            });

            it("5 should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([5])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isInteger()).toBeTruthy();
                });
            });
        });

        describe("isInt function testing suite", function () {
            it("5.5555 should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['5.5555']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isInt()).toBeFalsy();
                });
            });

            it("5 should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([5])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isInt()).toBeTruthy();
                });
            });
        });

        describe("isNaN function testing suite", function () {
            it("5.5555 should be false", function () {
                expect(new CustomBigNumber(5.5555).isNaN()).toBeFalsy();
            });
            it("NaN should be true", function () {
                expect(new CustomBigNumber(NaN).isNaN()).toBeTruthy();
            });
        });

        describe("isNegative function testing suite", function () {
            it("6.666 should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([6.666])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['6.666']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isNegative()).toBeFalsy();
                });
            });

            it("-5 should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([-5])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['-5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isNegative()).toBeTruthy();
                });
            });
        });

        describe("isNeg function testing suite", function () {
            it("6.666 should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([6.666])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['6.666']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isNeg()).toBeFalsy();
                });
            });

            it("-5 should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([-5])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['-5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isNeg()).toBeTruthy();
                });
            });
        });

        describe("isZero function testing suite", function () {
            it("6.666 should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([6.666])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['6.666']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isZero()).toBeFalsy();
                });
            });

            it("-5 should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([-5])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['-5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isZero()).toBeFalsy();
                });
            });

            it("0 should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier([0])),
                    PermutationHelper.getModifiedPermutations({ size : 1 }, modifier(['0']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).isZero()).toBeTruthy();
                });
            });
        });

        describe("lessThan function testing suite", function () {
            it("5.5555 < 4  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThan(items[1])).toBeFalsy();
                });
            });

            it("5.5555 < 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThan(items[1])).toBeFalsy();
                });
            });

            it("-6 < -6  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThan(items[1])).toBeFalsy();
                });
            });

            it("-6 < 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThan(items[1])).toBeTruthy();
                });
            });
        });

        describe("lt function testing suite", function () {
            it("5.5555 < 4  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lt(items[1])).toBeFalsy();
                });
            });

            it("5.5555 < 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lt(items[1])).toBeFalsy();
                });
            });

            it("-6 < -6  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lt(items[1])).toBeFalsy();
                });
            });

            it("-6 < 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lt(items[1])).toBeTruthy();
                });
            });
        });

        describe("lessThanOrEqualTo function testing suite", function () {
            it("5.5555 <= 4  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '4'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 4])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '4']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThanOrEqualTo(items[1])).toBeFalsy();
                });
            });

            it("5.5555 <= 5  should be false", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThanOrEqualTo(items[1])).toBeFalsy();
                });
            });

            it("-6 <= -6  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '-6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', -6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '-6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThanOrEqualTo(items[1])).toBeTruthy();
                });
            });

            it("-6 <= 5  should be true", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-6, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-6', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).lessThanOrEqualTo(items[1])).toBeTruthy();
                });
            });
        });

        describe("minus function testing suite", function () {
            it("5 - 2 should be equal 3", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5', 2, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, '2', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).minus(items[1])).toMatch(items[2]);
                });
            });

            it("5.1212 - 2 should be equal 3.1212", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, 3.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.1212', 2, 3.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, '2', 3.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, '3.1212'] ))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).minus(items[1])).toMatch(items[2]);
                });
            });

            it("9.999 - (-111) should be equal 120.999", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, 120.999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['9.999', -111, 120.999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, '-111', 120.999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, '120.999'])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, new CustomBigNumber('120.999')]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).minus(items[1])).toMatch(items[2]);
                });

            });

            it("-99.99 - (-100) should be equal 0.01", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.99, -100, 0.01])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-99.99', -100, 0.01])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.99, '-100', 0.01])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.99, -100, '0.01']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).minus(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("sub function testing suite", function () {
            it("5 - 2 should be equal 3", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5', 2, 3])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, '2', 3])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5, 2, '3']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sub(items[1])).toMatch(items[2]);
                });
            });

            it("5.1212 - 2 should be equal 3.1212", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, 3.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['5.1212', 2, 3.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, '2', 3.1212])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([5.1212, 2, '3.1212'] ))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sub(items[1])).toMatch(items[2]);
                });
            });

            it("9.999 - (-111) should be equal 120.999", function() {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, 120.999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['9.999', -111, 120.999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, '-111', 120.999])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, '120.999'])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([9.999, -111, new CustomBigNumber('120.999')]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sub(items[1])).toMatch(items[2]);
                });

            });

            it("-99.99 - (-100) should be equal 0.01", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.99, -100, 0.01])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-99.99', -100, 0.01])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.99, '-100', 0.01])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-99.99, -100, '0.01']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sub(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("modulo function testing suite", function () {
            it("77 modulo 18 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([77, 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['77', 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([77, '18', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([77, 18, '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).modulo(items[1])).toMatch(items[2]);
                });
            });

            it("-77 modulo 18 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-77, 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-77', 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-77, '18', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-77, 18, '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).modulo(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("mod function testing suite", function () {
            it("77 mod 18 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([77, 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['77', 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([77, '18', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([77, 18, '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).mod(items[1])).toMatch(items[2]);
                });
            });

            it("-77 mod 18 should be equal 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-77, 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-77', 18, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-77, '18', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-77, 18, '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).mod(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("negated function testing suite", function () {
            it("5.5555 should be 5.5555", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.5555']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).negated()).toMatch(items[1]);
                });
            });

            it("-5.5555 should be 5.5555", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', '5.5555']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).negated()).toMatch(items[1]);
                });
            });

        });

        describe("neg function testing suite", function () {
            it("5.5555 should be 5.5555", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.5555']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).neg()).toMatch(items[1]);
                });
            });

            it("-5.5555 should be 5.5555", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([-5.5555, '5.5555'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', 5.5555])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['-5.5555', '5.5555']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).neg()).toMatch(items[1]);
                });
            });

        });

        describe("toPrecision function testing suite", function () {
            it("5.5555 precision 2 should be 5.6", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPrecision(2)).toMatch(items[1]);
                });
            });

            it("5.5555 precision 3 should be 5.56", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.56])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.56'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.56])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.56'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5.56])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5.56'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5.56])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5.56']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPrecision(3)).toMatch(items[1]);
                });
            });

            it("5.5555 precision 1 should be 6", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPrecision(1)).toMatch(items[1]);
                });
            });

        });

        describe("precision function testing suite", function () {
            it("5.5555 should be 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).precision()).toMatch(items[1]);
                });
            });

            it("15.5555 should be 6", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', '6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).precision()).toMatch(items[1]);
                });
            });

            it("1 should be 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', '1']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).precision()).toMatch(items[1]);
                });
            });

        });

        describe("sd function testing suite", function () {
            it("5.5555 should be 5", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([5.5555, '5'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', 5])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['5.5555', '5']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sd()).toMatch(items[1]);
                });
            });

            it("15.5555 should be 6", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([15.5555, '6'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', 6])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['15.5555', '6']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sd()).toMatch(items[1]);
                });
            });

            it("1 should be 1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier([1, '1'])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', 1])),
                    PermutationHelper.getModifiedPermutations({ size : 2 }, modifier(['1', '1']))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).sd()).toMatch(items[1]);
                });
            });

        });

        describe("round function testing suite", function () {

            it("-5.5555 round 3  should be equal -5.556", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 3, -5.556 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '3', -5.556 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 3, -5.556 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '3', -5.556 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 3, '-5.556' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '3', '-5.556' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 3, '-5.556' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '3', '-5.556' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).round(items[1])).toMatch(items[2]);
                });
            });

            it("-5.5555 round 0  should be equal -6", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 0, -6 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '0', -6 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 0, -6 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '0', -6 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, 0, '-6' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-5.5555, '0', '-6' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', 0, '-6' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-5.5555', '0', '-6' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).round(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("squareRoot function testing suite", function () {

            it("9 should be equal 3", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([9, 3])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([9, '3'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['9', 3])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['9', '3']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).squareRoot()).toMatch(items[1]);
                });
            });

            it("225 should be equal 15", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([225, 15])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([225, '15'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['225', 15])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['225', '15']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).squareRoot()).toMatch(items[1]);
                });
            });

        });

        describe("sqrt function testing suite", function () {

            it("9 should be equal 3", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([9, 3])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([9, '3'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['9', 3])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['9', '3']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).sqrt()).toMatch(items[1]);
                });
            });

            it("225 should be equal 15", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([225, 15])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([225, '15'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['225', 15])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['225', '15']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).sqrt()).toMatch(items[1]);
                });
            });

        });

        describe("toPower function testing suite", function () {

            it("3 toPower 4  should be equal 81", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, '81' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', '81' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, '81' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', '81' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPower(items[1])).toMatch(items[2]);
                });
            });

            it("2.2 toPower 4  should be equal 23.4256", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, '4', '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', '4', '23.4256' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPower(items[1])).toMatch(items[2]);
                });
            });

            it("-2.2 toPower 4  should be equal 23.4256", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '4', '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '4', '23.4256' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPower(items[1])).toMatch(items[2]);
                });
            });

            it("-2.2 toPower 3  should be equal -10.648", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 3, -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '3', -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 3, -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '3', -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 3, '-10.648' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '3', '-10.648' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 3, '-10.648' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '3', '-10.648' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toPower(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("pow function testing suite", function () {

            it("3 pow 4  should be equal 81", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', 81 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, '81' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', '81' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, '81' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', '81' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).pow(items[1])).toMatch(items[2]);
                });
            });

            it("2.2 pow 4  should be equal 23.4256", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([2.2, '4', '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['2.2', '4', '23.4256' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).pow(items[1])).toMatch(items[2]);
                });
            });

            it("-2.2 pow 4  should be equal 23.4256", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 4, 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '4', 23.4256 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '4', '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 4, '23.4256' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '4', '23.4256' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).pow(items[1])).toMatch(items[2]);
                });
            });

            it("-2.2 pow 3  should be equal -10.648", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 3, -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '3', -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 3, -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '3', -10.648 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, 3, '-10.648' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([-2.2, '3', '-10.648' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', 3, '-10.648' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['-2.2', '3', '-10.648' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).pow(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("times function testing suite", function () {

            it("3 times 4  should be equal 12", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, '12' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', '12' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, '12' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', '12' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).times(items[1])).toMatch(items[2]);
                });
            });

            it("3 times -3.333  should be equal -9.999", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, -3.333, -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '-3.333', -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', -3.333, -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '-3.333', -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, -3.333, '-9.999' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '-3.333', '-9.999' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', -3.333, '-9.999' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '-3.333', '-9.999' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).times(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("mul function testing suite", function () {

            it("3 mul 4  should be equal 12", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', 12 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, 4, '12' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '4', '12' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', 4, '12' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '4', '12' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).mul(items[1])).toMatch(items[2]);
                });
            });

            it("3 mul -3.333  should be equal -9.999", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, -3.333, -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '-3.333', -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', -3.333, -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '-3.333', -9.999 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, -3.333, '-9.999' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([3, '-3.333', '-9.999' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', -3.333, '-9.999' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['3', '-3.333', '-9.999' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).mul(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("toDigits function testing suite", function () {

            it("123.123 toDigits 1  should be equal 100", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 1, 100 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '1', 100 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 1, 100 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '1', 100 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 1, '100' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '1', '100' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 1, '100' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '1', '100' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toDigits(items[1])).toMatch(items[2]);
                });
            });
            it("123.123 toDigits 2  should be equal 120", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 2, 120 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '2', 120 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 2, 120 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '2', 120 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 2, '120' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '2', '120' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 2, '120' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '2', '120' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toDigits(items[1])).toMatch(items[2]);
                });
            });

            it("123.123 toDigits 3  should be equal 123", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 3, 123 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '3', 123 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 3, 123 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '3', 123 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 3, '123' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '3', '123' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 3, '123' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '3', '123' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toDigits(items[1])).toMatch(items[2]);
                });
            });

            it("123.123 toDigits 4  should be equal 123.1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 4, 123.1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '4', 123.1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 4, 123.1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '4', 123.1 ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, 4, '123.1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier([123.123, '4', '123.1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', 4, '123.1' ])),
                    PermutationHelper.getModifiedPermutations({ size : 3 }, modifier(['123.123', '4', '123.1' ]))
                ];

                iterateOutputs(outputs, function(items) {
                    expect(new CustomBigNumber(items[0]).toDigits(items[1])).toMatch(items[2]);
                });
            });

        });

        describe("toFixed function testing suite", function () {
            it("123.123123123 toFixed 4  should be equal 123.1231", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, 4, 123.1231])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, '4', 123.1231])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', 4, 123.1231])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', '4', 123.1231])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, 4, '123.1231'])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, '4', '123.1231'])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', 4, '123.1231'])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', '4', '123.1231']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toFixed(items[1])).toMatch(items[2]);
                });
            });

            it("123.123123123 toFixed 1  should be equal 123.1", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, 1, 123.1])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, '1', 123.1])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', 1, 123.1])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', '1', 123.1])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, 1, '123.1'])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier([123.123123123, '1', '123.1'])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', 1, '123.1'])),
                    PermutationHelper.getModifiedPermutations({size: 3}, modifier(['123.123123123', '1', '123.1']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toFixed(items[1])).toMatch(items[2]);
                });
            });
        });

        describe("toFormat function testing suite", function () {
            it("123123.123123123 toFormat 2  should be equal 123'123,12", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 2])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '2'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 2])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '2'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 2])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '2'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 2])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '2']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toFormat(items[1])).toMatch("123'123,12");
                });
            });
        });

        describe("toFraction function testing suite", function () {
            it("123123.123123123 (123123.123123123 ~= 984985/8) toFraction 8  should be equal ['984985', '8']", function () {
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
                    expect(new CustomBigNumber(items[0]).toFraction(items[1])).toMatch(["984985", "8"]);
                });
            });
        });

        describe("toJSON function testing suite", function () {
            it("123123.123123123 should be equal '123123.123123123'", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toJSON()).toMatch(items[1]);
                });
            });
        });

        describe("valueOf function testing suite", function () {
            it("123123.123123123 should be equal '123123.123123123'", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).valueOf()).toMatch(items[1]);
                });
            });
        });

        describe("toString function testing suite", function () {
            it("123123.123123123 should be equal '123123.123123123'", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123'])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', '123123.123123123']))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toString()).toMatch(items[1]);
                });
            });
        });

        describe("toNumber function testing suite", function () {
            it("123123.123123123 toNumber be equal 123123.123123123", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([123123.123123123, 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 123123.123123123])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['123123.123123123', 123123.123123123]))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toNumber()).toMatch(items[1]);
                });
            });

            it("848484 toNumber be equal 848484", function () {
                var outputs = [
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([848484, 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([848484, 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['848484', 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['848484', 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([848484, 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier([848484, 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['848484', 848484])),
                    PermutationHelper.getModifiedPermutations({size: 2}, modifier(['848484', 848484]))
                ];

                iterateOutputs(outputs, function (items) {
                    expect(new CustomBigNumber(items[0]).toNumber()).toMatch(items[1]);
                });
            });
        });

        describe("truncated function testing suite", function () {
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
                    expect(new CustomBigNumber(items[0]).truncated()).toMatch(items[1]);
                });
            });
        });

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
    });
});