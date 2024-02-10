
// Interface for save prof in db
export interface IProfData {
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    password: string;
    active: boolean;
    role: string;
}

// Interface prof from db
export interface IProfDataFromDB {
    _id: string,
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    password: string;
    active: boolean;
    role: string;
}

// Interface for register prof
export interface IProfRegisterData {
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    password: string;
}

// LOGIN
export interface IProfLoginData {
    dni: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    user: IProfData;
    message: string;
}

// LocalStorage 'prof'
export interface ILocalStorageProfData {
    _id: string,
    firstName: string;
    lastName: string;
    dni: string;
    healthPlan?: string;
    phone: string;
    email: string;
    active: boolean;
    role: string;
}
  