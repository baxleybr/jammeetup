export class EquipmentCustomElement {
  public equipment: IEquipment[] = [{ title: 'Fender Stratocaster', category: 'Guitar', description: '2002 Custom Mexican Strat' }];

  public addItem() {
    this.equipment.push({ title: '', category: '', description: '' })
  }

  public onSave() {
    this.equipment.forEach((item) => {
      for (const property in item) {
        console.log(property, ': ', item[property]);
      }
    });
  }
}

interface IEquipment {
  title: string;
  category: string;
  description?: string;
}
