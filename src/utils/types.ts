export enum LoadingStatus {
  None = 'none',
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
}

export interface RegisterData {
  name: String;
  surname: String;
  password: String;
  email: String;
  vk?: String;
  telegram?: String;
  instagram?: String;
}

export interface LoginData {
  email: String;
  password: String;
}

export enum ServerResponseStatus {
  Success = 'success',
  Error = 'error',
}

export enum Gender {
  Male = 'Мужское',
  Female = 'Женское'
  
} // Подумать на счет добавления дополнительных гендеров в следующих релизах
