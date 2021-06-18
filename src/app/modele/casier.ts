export class Casier {

    numero:number | undefined
    code?:string
    occupant:number | undefined
    dateoccupation:Date | undefined
    liberation:Date | undefined
    renouvellement:Date | undefined
    retrait:Date | undefined
    miserebut:Date | undefined
    destruction:Date | undefined
  
    estOccupe():boolean {
      return (this.dateoccupation instanceof Date)
    }
  
    toggleOccupation() : void {
      if (this.dateoccupation instanceof Date) {
        this.dateoccupation = new Date()
      }
      else {
        this.dateoccupation = new Date()
      }
    }
  
  }
  