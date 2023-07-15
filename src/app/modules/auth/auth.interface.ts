/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

{
  /* ====================== 

{
 "password":"abrakadabra",
 "role": "buyer",
  "name": {
    "firstName": "Kopa",
     "lastName": "Samsu"
  },
 "phoneNumber":"01711111111",
 "address": "Chattogram",
 "budget":30000  // money to buy the cow
 "income":0 // By Default 0
}

====================== */
}
export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  password: string;
  role: string;
  name: UserName;
  phoneNumber: string;
  address: string;
  budget: number;
  income?: number;
  id?: string;
};

export type AuthModel = {
  isUserExist(
    phoneNumber: string
  ): Promise<Pick<IUser, 'phoneNumber' | 'password' | 'role' | 'id'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
