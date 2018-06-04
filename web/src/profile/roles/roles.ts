export class RolesCustomElement {
  public roles: IRole[] = [{ title: 'Lead Guitar', skillLevel: 'expert', interest: 'love it' }];

  public addRole() {
    this.roles.push({ title: '', skillLevel: '', interest: '' })
  }

  public onSave() {
    this.roles.forEach((role) => {
      for (const property in role) {
        console.log(property, ': ', role[property]);
      }
    });
  }
}


interface IRole {
  title: string;
  skillLevel?: string; // 'beginner' | 'intermediate' | 'expert';
  interest?: string; // 'meh' | 'like it' | 'love it';
}
