export interface UserDetail {
    code: number;
    result: {
      id: number;
      name: string;
      gender: string;
      status: number;
      address: string;
      roleNames: string[];
    };
  }
  