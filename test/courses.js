const Courses = artifacts.require("Courses.sol")

contract('Courses', function(accounts) {

//test 1: setInstructor	
it("should push correct values to instructors mapping", function(done) {
    Courses.deployed().then(function(contract) {
    	contract.setInstructor(accounts[0], 22, "Austin", "Tyler");
    	return contract.instructors.call(accounts[0]);
    }).then(function(result) {
    	assert.isTrue(result[0].toNumber() === 22);
    	assert.isTrue(result[1] === "Austin");
    	assert.isTrue(result[2] === "Tyler");
    	done();
    })    
});

//test 2: getInstructors
it("should pull correct values from instructors mapping", function(done) {
    Courses.new().then(function(contract) {
    	contract.setInstructor(accounts[0], 22, "Austin", "Tyler");
    	contract.setInstructor(accounts[1], 400, "Kevin", "Test");
    	contract.setInstructor(accounts[2], 57, "Third", "Name");
    	return contract.getInstructors.call();
    }).then(function(result) {
    	assert.isTrue(result.length === 3);
    	done();
    })    
  });

//test 3: getInstructor
it("should pull correct values from instructors mapping", function(done) {
    Courses.new().then(function(contract) {
    	contract.setInstructor(accounts[0], 22, "Austin", "Tyler");
    	return contract.getInstructor.call(accounts[0]);
    }).then(function(result) {
    	assert.isTrue(result[0].toNumber() === 22);
    	assert.isTrue(result[1] === "Austin");
    	assert.isTrue(result[2] === "Tyler");
    	done();
    })    
  });

//test 4: countInstructors
it("should pull correct values from instructors mapping", function(done) {
    Courses.new().then(function(contract) {
    	contract.setInstructor(accounts[0], 22, "Austin", "Tyler");
    	contract.setInstructor(accounts[1], 400, "Kevin", "Test");
    	contract.setInstructor(accounts[2], 57, "Third", "Name");
    	return contract.countInstructors.call();
    }).then(function(result) {
    	assert.isTrue(result.toNumber() === 3);
    	done();
    })    
  });

});
