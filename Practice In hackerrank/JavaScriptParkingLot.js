/*  JavaScript: Parking Lot
Create a solution to manage a parking lot.

 

Implement the ParkingLot class that manages a parking lot with a number of slots or spaces. The class has the following constructor and methods:

The constructor ParkingLot(slots) where parameter slots is the size of the parking lot.  Slots are numbered consecutively from 1 to slots, [1, 2, 3, ..., slots].
The method park(carId) - Parks the car with the given carId at the unoccupied slot with the lowest number and returns true. If all slots are occupied, the car is not parked and it returns false.
The method getSlots() - Returns an array of all the parking slots where the ith element is the id of the car parked there, or null if the slot is unoccupied.
The method remove(carId) - Frees the parking slot where the car is parked and returns true. It returns false if a car with the given carId is not found.
 

The locked stub code validates the correctness of the ParkingLot class implementation by performing the following operations:

Park carId: If the return value of the call is true, it prints 'Parking Started: <carId>' .  Otherwise,  it prints 'Parking Full: <carId>'.
Remove carId: If the return value is true, it prints 'Car id <carId> removed from parking'. Otherwise, it prints 'Car: <carId> not found'.
GetSlots: For an occupied slot, it prints 'Parked at slot <slotNumber>: <carId>'. For an unoccupied slot, it prints 'Slot <slotNumber> is empty'.
 

Constraints:

The maximum number of method calls is 15.
At any time, no two parked cars have the same carId.
 

Input Format For Custom Testing
The first line contains an integer, n, the number of slots in the ParkingLot object.

The second line contains an integer, m, the number of operations to be performed.

Each line i of the m subsequent lines (where 0 ≤ i < m) contains one of the three operations listed above with parameters if required.

Sample Case 0
Sample Input For Custom Testing

STDIN              Function
-----              --------
5             →    n = 5
6             →    m = 6
Park CAR-10   →    first operation
Park CAR-20
Park CAR-30
GetSlots
Remove CAR-20
GetSlots      →    sixth operation
 

Sample Output

Parking Lot created with number of slots as 5
Parking Started: CAR-10
Parking Started: CAR-20
Parking Started: CAR-30
Parked at slot 1: CAR-10
Parked at slot 2: CAR-20
Parked at slot 3: CAR-30
Slot 4 is empty
Slot 5 is empty
Car id CAR-20 removed from parking
Parked at slot 1: CAR-10
Slot 2 is empty
Parked at slot 3: CAR-30
Slot 4 is empty
Slot 5 is empty

 */

class ParkingLot {
  // Add the methods here
  constructor(slots) {
    this.slots = new Array(slots).fill(null);
  }

  park(carId) {
    const index = this.slots.findIndex((slot) => slot === null);
    if (index === -1) {
      return false;
    }
    this.slots[index] = carId;
    return true;
  }

  getSlots() {
    return this.slots.slice();
  }

  remove(carId) {
    const index = this.slots.findIndex((slot) => slot === carId);
    if (index === -1) {
      return false;
    }
    this.slots[index] = null;
    return true;
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numberOfSlots = parseInt(readLine().trim());
  const parkingLotObj = new ParkingLot(numberOfSlots);
  ws.write(`Parking Lot created with number of slots as ${numberOfSlots}\n`);

  let numberOfOperations = parseInt(readLine().trim());
  while (numberOfOperations-- > 0) {
    const inputs = readLine().trim().split(' ');
    const operation = inputs[0];
    const carId = inputs[1];

    switch (operation) {
      case 'Park':
        if (parkingLotObj.park(carId)) {
          ws.write(`Parking Started: ${carId}\n`);
        } else {
          ws.write(`Parking Full: ${carId}\n`);
        }
        break;
      case 'Remove':
        if (parkingLotObj.remove(carId)) {
          ws.write(`Car id ${carId} removed from parking\n`);
        } else {
          ws.write(`Car: ${carId} not found\n`);
        }
        break;
      case 'GetSlots':
        const status = parkingLotObj.getSlots();
        status.forEach((obj, i) => {
          if (obj) {
            ws.write(`Parked at slot ${i + 1}: ${obj}\n`);
          } else {
            ws.write(`Slot ${i + 1} is empty\n`);
          }
        });
        break;
      default:
        break;
    }
  }
  ws.end();
}
