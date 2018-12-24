export interface UsersInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: string;
    };
  };
}

export interface ITest {
  /**
   * getTest
   */
  name: string;

  getTest(): string;
}
