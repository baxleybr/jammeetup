export class PersonalCustomElement {

  public profile: Profile = {
    personal: {
      firstName: '',
      lastName: '',
      stageName: '',
      email: '',
    },
    roles: [
      
    ],
    equipment: [

    ],
  };

  onSave() {
    for (const property in this.profile.personal) {
      console.log(property, ': ', this.profile.personal[property]);
    }
  }
}

class Profile {
  personal: IPersonal;
  roles: IRole[];
  equipment: IEquipment[];
}

interface IPersonal {
  firstName: string;
  lastName: string;
  stageName: string;
  email: string;
}

interface IRole {
  title: string;
  skillLevel?: 'beginner' | 'intermediate' | 'expert';
  interest?: 'meh' | 'like it' | 'love it';
}

interface IEquipment {
  title: string;
  category: string;
  description?: string;
}
