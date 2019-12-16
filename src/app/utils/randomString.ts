export function RandomString(): string {
  let outString: string = '';
  let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 12; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }
  return outString;
}
