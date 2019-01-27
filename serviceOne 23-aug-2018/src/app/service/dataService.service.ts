
export class DataService {

  TempArr: {foodName: string, foodPrice: number, foodType: string} [] = [ { foodName: '', foodPrice: null, foodType: ''} ];

  printData(foodName: string, foodPrice: number, foodType: string) {
    this.TempArr.push({
      foodName: foodName,
      foodPrice: foodPrice,
      foodType: foodType
 });

  }


  showArray() {
    console.log(this.TempArr);
    console.log(this.TempArr)
  }

}
