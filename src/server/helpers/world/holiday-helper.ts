
export enum Holiday {
  Halloween = 'Halloween'
}

export enum Currency {
  Gold = 'gold',
  Halloween = 'halloween'
}

const holidayChecker = {

  // takes place in October, all month
  Halloween: () => {
    return new Date().getMonth() === 8;
  }
};

export class HolidayHelper {

  static isHoliday(hol: Holiday): boolean {
    return holidayChecker[hol]();
  }

}