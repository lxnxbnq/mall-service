// DTO(数据传输对象)模式。DTO是一个对象，它定义了如何通过网络发送数据

export class CatInfo {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}