/*  Javascript: Employee Inheritance
The goal of this problem is to use prototypal inheritance in Javascript.

 

Implement inheritance as described below-

 

Create a function Employee that takes a single parameter and assigns it to member variable 'title'.

Add the following functions to the Employee prototype -

setTitle - This function take a single parameter and assigns it to the title member variable.
getTitle - This function returns the member variable title.
 

Create a function Engineer that -

inherits from parent Employee.
takes 2 parameters - title (String) and isManager (boolean) and assigns it to parent's member variable title and self's member variable isManager. 
Add these functions to Engineer's existing prototype -

setIsManager - This function take a single parameter and assigns it to the member variable isManager.
getIsManager - This function returns the member variable isManager.
 

NOTE - The stub code takes care of testing the implementation. Make sure to inherit the parent. This is being tested too.

 

Input Format For Custom Testing
The first line contains a string title and boolean isManager value to build Engineer object.

The second line contains the new title value to set on the created Engineer object.

The third line contains the new isManager value to set on the created Engineer object.

Sample Case 0
Sample Input For Custom Testing

STDIN                Function
-----                --------   
Developer false →    Engineer title = 'Developer' isManager = false
Developer4      →    new title = 'Developer4'
true            →    new isManager = true
Sample Output

Initial Employee Profile - Title is Developer. Is not a Manager
Final Employee Profile - Title is Developer4. Is a Manager
Engineer.prototype has property setTitle: false
Engineer.prototype has property getTitle: false
Engineer.prototype has property setIsManager: true
Engineer.prototype has property getIsManager: true
Explanation

The first line of the input is used to create an Engineer with title as 'Developer' and isManager value as false initially. The stub code then gets the title and isManager values of the created object prints them. The second line of the input is used to update title to 'Developer4' and third line is used to update isManager to true. The stub code then gets the title and isManager values of the created object prints them. The last 4 of lines of output show checks for the correct prototypal chain. */

function Employee(title) {
  this.title = title;
}

Employee.prototype.setTitle = function (title) {
  this.title = title;
};

Employee.prototype.getTitle = function () {
  return this.title;
};

function Engineer(title, isManager) {
  Employee.call(this, title);
  this.isManager = isManager;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.setIsManager = function (isManager) {
  this.isManager = isManager;
};

Engineer.prototype.getIsManager = function () {
  return this.isManager;
};

// The following code tests the implementation:

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  var inputs = readLine().split(' ');
  var engineerObject = new Engineer(
    inputs[0],
    inputs[1].toLowerCase() === 'true'
  );

  ws.write(
    `Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${
      engineerObject.getIsManager() ? 'Is' : 'Is not'
    } a Manager\n`
  );

  engineerObject.setTitle(readLine());
  engineerObject.setIsManager(readLine().toLowerCase() === 'true');

  ws.write(
    `Final Employee Profile - Title is ${engineerObject.getTitle()}. ${
      engineerObject.getIsManager() ? 'Is' : 'Is not'
    } a Manager\n`
  );

  ws.write(
    `Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty(
      'setTitle'
    )}\n`
  );
  ws.write(
    `Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty(
      'getTitle'
    )}\n`
  );
  ws.write(
    `Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty(
      'setIsManager'
    )}\n`
  );
  ws.write(
    `Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty(
      'getIsManager'
    )}\n`
  );
}
